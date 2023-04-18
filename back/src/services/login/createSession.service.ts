import { IUserRequest } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import "dotenv/config";

const createSessionService = async ({
  email,
  password,
}: IUserRequest): Promise<{ user: object; token: string }> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    where: { email: email },
    relations: {
      contacts: true,
    },
  });

  const user = users[0];

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    {
      email: email,
      isAdm: user.isAdm,
      id: user.id,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return { user, token };
};

export default createSessionService;
