import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async (): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find({
    relations: {
      user: true,
    },
  });

  return contacts;
};

export default listContactService;
