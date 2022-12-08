import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { System } from "./system.entity";

@Entity()
export class Monit {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => System)
  @JoinColumn()
  system: System;

  @Column()
  nodeType: string;

  @Column()
  region: string;

  @Column()
  nodeId: string;

  @Column()
  nodeName: string;

  @Column()
  privateIp: string;

  @Column()
  privatePort: number;

  @Column()
  action: string;

  @Column()
  status: string;

  @Column()
  message: string;

  @CreateDateColumn()
  registeredAt: Date;
}
