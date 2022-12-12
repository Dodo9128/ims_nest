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
// import { NodeCategory } from "./nodeCategory.entity";
import { Cloud } from "./cloud.entity";
import { System } from "./system.entity";

@Entity()
export class Instance {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToOne(type => NodeCategory, nodeCategory => nodeCategory.type)
  // @JoinColumn()
  // type: NodeCategory;

  // @ManyToOne(type => Cloud, cloud => cloud.id)
  // @JoinColumn()
  // cloud: Cloud;

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

  @Column()
  domain: string;
}
