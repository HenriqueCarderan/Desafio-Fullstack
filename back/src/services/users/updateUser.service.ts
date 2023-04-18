import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";

const updateUserService = async (userData: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  const updatedUser = userRepository.create({
    ...user,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const updatedUserWithoutPassword =
    await userWithoutPasswordSerializer.validate(updatedUser, {
      stripUnknown: true,
    });

  return updatedUserWithoutPassword;
};

export default updateUserService;
