import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";
// import { System } from "./system.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

@Entity()
export class Venue {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "베뉴 ID" })
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "베뉴 이름", required: true, example: "TEST_VENUE_1" })
  @Column({ unique: true })
  name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: "베뉴 설명", required: false, default: "", example: "TEST_VENUE_DESCRIPTION" })
  @Column({ default: "" })
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: "클라우드 / 로컬 환경 구분 _ default: false (클라우드 환경 default)",
    default: false,
    required: true,
    example: false,
  })
  @Column({ default: false })
  // @Column({ insert: false })
  isLocal: boolean;

  // @ApiProperty({ description: "업데이트 일시" })
  @CreateDateColumn()
  updatedAt: Date;

  // @ApiProperty({ description: "생성 일시" })
  @CreateDateColumn()
  registeredAt: Date;
  //
  // @ApiProperty({ description: "베뉴가 가지고 있는 시스템 아이디 목록" })
  // @Column({ default: "[]" })
  // systems: string;

  // @OneToMany(type => System, system => system.venue)
  // @JoinColumn()
  // systems: System[];
  // @Column('text', { array: true })
  // systems: string[];

  // @OneToMany(type => System, system => system.venue)
  // @JoinColumn()
  // systems: string;

  // @OneToMany(System: string, system => system.venue)
  // @JoinColumn("simple-array")
  // systems: System[];
}
