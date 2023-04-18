import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Digite o nome do contato"),
  email: yup
    .string()
    .required("Digite o email do contato")
    .email("Email inválido"),
  telephone: yup.string().required("Digite o telefone do contato"),
});
