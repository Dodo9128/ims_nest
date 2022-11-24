import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCloudDto {
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: "클라우드 ID", example: 1 })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "클라우드 이름", example: "AWS" })
  name: string;

  @IsString()
  @ApiProperty({ description: "클라우드에서 제공하는 가상 PC 서비스명", example: "EC2" })
  instance: string;

  @IsString()
  @ApiProperty({ description: "클라우드에서 제공하는 데이터 저장소명", example: ["mediastore", "S3"] })
  storage: string;
}
