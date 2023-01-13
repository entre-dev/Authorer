import Prisma from '@prisma/client';
import getErrorMessages from '../utils/getErrorMsg';
import { v4 } from 'uuid'
import dayjs from 'dayjs'

const prisma = new Prisma.PrismaClient();

const $findAccessToken = async (accessToken: string) => {
  try {
    const token = await prisma.verificationRequest.findFirst({
      where: {
        token: accessToken
      }
    })

    // validate token.
    if (!token) throw new Error('Invalid token')

    const isExpires = dayjs().isAfter(dayjs(token.expires))

    if (isExpires) throw new Error('Token expired')

    return {
      done: true,
      message: 'Token valid',
    }

  } catch (error: unknown) {
    console.log(error);
    const errorMessage = getErrorMessages(error)

    return {
      done: false,
      message: errorMessage,
    }

  }
}