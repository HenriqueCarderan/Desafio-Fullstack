import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

interface IContactProvider {
  children: ReactNode;
}

export interface IOnSubmitContact {
  name: string;
  email: string;
  telephone: string;
}

export interface IOnSubmitEdit {
  name?: string;
  email?: string;
  telephone?: string;
}

interface IContactProviderData {
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitContact: (data: IOnSubmitContact) => void;
  onSubmitEdit: (data: IOnSubmitEdit) => void;
  deleteContact: () => void;
  contactId: number | string;
  setContactId: React.Dispatch<React.SetStateAction<number | string>>;
  contactName: string;
  setContactName: React.Dispatch<React.SetStateAction<string>>;
}

export const ContactContext = createContext({} as IContactProviderData);

function ContactProvider({ children }: IContactProvider) {
  const { contacts, setContacts } = useContext(UserContext);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [contactId, setContactId] = useState<number | string>("");
  const [contactName, setContactName] = useState<string>("");

  const onSubmitContact = (data: IOnSubmitContact) => {
    api
      .post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setContacts([...contacts, res.data]);
        toast.success("Contato adicionado com sucesso");
        setAddModal(false);
      })
      .catch((err) => toast.error("Contato já cadastrado"));
  };

  const onSubmitEdit = (data: IOnSubmitEdit) => {
    let { name, email, telephone } = data;
    if (name === "") {
      delete data.name;
    }
    if (email === "") {
      delete data.email;
    }
    if (telephone === "") {
      delete data.telephone;
    }
    api
      .patch(`/contacts/${contactId}`, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        const contactsEdit = contacts.map((contact) => {
          if (contact.id === contactId) {
            return { ...contact, status: res.data.status };
          }
          return contact;
        });
        setContacts(contactsEdit);
        toast.info("Contato editado com sucesso");
        setEditModal(false);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const deleteContact = () => {
    api
      .delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then(() => {
        const contactsDelete = contacts.filter(
          (contact) => contact.id !== contactId
        );
        setContacts(contactsDelete);
        toast.info("Contato removido com sucesso");
        setEditModal(false);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <ContactContext.Provider
      value={{
        addModal,
        setAddModal,
        onSubmitContact,
        editModal,
        setEditModal,
        onSubmitEdit,
        deleteContact,
        contactId,
        setContactId,
        contactName,
        setContactName,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
