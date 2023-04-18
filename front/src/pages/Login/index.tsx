import { Link } from "react-router-dom";
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/loginUser";
import { useContext } from "react";
import { IUserLoginData, UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <LoginContainer>
      <div className="container">
        <div className="flexGrid">
          <div className="logo"></div>
          <div className="formContainer">
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <label className="label">Email</label>
              <input
                placeholder="Digite seu email aqui"
                {...register("email")}
              />
              {errors ? <span>{errors.email?.message}</span> : <></>}
              <label className="label">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha aqui"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <button type="submit">Entrar</button>
              <p>Ainda não possui uma conta?</p>
              <Link to="/register">Cadastre-se</Link>
            </form>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
