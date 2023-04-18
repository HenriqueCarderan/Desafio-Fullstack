import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    relations: {
      contacts: true,
    },
  });

  const userWithoutPassword = users.map((user) => {
    delete user.password;
    return user;
  });

  return userWithoutPassword;
};

export default listUserService;
