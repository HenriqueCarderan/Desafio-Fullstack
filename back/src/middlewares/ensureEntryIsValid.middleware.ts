import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { ObjectSchema } from "yup";

const ensureEntryIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: req.params.id,
  });

  const data = Object.keys(req.body);

  if (!user) {
    throw new AppError("Invalid id", 404);
  }

  if (
    data.includes("isAdm") ||
    data.includes("isActive") ||
    data.includes("id")
  ) {
    throw new AppError("Invalid data", 401);
  }

  next();
};

export default ensureEntryIsValidMiddleware;
