/* eslint-disable prettier/prettier */
import { CreatePropertyDTO } from './dto/create-property.dto';
import { PropertyService } from './property.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IProperty } from './property.model';
import { GetPropertiesFilterDTO } from './dto/get-property-filter.dto';
import { UpdatePropertyDTO } from './dto/update-property.dto';
import { PropertyORM } from './property.entity';

@Controller('properties')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  getProperties(
    @Query() getPropertiesFilterDTO: GetPropertiesFilterDTO,
  ): Promise<PropertyORM[]> {
    return this.propertyService.getProperties(getPropertiesFilterDTO);
  }

  @Get('/:id')
  getPropertyById(@Param('id') id: string): Promise<PropertyORM> {
    return this.propertyService.getPropertyById(id);
  }

  // @Get('/:id')
  // getPropertyById(@Param('id') id: string): IProperty {
  //   return this.propertyService.getPropertyById(id);
  // }

  @Post()
  createProperty(@Body() createPropertyDTO: CreatePropertyDTO) {
    return this.propertyService.createProperty(createPropertyDTO);
  }

  @Delete('/:id')
  deleteProperty(@Param('id') id: string): Promise<void> {
    return this.propertyService.deleteProperty(id);
  }

  @Patch('/:id/update')
  updateProperty(
    @Param('id') id: string,
    @Body() updatePropertyDTO: UpdatePropertyDTO,
  ): Promise<PropertyORM> {
    return this.propertyService.updateProperty(id, updatePropertyDTO);
  }
}
