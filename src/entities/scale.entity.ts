import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { System } from "./system.entity";

@Entity()
export class Scale {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => System)
  @JoinColumn()
  system: System;

  @Column()
  scaleGroupCount: number;

  @Column()
  scaleImageId: string;

  @Column()
  scaleInstanceType: string;

  @Column()
  scaleInstanceType2: string;

  @Column()
  scaleSecurityGroupIds: string;

  @Column()
  scaleSubnetIds: string;

  @Column()
  scaleMonitoringTagName: string;

  @Column()
  scaleMonitoringTagValue: string;

  @Column()
  scaleOn: string;

  @Column()
  scaleOutResource: number;

  @Column()
  scaleInResource: number;

  @Column()
  scaleOutLimitTime: number;

  @Column()
  scaleSsName: string;

  @Column()
  scaleKeyName: string;

  @Column()
  region: string;

  @CreateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  registeredAt: Date;
}
