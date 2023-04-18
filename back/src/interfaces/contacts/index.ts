export interface IContactRequest {
  name: string;
  email: string;
  telephone: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

export interface IContactData {
  userId: string;
  contactData: IContact;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}
