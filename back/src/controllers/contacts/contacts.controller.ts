import { Request, Response } from "express";
import { IContact, IContactData } from "../../interfaces/contacts";
import createContactService from "../../services/contacts/createContact.service";
import listContactService from "../../services/contacts/listContact.service";
import updateContactService from "../../services/contacts/updateContact.service";
import deleteContactService from "../../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData: IContact = req.body;
  const userId = req.user.id;
  const data: IContactData = { userId, contactData };
  const newContact = await createContactService(data);
  return res.status(201).json(newContact);
};

const listContactController = async (req: Request, res: Response) => {
  const contact = await listContactService();
  return res.status(201).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const updatedContact = await updateContactService(req.body, req.params.id);
  return res.status(200).json(updatedContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const deletedContact = await deleteContactService(req.params.id);
  return res.status(204).json(deletedContact);
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
