import type { Request, Response } from 'express';
import type { UserJwtPayload, IGetUserAuthInfoRequest } from '../configs/@type';
import { HTTP_STATUS } from '../configs/constant';
import * as USER_SERVICE from '../services/user.serv'
import z from 'zod';
import { decodePassword } from '../utils/DecryptEncryptString';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { v4 } from 'uuid';

dotenv.config();

const getUserInfoFromThirdParty = async (req: Request, res: Response) => {
  try {

    const {
      userAccessToken,
    } = req.params;

    const {
      scope,
      serverAccessToken,
    } = req.query;


    return res.sendStatus(HTTP_STATUS.NOT_IMPLEMENTED)
  } catch (e) {
    console.error(e);

    return res.sendStatus(HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
}
