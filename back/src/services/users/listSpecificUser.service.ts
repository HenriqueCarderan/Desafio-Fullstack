import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listSpecificUserService = async (id): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    where: { id: id },
    relations: {
      contacts: true,
    },
  });

  const userWithoutPassword = users.map((user) => {
    delete user.password;
    return user;
  });

  const res = userWithoutPassword[0];

  return res;
};

export default listSpecificUserService;
