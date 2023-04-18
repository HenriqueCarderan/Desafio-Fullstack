import {
  createUserController,
  deleteUserController,
  listUserController,
  listSpecificUserController,
  updateUserController,
} from "../controllers/users/users.controller";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailAvailabilityMiddleware from "../middlewares/ensureEmailAvailability.middleware";
import ensureEntryIsValidMiddleware from "../middlewares/ensureEntryIsValid.middleware";
import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/user.serializers";

const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  ensureEmailAvailabilityMiddleware,
  createUserController
);
usersRoutes.get("", ensureAuthMiddleware, listUserController);
usersRoutes.get("/:id", ensureAuthMiddleware, listSpecificUserController);
usersRoutes.patch(
  "/:id",
  ensureEntryIsValidMiddleware,
  ensureDataIsValidMiddleware(userUpdateSerializer),
  ensureAuthMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdminMiddleware,
  deleteUserController
);

export default usersRoutes;
