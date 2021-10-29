import { PropertyRepository } from './property.repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([PropertyRepository])],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
