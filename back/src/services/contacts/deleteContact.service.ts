import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (id): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id: id,
  });

  if (!contact) {
    throw new AppError("Invalid id", 404);
  }

  await contactRepository.delete({ id: id });

  return contact;
};

export default deleteContactService;
