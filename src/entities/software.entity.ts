import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { System } from "./system.entity";
// import { NodeCategory } from "./nodeCategory.entity";

@Entity()
export class Software {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToOne(type => NodeCategory, nodeCategory => nodeCategory.type)
  // @JoinColumn()
  // type: NodeCategory;

  @ManyToOne(type => System, system => system.id)
  @JoinColumn()
  system: System;

  @Column()
  region: string;

  @Column()
  name: string;

  @Column()
  publicIp: string;

  @Column()
  publicPort: number;

  @Column()
  privateIp: string;

  @Column()
  privatePort: number;

  @Column()
  status: string;
}
