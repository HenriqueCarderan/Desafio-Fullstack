import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity()
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ nullable: true })
  telephone: number;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ default: true, nullable: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  @JoinColumn()
  contacts: Contact[];

  @BeforeUpdate()
  @BeforeInsert()
  hashpassword() {
    this.password = hashSync(this.password, 10);
  }
}

export { User };
