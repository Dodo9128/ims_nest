import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Group } from "./group.entity";

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Group, groupName => groupName.name)
  @JoinColumn({
    name: "groupName",
  })
  groupName: Group[];

  @Column()
  liveIndex: number;

  @Column()
  pdviewMasterIndex: number;

  @Column()
  cameraIp: string;

  @Column()
  serverIp: string;

  @Column()
  serverPort: number;

  @Column()
  status: string;

  @Column()
  mediaType: string;

  @Column()
  gimbalIp: string;

  @Column()
  isGimbalReset: string;
}
