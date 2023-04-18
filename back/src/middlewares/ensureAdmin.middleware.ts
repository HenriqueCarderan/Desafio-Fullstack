import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdmin = req.user.isAdm;
  if (!isAdmin) {
    return res.status(403).json({ message: "You are not Admin" });
  }
  next();
};

export default ensureAdminMiddleware;
