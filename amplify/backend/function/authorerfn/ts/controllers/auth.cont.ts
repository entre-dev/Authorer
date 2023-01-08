import { NewUser } from './../configs/@type';
import { Request, Response } from 'express';
import { HTTP_STATUS } from '../configs/constant';
import * as USER_SERVICE from '../services/user.serv'
import z from 'zod';
import { decodePassword } from '../utils/DecryptEncryptString';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { v4 } from 'uuid';

dotenv.config();

export const signUp = async (req: Request, res: Response) => {
  try {

    const { name, email, password, phone } = req.body as NewUser;

    const schema = z.object({
      name: z.string().optional(),
      email: z.string().email(),
      password: z.string().min(6),
      phone: z.string().optional(),
    });

    const result = schema.safeParse({ name, email, password, phone });

    if (!result.success) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: result.error });
    }

    const { done, message } = await USER_SERVICE.$addUser({ name, email, password, phone });

    if (!done) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send({ message });
    }

    return res.status(HTTP_STATUS.CREATED).send({ message });

  } catch (e: unknown) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: e });
  }
}

export const signIn = async (req: Request, res: Response) => {
  try {

    const { email, password } = req.body as NewUser;

    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const result = schema.safeParse({ email, password });

    if (!result.success) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: result.error });
    }

    const { done, message, data } = await USER_SERVICE.$getUserByEmail(email);

    if (!done || !data) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: message || 'User not found' });
    }

    const isValid = await decodePassword(password, data.password);

    if (!isValid) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: 'Email or Password is not correct' });
    }

    const userAccessToken = jwt.sign({ id: data.id }, process.env.JWT_SECRET || '', { expiresIn: '1d' });
    const csrfToken = v4();

    res.cookie('csrfToken', csrfToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return res.status(HTTP_STATUS.OK).send({ message: 'Login success', data: { userAccessToken, csrfToken } });

  } catch (e: unknown) {
    console.error(e);

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: e });
  }
}