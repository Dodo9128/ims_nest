import { PartialType } from "@nestjs/mapped-types";
import { CreateVenueDto } from "./createVenue.dto";
import { IsBoolean, IsOptional, IsString } from "class-validator";
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
  @IsBoolean()
  @ApiPropertyOptional({ description: "클라우드 / 로컬 환경 구분", example: true })
  readonly isLocal: boolean;
}
