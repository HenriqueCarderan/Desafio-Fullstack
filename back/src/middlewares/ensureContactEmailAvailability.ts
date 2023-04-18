import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const ensureContactEmailAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const contactRepository = AppDataSource.getRepository(Contact);

  const emailAlreadyExists = await contactRepository.findOneBy({
    email: email,
  });

  if (emailAlreadyExists) {
    return res
      .status(400)
      .json({ message: "This email adress is already being used" });
  }
  next();
};

export default ensureContactEmailAvailabilityMiddleware;
