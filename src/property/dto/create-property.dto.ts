/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreatePropertyDTO {
  id?: string;
  @IsNotEmpty()
  propertyName: string;
  @IsNotEmpty()
  guestLimit: number;
  @IsNotEmpty()
  ownerName: string;
  @IsNotEmpty()
  propertyImage: string;
  @IsNotEmpty()
  location: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  availability: boolean;
  @IsNotEmpty()
  phoneNumber: string;
  @IsNotEmpty()
  kitchen: boolean;
  @IsNotEmpty()
  wifi: boolean;
  @IsNotEmpty()
  parkingLot: boolean;
  @IsNotEmpty()
  swimmingPool: boolean;
  @IsNotEmpty()
  security: boolean;
}
