import type { NewUser } from '../configs/@type';
import Prisma from '@prisma/client';
import getErrorMessages from '../utils/getErrorMsg';
import { hashString } from '../utils/DecryptEncryptString';

const prisma = new Prisma.PrismaClient();

export const $addUser = async (user: NewUser) => {
  try {

    const prefixPhone = user.phone?.slice(0, 3);
    const hashedPassword = await hashString(user.password)

    if (!hashedPassword) throw new Error('Internal server error')

    await prisma.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword.hash,
        phone: user.phone,
        prefixPhone
      }
    });

    return {
      done: true,
      message: 'User created',
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