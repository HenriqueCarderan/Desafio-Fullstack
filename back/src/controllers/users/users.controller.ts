import { Request, Response } from "express";
import { IUser } from "../../interfaces/users";
import createUserService from "../../services/users/createUser.service";
import deleteUserService from "../../services/users/deleteUser.service";
import listUserService from "../../services/users/listUser.service";
import listSpecificUserService from "../../services/users/listSpecificUser.service";
import updateUserService from "../../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUser = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.status(201).json(users);
};

const listSpecificUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const users = await listSpecificUserService(id);
  return res.status(201).json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body, req.params.id);
  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const deletedUser = await deleteUserService(req.params.id);
  return res.status(204).json(deletedUser);
};

export {
  createUserController,
  listUserController,
  listSpecificUserController,
  updateUserController,
  deleteUserController,
};
