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
import { Group } from "./group.entity";

@Entity()
export class Adaptive {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Group)
  @JoinColumn()
  group: Group;

  @Column()
  codec: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  bitrate: number;

  @Column()
  gop: number;

  @Column()
  fps: number;

  @Column()
  isInput: string;
}
