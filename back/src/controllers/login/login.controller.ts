import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import createSessionService from "../../services/login/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserRequest = req.body;
  const { user, token } = await createSessionService(sessionData);
  return res.json({ user, token });
};

export default createSessionController;
