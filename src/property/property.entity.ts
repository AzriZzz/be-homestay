/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PropertyORM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  propertyName: string;
  @Column()
  guestLimit: number;
  @Column()
  ownerName: string;
  @Column()
  propertyImage: string;
  @Column()
  location: string;
  @Column()
  price: number;
  @Column()
  availability: boolean;
  @Column()
  phoneNumber: string;
  @Column()
  kitchen: boolean;
  @Column()
  wifi: boolean;
  @Column()
  parkingLot: boolean;
  @Column()
  swimmingPool: boolean;
  @Column()
  security: boolean;
}
