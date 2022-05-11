export interface User{
  id: number;
  name: string;
  email: string;
  age?: number;
  phoneNumber?: string;
  hobby?: string;
}

export interface Employee {
  id: number;
  name: string;
  department: string;
  gender: string;
  position: string;
  phoneNumber: string;
  joinDate: string;
}