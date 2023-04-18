import { GrFormAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
import { DashboardContainer } from "./style";
import { useContext } from "react";
import { IContacts, UserContext } from "../../contexts/UserContext";
import AddModal from "../../components/modals/addModal";
import { ContactContext } from "../../contexts/ContactContext";
import EditModal from "../../components/modals/editModal";

const Dashboard = () => {
  const { handleLogout, user, contacts } = useContext(UserContext);

  const {
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    setContactId,
    setContactName,
  } = useContext(ContactContext);

  const eventModal = (contact: IContacts) => {
    setContactName(contact.name);
    setContactId(contact.id);
    setEditModal(true);
  };

  return (
    <>
      {user && (
        <>
          <DashboardContainer>
            <div className="container">
              <div className="flexGrid">
                <div className="flexLogo">
                  <header className="logoContainer">
                    <Link onClick={() => handleLogout()} to="/">
                      Sair
                    </Link>
                  </header>
                </div>
                <div className="line"></div>
                <div className="flexPresentation">
                  <div className="presentationContainer">
                    <h3>Olá, {user.name}</h3>
                  </div>
                </div>
                <div className="line"></div>
                <div className="developContainer">
                  <div className="tecsHeader">
                    <h4>Contatos</h4>
                    <button onClick={() => setAddModal(true)}>
                      <GrFormAdd></GrFormAdd>
                    </button>
                  </div>
                  <ul>
                    {contacts.length !== 0 ? (
                      contacts.map((contact) => {
                        console.log(contact);
                        return (
                          <li
                            key={contact.email}
                            onClick={() => eventModal(contact)}
                          >
                            <div>
                              <h4>{contact.name}</h4>
                              <p>{contact.email}</p>
                              <p>{contact.telephone}</p>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <h4>Nenhum contato adicionado! Adicione clicando no +</h4>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </DashboardContainer>
          {addModal && <AddModal />}
          {editModal && <EditModal />}
        </>
      )}
    </>
  );
};

export default Dashboard;
