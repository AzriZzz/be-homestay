import { UpdatePropertyDTO } from './dto/update-property.dto';
import { PropertyRepository } from './property.repositories';
/* eslint-disable prettier/prettier */
import { GetPropertiesFilterDTO } from './dto/get-property-filter.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IProperty } from './property.model';
import { CreatePropertyDTO } from './dto/create-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyORM } from './property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertyRepository)
    private propertyRepository: PropertyRepository,
  ) {}

  getProperties(
    getPropertiesFilterDTO: GetPropertiesFilterDTO,
  ): Promise<PropertyORM[]> {
    return this.propertyRepository.getProperties(getPropertiesFilterDTO);
  }

  async getPropertyById(id: string) {
    const found = await this.propertyRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id} not found"`);
    }

    return found;
  }

  async createProperty(
    createPropertyDTO: CreatePropertyDTO,
  ): Promise<PropertyORM> {
    return this.propertyRepository.createProperty(createPropertyDTO);
  }

  async deleteProperty(id: string): Promise<void> {
    const result = await this.propertyRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID of ${id} not found`);
    }
  }

  // getAllProperty(): IProperty[] {
  //   return this.properties;
  // }

  // getPropertyWithFilter(
  //   getPropertiesFilterDTO: GetPropertiesFilterDTO,
  // ): IProperty[] {
  //   const { availability, search } = getPropertiesFilterDTO;

  //   console.log('typeof availability : ', getPropertiesFilterDTO.availability);
  //   const newVal = availability === 'true' ? true : false;
  //   console.log('typeof search : ', typeof search);

  //   let filterProperty = this.getAllProperty();

  //   filterProperty = filterProperty.filter(
  //     (property) => property.availability === newVal,
  //   );

  //   if (search) {
  //     filterProperty = filterProperty.filter((property) => {
  //       if (
  //         property.propertyName.includes(search) ||
  //         property.location.includes(search) ||
  //         property.ownerName.includes(search) ||
  //         property.phoneNumber.includes(search)
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   console.log(filterProperty);
  //   return filterProperty;
  // }

  // getPropertyById(id: string): IProperty {
  //   const found = this.properties.find((property) => property.id === id);

  //   if (!found) {
  //     throw new NotFoundException(`Property with ID "${id}" not found!`);
  //   }

  //   return found;
  // }

  // createProperty(createPropertyDTO: CreatePropertyDTO): IProperty[] {
  //   const {
  //     ownerName,
  //     guestLimit,
  //     propertyName,
  //     propertyImage,
  //     location,
  //     price,
  //     availability,
  //     phoneNumber,
  //     amneties,
  //   } = createPropertyDTO;

  //   const newProperty: IProperty = {
  //     id: uuid(),
  //     ownerName,
  //     guestLimit,
  //     propertyName,
  //     propertyImage,
  //     location,
  //     price,
  //     availability,
  //     phoneNumber,
  //     amneties,
  //   };

  //   this.properties.push(newProperty);

  //   return this.properties;
  // }

  // deleteProperty(id: string): void {
  //   const found = this.getPropertyById(id);
  //   this.properties = this.properties.filter(
  //     (property) => property.id !== found.id,
  //   );
  // }

  async updateProperty(
    id,
    updatePropertyDTO: UpdatePropertyDTO,
  ): Promise<PropertyORM> {
    const property = await this.getPropertyById(id);
    property.availability = updatePropertyDTO.availability;
    property.guestLimit = updatePropertyDTO.guestLimit;
    property.price = updatePropertyDTO.price;
    property.propertyName = updatePropertyDTO.propertyName;
    property.ownerName = updatePropertyDTO.ownerName;
    property.propertyImage = updatePropertyDTO.propertyImage;
    property.phoneNumber = updatePropertyDTO.phoneNumber;
    property.kitchen = updatePropertyDTO.kitchen;
    property.wifi = updatePropertyDTO.wifi;
    property.parkingLot = updatePropertyDTO.parkingLot;
    property.swimmingPool = updatePropertyDTO.swimmingPool;
    property.security = updatePropertyDTO.security;

    await this.propertyRepository.save(property);
    return property;
  }
}
