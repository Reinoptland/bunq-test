import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import User from "../users/entity"

@Entity()
export default class Feedback extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  
  @ManyToOne(_ => User, user => user.feedbacks, { eager: true })
  @JoinColumn()
  user: User

  @Column('text', {nullable: false})
  choice: string

  @Column('text', {nullable: true})
  remarks: string
}