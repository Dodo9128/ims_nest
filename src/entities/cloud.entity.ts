import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Cloud {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  // instance, storage 정보(name) 은 굳이 여기서 기억 안 해도 될듯
  // 그 대신 클라우드별 cli 사용할 수 있는 계정 정보가 들어 있는 게 더 나을 것 같은데
  // 계정 정보를 가지고 있으려면
  // 암호화 해야 함

  // @Column()
  // instance: string;
  //
  // // @Column("simple-array")
  // // storage: string[];
  // @Column({ default: "[]" })
  // storage: string;

  @Column()
  cliId: string;

  @Column()
  cliPw: string;

  @ApiProperty({ description: "업데이트 일시" })
  @CreateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: "생성 일시" })
  @CreateDateColumn()
  registeredAt: Date;
}
