/* eslint-disable prettier/prettier */
import { IsOptional } from "class-validator";

export class GetPropertiesFilterDTO {
  @IsOptional()
  availability?: string;
  @IsOptional()
  search?: string;
}
