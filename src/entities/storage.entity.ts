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

@Entity()
export class Storage {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => NodeCategory, nodeCategory => nodeCategory.type)
  @JoinColumn()
  type: NodeCategory;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  domain: string;

  @Column()
  storageRole: string;
}
