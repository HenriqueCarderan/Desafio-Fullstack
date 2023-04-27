import { IContact, IContactData } from "../../interfaces/contacts";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const createContactService = async (data: IContactData): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const { userId, contactData } = data;

  const user = await userRepository.findOneBy({ id: userId });
  const contact = contactRepository.create(contactData);

  console.log(contact);
  contact.user = user;
  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
