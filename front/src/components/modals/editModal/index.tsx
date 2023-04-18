import { useForm } from "react-hook-form";
import { contactSchema } from "../../../validators/contactEdit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import {
  IOnSubmitEdit,
  ContactContext,
} from "../../../contexts/ContactContext";
import { ContainerEditModal } from "./style";
import { useOutsiedeClick } from "../../../hooks/useOutsideClick";

const EditModal = () => {
  const { setEditModal, onSubmitEdit, deleteContact } =
    useContext(ContactContext);

  const modalRef = useOutsiedeClick(() => {
    setEditModal(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitEdit>({
    resolver: yupResolver(contactSchema),
  });

  return (
    <ContainerEditModal>
      <div className="content" ref={modalRef}>
        <div className="headerContainer">
          <h2>Detalhes dos contatos</h2>
          <button onClick={() => setEditModal(false)}>X</button>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmitEdit)}>
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
            <div className="buttonContainer">
              <button className="editButton" type="submit">
                Salvar alterarações
              </button>
              <button
                type="button"
                className="removeButton"
                onClick={() => deleteContact()}
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContainerEditModal>
  );
};

export default EditModal;
