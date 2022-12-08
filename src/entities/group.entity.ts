import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { System } from "./system.entity";
import { Channel } from "./channel.entity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => System, system => system.id)
  @JoinColumn()
  system: System;

  @Column()
  channelCount: number;

  @OneToMany(type => Channel, channel => channel.groupName)
  channels: Channel[];
}
