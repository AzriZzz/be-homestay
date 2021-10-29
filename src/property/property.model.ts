/* eslint-disable prettier/prettier */
export interface IProperty {
  id?:string,
  propertyName: string;
  guestLimit: number;
  ownerName: string;
  propertyImage: string;
  location: string;
  price: number;
  availability: boolean;
  phoneNumber: string;
  kitchen: boolean;
  wifi: boolean;
  parkingLot: boolean;
  swimmingPool: boolean;
  security: boolean;
}
