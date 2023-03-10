import type { NewUser } from '../configs/@type';
import Prisma from '@prisma/client';
import getErrorMessages from '../utils/getErrorMsg';
import { hashString } from '../utils/DecryptEncryptString';
import { v4 } from 'uuid'

const prisma = new Prisma.PrismaClient();

export const $addUser = async (user: NewUser) => {
  try {

    const prefixPhone = user.phone?.slice(0, 3);
    const hashedPassword = await hashString(user.password)

    if (!hashedPassword) throw new Error('Internal server error')

    const newUser = await prisma.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword.hash,
        phone: user.phone,
        prefixPhone
      }
    });

    await prisma.audit.create({
      data: {
        action: 'create account',
        userId: newUser.id,
      }
    })

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

export const $addDeveloper = async (user: Prisma.Users) => {
  try {

    await prisma.client.create({
      data: {
        userId: user.id,
        secret: v4(),
        clientId: v4(),
      }
    })

    return {
      done: true,
      message: 'Developer created',
    }

  } catch (error: unknown) {

    const errorMessage = getErrorMessages(error)

    return {
      done: false,
      message: errorMessage,
      data: null
    }

  }
}

export const $getUser = async (id: number) => {
  try {

    const user = await prisma.users.findUnique({
      where: {
        id
      }
    })

    return {
      done: true,
      message: 'User found',
      data: user
    }

  } catch (error: unknown) {
    const errorMessage = getErrorMessages(error)

    return {
      done: false,
      message: errorMessage,
      data: null
    }

  }
}

export const $getUserByEmail = async (email: string) => {
  try {

    const user = await prisma.users.findUnique({
      where: {
        email
      }
    })

    return {
      done: true,
      message: 'User found',
      data: user
    }

  } catch (error: unknown) {
    const errorMessage = getErrorMessages(error)

    return {
      done: false,
      message: errorMessage,
      data: null
    }

  }
}