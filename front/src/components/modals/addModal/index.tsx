/* eslint-disable react-hooks/exhaustive-deps */
import { ContainerAddModal } from "./style";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../../validators/contactAdd";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import {
  IOnSubmitContact,
  ContactContext,
} from "../../../contexts/ContactContext";
import { useOutsiedeClick } from "../../../hooks/useOutsideClick";

const AddModal = () => {
  const { onSubmitContact, setAddModal } = useContext(ContactContext);

  const modalRef = useOutsiedeClick(() => {
    setAddModal(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitContact>({
    resolver: yupResolver(contactSchema),
  });

  return (
    <ContainerAddModal>
      <div className="content" ref={modalRef}>
        <div className="headerContainer">
          <h2>Cadastrar Contato</h2>
          <button onClick={() => setAddModal(false)}>X</button>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmitContact)}>
            <label>Nome</label>
            <input placeholder="Name" {...register("name")} />
            <span>
              <>{errors.name?.message}</>
            </span>
            <label>Email</label>
            <input placeholder="Email" {...register("email")} />
            <span>
              <>{errors.email?.message}</>
            </span>
            <label>Telefone</label>
            <input placeholder="Telefone" {...register("telephone")} />
            <span>
              <>{errors.telephone?.message}</>
            </span>
            <button type="submit">Cadastrar Contato</button>
          </form>
        </div>
      </div>
    </ContainerAddModal>
  );
};

export default AddModal;
