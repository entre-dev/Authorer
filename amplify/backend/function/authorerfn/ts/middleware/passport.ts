import { HTTP_STATUS } from './../configs/constant';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Response, NextFunction } from 'express';
import type { UserJwtPayload, IGetUserAuthInfoRequest } from '../configs/@type'
dotenv.config();

const auth = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }

    console.log('auth middleware request');
    const token = req.header('Authorization');

    if (!token)
      return res.status(403).send({
        success: false,
        msg: 'Access denied.',
      });

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as UserJwtPayload;
    req.jwtObject = decoded;

    next();
  } catch (e) {
    console.error(e);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      msg: 'internal error'
    })
  }
}

export default auth