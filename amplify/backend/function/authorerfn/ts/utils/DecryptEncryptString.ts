import bcrypt from 'bcryptjs';
export const hashString = async (str: string) => {
  try {
    const SALT_ROUNDS = +Math.random().toFixed(5);
    const hash = await bcrypt.hash(str, SALT_ROUNDS);
    return {
      hash,
      salt: SALT_ROUNDS,
    };
  } catch (e) {
    console.error(e);
    return
  }
};

export const decodePassword = async (str: string, hash: string) => {
  return await bcrypt.compare(str, hash);
};