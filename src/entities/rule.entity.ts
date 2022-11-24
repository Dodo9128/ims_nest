import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { System } from "./system.entity";

@Entity()
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => System)
  @JoinColumn()
  system: System;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  nodeType: string;

  @Column()
  session: number;

  @Column()
  maxInstances: number;

  @Column()
  region: string;
}
