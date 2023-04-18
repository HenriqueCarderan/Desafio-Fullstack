import {
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ nullable: true })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: true, nullable: true })
  isActive: boolean;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
