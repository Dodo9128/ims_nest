import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { System } from "./system.entity";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => System, system => system.id)
  @JoinColumn()
  system: System;

  @Column()
  name: string;

  @Column()
  cmsContentId: number;

  @Column()
  liveStatus: string;

  @CreateDateColumn()
  scheduledAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  registeredAt: Date;
}
