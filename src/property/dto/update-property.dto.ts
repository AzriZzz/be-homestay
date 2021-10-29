/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class UpdatePropertyDTO {
  @IsNotEmpty()
  availability: boolean;
  @IsNotEmpty()
  guestLimit: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  propertyName: string;
  @IsNotEmpty()
  ownerName: string;
  @IsNotEmpty()
  propertyImage: string;
  @IsNotEmpty()
  location: string;
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
