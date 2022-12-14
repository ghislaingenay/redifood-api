// Type of the food card
export interface Food {
  _id?: string;
  name: string;
  photo: string;
  price: number;
  description?: string;
  section: string;
  extra: string;
}

// Type of what the user wants (/orders)
export interface Menu {
  food: Food;
  qty: number;
}

// Type for one order
export interface Order {
  _id?: string;
  table: number;
  paid: boolean;
  total: number;
  menu: Menu[];
  date?: Date | string;
  payment: string;
}

// Interface for the section
export interface Section {
  _id?: string;
  name: string;
  extra: string[];
}

// Interface - request for history page (search: payment choice)
export interface Request {
  search: string;
  datefrom: string;
  dateto: string;
}

// Interface that concern the user (Authentification)
export interface User {
  _id?: string;
  name: string;
  username: string;
  password: string;
}

export interface FoodAndSection {
  foods: Food[];
  section: Section[];
}
