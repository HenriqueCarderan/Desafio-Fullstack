import { IUser } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const createUserService = async (userData: IUser): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);

  delete user.password;

  return user;
};

export default createUserService;
