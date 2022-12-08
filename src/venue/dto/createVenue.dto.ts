import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateVenueDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: "베뉴 ID", example: 1 })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "베뉴 이름", example: "TEST_VENUE_1" })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "베뉴 설명", example: "TEST_VENUE_DESCRIPTION" })
  readonly description: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: "베뉴가 가지고 있는 시스템 아이디 목록", example: "[1, 2]", default: "[]" })
  systems: string;
}
