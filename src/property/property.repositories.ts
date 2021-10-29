/* eslint-disable prettier/prettier */
import { GetPropertiesFilterDTO } from './dto/get-property-filter.dto';
import { PropertyORM } from './property.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePropertyDTO } from './dto/create-property.dto';

@EntityRepository(PropertyORM)
export class PropertyRepository extends Repository<PropertyORM> {
  async getProperties(
    getPropertiesFilterDTO: GetPropertiesFilterDTO,
  ): Promise<PropertyORM[]> {
    const { search } = getPropertiesFilterDTO;

    const query = this.createQueryBuilder('property');

    if (getPropertiesFilterDTO.availability) {
      const availability =
        getPropertiesFilterDTO.availability === 'true' ? true : false;
      query.andWhere('property.availability = :availability', { availability });
    }

    if (search) {
      query.andWhere(
        'LOWER(property.propertyName) LIKE LOWER(:search) OR LOWER(property.ownerName) LIKE LOWER(:search) OR LOWER(property.location) LIKE LOWER(:search)',
        { search: `%${search}%`},
      );
    }

    const properties = await query.getMany();
    return properties;
  }

  async createProperty(
    createPropertyDTO: CreatePropertyDTO,
  ): Promise<PropertyORM> {
    const {
      ownerName,
      guestLimit,
      propertyName,
      propertyImage,
      location,
      price,
      availability,
      phoneNumber,
      kitchen,
      wifi,
      parkingLot,
      swimmingPool,
      security,
    } = createPropertyDTO;

    const property = this.create({
      ownerName,
      guestLimit,
      propertyName,
      propertyImage,
      location,
      price,
      availability,
      phoneNumber,
      kitchen,
      wifi,
      parkingLot,
      swimmingPool,
      security,
    });

    await this.save(property);
    return property;
  }
}
