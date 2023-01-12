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
