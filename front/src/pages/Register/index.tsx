import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/registerUser";
import { RegisterContainer } from "./style";
import { useContext } from "react";
import { IUserRegisterData, UserContext } from "../../contexts/UserContext";

const Register = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <RegisterContainer>
      <div className="container">
        <div className="flexGrid">
          <div className="logoContainer">
            <Link to="/">Voltar</Link>
          </div>
          <div className="formContainer">
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis, vamos nessa</p>
            <form onSubmit={handleSubmit(onSubmitRegister)}>
              <label>Nome</label>
              <input placeholder="Digite seu nome aqui" {...register("name")} />
              <span>
                <>{errors.name?.message}</>
              </span>
              <label>Email</label>
              <input
                placeholder="Digite seu email aqui"
                {...register("email")}
              />
              <span>
                <>{errors.email?.message}</>
              </span>
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <span>
                <>{errors.password?.message}</>
              </span>
              <label>Confirmar senha</label>
              <input
                type="password"
                placeholder="Confirme sua senha"
                {...register("confirmPassword")}
              />
              <span>
                <>{errors.confirmPassword?.message}</>
              </span>
              <label>Telefone</label>
              <input
                placeholder="Insira aqui seu telephone"
                {...register("telephone")}
              />
              <span>
                <>{errors.telephone?.message}</>
              </span>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </RegisterContainer>
  );
};

export default Register;
