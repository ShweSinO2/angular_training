export interface Booking{
  name: string;
  address?: string;
  email: string;
  phone: number;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuest?: number;
  roomType: string;
  wifiCost: string;
  readonly totalCost: string;
  specialRequirements?: string;
}

export interface InputObj {
  viewValue: string;
  value: number;
}