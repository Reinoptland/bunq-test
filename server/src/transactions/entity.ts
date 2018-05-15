import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import User from "../users/entity"

@Entity()
export default class Transaction extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  
  @ManyToOne(_ => User, user => user.transactions, { eager: true })
  @JoinColumn()
  user: User

  @Column('text')
  contractName: string

  @Column('text')
  date: string

  @Column('text')
  value: string

  @Column('text')
  type: string
}