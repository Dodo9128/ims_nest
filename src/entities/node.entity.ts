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
import { NodeCategory } from "./nodeCategory.entity";
import { System } from "./system.entity";
import { Cloud } from "./cloud.entity";

@Entity()
export class Node {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(type => System)
  @JoinColumn()
  system: System;

  @Column()
  nodeType: string;

  @ManyToOne(type => Cloud, cloudType => cloudType.id)
  @JoinColumn({
    name: "cloudType",
  })
  cloudType: Cloud[];

  // @OneToOne(type => NodeCategory)
  // nodeType: NodeCategory;
}
