import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from '../base-entity'
import { ApiProperty } from '@nestjs/swagger'
import { Users } from './users.entity'
import { Cards } from './cards.entity'
import { isNotEmpty, isType } from 'src/common/utils/error-msg'
import { IsNotEmpty, IsString } from 'class-validator'

@Entity('columns')
export class Columns extends BaseEntity {
  @ApiProperty({ example: 'колонка 1', description: 'Название' })
  @IsNotEmpty({ message: isNotEmpty('название') })
  @IsString({ message: isType('название', 'строка') })
  @Column({ type: 'varchar', nullable: false })
  name: string

  // @ApiProperty({ description: 'Создатель' })
  @ManyToOne(() => Users, user => user.columns, {
    cascade: true,
    onDelete: 'SET NULL',
    nullable: true,
    lazy: true
  })
  creator: () => Users

  @ApiProperty({ example: 12, description: 'ID создателя' })
  @Column({nullable:true})
  creatorId: number

  // @ApiProperty({ description: 'Карточки' })
  @OneToMany(() => Cards, cards => cards.column)
  cards: Array<Cards>
}
