import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContactUpdate } from "../../interfaces/contacts";

const updateContactService = async (
  contactData: IContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: id,
  });

  const updatedContact = contactRepository.create({
    ...contact,
    ...contactData,
  });

  await contactRepository.save(updatedContact);

  return updatedContact;
};

export default updateContactService;
