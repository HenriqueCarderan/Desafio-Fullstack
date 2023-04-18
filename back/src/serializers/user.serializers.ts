import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/users/index";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export { userSerializer, userWithoutPasswordSerializer, userUpdateSerializer };
