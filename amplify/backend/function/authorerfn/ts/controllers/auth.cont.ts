import { NewUser } from './../configs/@type';
import { Request, Response } from 'express';
import { HTTP_STATUS } from '../configs/constant';
import * as USER_SERVICE from '../services/user.serv'

export const signUp = async (req: Request, res: Response) => {
  try {

    const { name, email, password, phone } = req.body as NewUser;

    res.status(HTTP_STATUS.NOT_IMPLEMENTED).send({ message: 'Not implemented' })

  } catch (e: unknown) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: e });
  }
}