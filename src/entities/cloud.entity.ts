import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Cloud {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  instance: string;

  // @Column("simple-array")
  // storage: string[];
  @Column({ default: "[]" })
  storage: string;

  @ApiProperty({ description: "업데이트 일시" })
  @CreateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: "생성 일시" })
  @CreateDateColumn()
  registeredAt: Date;
}
