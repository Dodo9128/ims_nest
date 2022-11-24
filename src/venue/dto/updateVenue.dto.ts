import { PartialType } from "@nestjs/mapped-types";
import { CreateVenueDto } from "./createVenue.dto";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateVenueDto extends PartialType(CreateVenueDto) {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: "베뉴 이름", example: "UPDATE_VENUE_NAME_FOR_TEST" })
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: "베뉴 설명", example: "UPDATE_VENUE_DESCRIPTION_FOR_TEST" })
  readonly description: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: "베뉴에 포함될 시스템 ID", example: "1" })
  readonly systemId: number;
}
