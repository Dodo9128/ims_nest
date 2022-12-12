import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateVenueDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "베뉴 이름", required: true, example: "TEST_VENUE_1" })
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: "베뉴 설명", required: false, default: "", example: "TEST_VENUE_DESCRIPTION" })
  readonly description: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: "클라우드 / 로컬 환경 구분 _ default: false (클라우드 환경 default)",
    default: false,
    required: true,
    example: false,
  })
  readonly isLocal: boolean;
}
