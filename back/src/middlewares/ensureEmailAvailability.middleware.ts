import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const ensureEmailAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const userAlreadyExists = await userRepository.findOneBy({
    email: email,
  });

  if (userAlreadyExists) {
    return res
      .status(400)
      .json({ message: "This email adress is already being used" });
  }
  next();
};

export default ensureEmailAvailabilityMiddleware;
