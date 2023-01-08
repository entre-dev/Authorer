import { Request, Response } from 'express';
import { HTTP_STATUS } from '../configs/constant';

export const signUp = async (req: Request, res: Response) => {
  try {

    res.status(HTTP_STATUS.NOT_IMPLEMENTED).send({ message: 'Not implemented' })

  } catch (e: unknown) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: e });
  }
}