// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUserProvider {
  children: ReactNode;
}

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  telephone: string;
  isAdm: boolean;
}

export interface IContacts {
  id: string;
  name: string;
  email: string;
  telephone: string;
  isActive: boolean;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string;
  created_at: string;
  updated_at: string;
  contacts: IContacts[];
  avatar_url: string;
}

interface IUserProviderData {
  onSubmitLogin: (data: IUserLoginData) => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  onSubmitRegister: (data: IUserRegisterData) => void;
  handleLogout: () => void;
  contacts: IContacts[];
  setContacts: React.Dispatch<React.SetStateAction<IContacts[]>>;
}

export const UserContext = createContext({} as IUserProviderData);

function UserProvider({ children }: IUserProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const navigate = useNavigate();
  let sortContacts = [];

  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    if (token) {
      let id = window.localStorage.getItem("@USERID");
      api
        .get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          let contactList = res.data.contacts;
          sortContacts = contactList.sort(function (a, b): any {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
          });
          setUser(res.data);
          setContacts(sortContacts);
          navigate("/users/dashboard", { replace: true });
        })
        .catch((err) => {
          window.localStorage.clear();
          navigate("/", { replace: true });
        });
    } else {
      window.localStorage.clear();
      navigate("/", { replace: true });
    }
  }, []);

  const onSubmitLogin = (data: IUserLoginData) => {
    api
      .post("/login", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);
        setUser(res.data.user);

        sortContacts = res.data.user.contacts.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });

        setContacts(sortContacts);
        toast.success("Login realizado com sucesso");
        navigate("/users/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos");
      });
  };

  const onSubmitRegister = (data: IUserRegisterData) => {
    data.isAdm = false;
    delete data.confirmPassword;
    api
      .post("/users", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        toast.error("Email já cadastrado");
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{
        onSubmitLogin,
        user,
        setUser,
        onSubmitRegister,
        handleLogout,
        contacts,
        setContacts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
