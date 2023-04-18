import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().nullable(),
  email: yup.string().nullable().email("Email inválido"),
  telephone: yup.string().nullable(),
});
