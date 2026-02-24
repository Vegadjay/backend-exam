import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";

configDotenv();

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export { hashPassword, verifyPassword };
