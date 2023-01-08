import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken'

export type NewUser = {
  name?: string;
  email: string;
  password: string;
  phone?: string;
};

export interface UserJwtPayload extends JwtPayload {
  id: number
}

export interface IGetUserAuthInfoRequest extends Request {
  jwtObject?: string | JwtPayload;
}
