import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Cloud } from "./cloud.entity";
import { Event } from "./event.entity";
import { Venue } from "./venue.entity";

@Entity()
export class System {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(type => Venue, venue => venue.id)
  @JoinColumn()
  venue: Venue[];

  @OneToOne(type => Cloud)
  @JoinColumn()
  cloud: Cloud;

  @Column()
  videoSavePoint: string;

  @Column()
  vodDeployPoint: string;

  @OneToMany(type => Event, event => event.system)
  events: Event[];
}
