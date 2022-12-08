import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { System } from "./system.entity";
import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

@Entity()
export class Venue {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "베뉴 ID" })
  id: string;

  @ApiProperty({ description: "베뉴 이름" })
  @Column({ unique: true })
  name: string;

  @ApiPropertyOptional({ description: "베뉴 설명" })
  @Column()
  description: string;

  @ApiProperty({ description: "업데이트 일시" })
  @CreateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: "생성 일시" })
  @CreateDateColumn()
  registeredAt: Date;

  @ApiProperty({ description: "베뉴가 가지고 있는 시스템 아이디 목록" })
  @Column({ default: "[]" })
  systems: string;

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
