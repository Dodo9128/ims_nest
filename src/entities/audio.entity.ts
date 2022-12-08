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
export class Audio {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Group)
  @JoinColumn()
  group: Group;

  @Column()
  codec: string;

  @Column()
  channelType: string;

  @Column()
  sampleRate: string;

  @Column()
  sampleBit: string;

  @Column()
  isInput: string;
}
