import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import User from "../users/entity"
import { ExtendedColumnOptions } from "typeorm-encrypted"

@Entity()
export default class Transaction extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  
  @ManyToOne(_ => User, user => user.transactions, { eager: true })
  @JoinColumn()
  user: User

  @Column(<ExtendedColumnOptions>{
    type: "text",
    nullable: true,
    encrypt: {
      key: "d85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da",
      algorithm: "aes-256-cbc",
      ivLength: 16
    }
  })
  contractName: string

  @Column(<ExtendedColumnOptions>{
    type: "text",
    nullable: true,
    encrypt: {
      key: "d85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da",
      algorithm: "aes-256-cbc",
      ivLength: 16
    },
    default: ""
  })
  IBAN: string

  @Column(<ExtendedColumnOptions>{
    type: "text",
    nullable: true,
    encrypt: {
      key: "d85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da",
      algorithm: "aes-256-cbc",
      ivLength: 16
    }
  })
  date: string

  @Column(<ExtendedColumnOptions>{
    type: "text",
    nullable: true,
    encrypt: {
      key: "d85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da",
      algorithm: "aes-256-cbc",
      ivLength: 16
    }
  })
  value: string

  @Column(<ExtendedColumnOptions>{
    type: "text",
    nullable: true,
    encrypt: {
      key: "d85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da",
      algorithm: "aes-256-cbc",
      ivLength: 16
    }
  })
  remarks: string

  @Column(<ExtendedColumnOptions>{
    type: "text",
    nullable: true,
    encrypt: {
      key: "d85117047fd06d3afa79b6e44ee3a52eb426fc24c3a2e3667732e8da0342b4da",
      algorithm: "aes-256-cbc",
      ivLength: 16
    }
  })
  type: string
}