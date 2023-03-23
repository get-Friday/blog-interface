import type { IAddress } from "./IAddress";
import type { ICompany } from "./ICompany";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany | undefined;
}