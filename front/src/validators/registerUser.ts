import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Digite o nome"),
  email: yup.string().required("Digite o email").email("Email inválido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
    .matches(/([a-z])/, "Senha deve conter pelo menos uma letra minúscula")
    .matches(/(\d)/, "Senha deve conter pelo menos um número")
    .matches(/(\W)/, "Senha deve conter pelo menos um caracter especial")
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .required("Senha necessária"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha não confere"),
  telephone: yup.number(),
});
