import { Prisma } from '@prisma/client';

const getErrorMessages = (error: unknown) => {
  if (error instanceof TypeError) {
    return error.message;
  }
  if (error instanceof SyntaxError) {
    return error.message;
  }
  if (error instanceof EvalError) {
    return error.message;
  }
  if (error instanceof RangeError) {
    return error.message;
  }
  if (error instanceof ReferenceError) {
    return error.message;
  }
  if (error instanceof URIError) {
    return error.message;
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      return 'username is already taken';
    }
    return 'Internal Server Error register service';
  }
  return 'Internal server error';
}

export default getErrorMessages;