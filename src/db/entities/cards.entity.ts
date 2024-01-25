import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from '../base-entity'
import { ApiProperty } from '@nestjs/swagger'
import { Users } from './users.entity'
import { Columns } from './columns.entity'
import { Comments } from './comments.entity'
import { IsString, IsNotEmpty } from 'class-validator'
import { isNotEmpty, isType } from 'src/common/utils/error-msg'

@Entity('cards')
export class Cards extends BaseEntity {
  @ApiProperty({ example: 'карточка 1', description: 'Название' })
  @IsNotEmpty({ message: isNotEmpty('название') })
  @IsString({ message: isType('название', 'строка') })
  @Column({ type: 'varchar', nullable: false })
  name: string

  // @ApiProperty({ description: 'Создатель' })
  @ManyToOne(() => Users, user => user.cards, {
    cascade: true,
    onDelete: 'SET NULL',
    nullable: true,
    lazy: true
  })
  creator: () => Users

  @ApiProperty({ example: 12, description: 'ID создателя' })
  @Column({ nullable: true })
  creatorId: number

  // @ApiProperty({ description: 'Колонка' })
  @ManyToOne(() => Columns, columns => columns.cards, {
    cascade: true,
    onDelete: 'SET NULL',
    nullable: true,
    lazy: true
  })
  column: () => Columns

  @ApiProperty({ example: 32, description: 'ID колонки' })
  @Column({ nullable: true })
  columnId: number

  // @ApiProperty({ description: 'Комментарии' })
  @OneToMany(() => Comments, comments => comments.card)
  comments: Array<Comments>
}
