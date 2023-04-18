import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts/contacts.controller";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureEntryIsValidMiddleware from "../middlewares/ensureEntryIsValid.middleware";
import ensureContactEmailAvailabilityMiddleware from "../middlewares/ensureContactEmailAvailability";
import {
  contactSerializer,
  contactUpdateSerializer,
} from "../serializers/contact.serializers";

const { Router } = require("express");

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSerializer),
  ensureAuthMiddleware,
  createContactController
);
contactsRoutes.get("", ensureAuthMiddleware, listContactController);
contactsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  ensureAuthMiddleware,
  updateContactController
);
contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export default contactsRoutes;
