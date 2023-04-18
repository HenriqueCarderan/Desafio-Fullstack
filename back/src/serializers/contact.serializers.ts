import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string(),
});

const contactUpdateSerializer: SchemaOf<IContactUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().notRequired(),
});

export { contactSerializer, contactUpdateSerializer };
