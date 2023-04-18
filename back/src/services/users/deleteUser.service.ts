import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (!user) {
    throw new AppError("Invalid id", 404);
  }

  if (!user.isActive) {
    throw new AppError("Account already deleted", 400);
  }

  user.isActive = false;

  await userRepository.save(user);

  return user;
};

export default deleteUserService;
