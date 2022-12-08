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
import { Node } from "./node.entity";

@Entity()
export class NodeCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Node, node => node.nodeType)
  @JoinColumn({
    name: "typeName",
  })
  name: Node;

  @Column()
  type: number;
}
