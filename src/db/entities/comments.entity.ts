import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '../base-entity'
import { ApiProperty } from '@nestjs/swagger'
import { Users } from './users.entity'
import { Cards } from './cards.entity'
import { IsNotEmpty, IsString } from 'class-validator'
import { isNotEmpty, isType } from 'src/common/utils/error-msg'

@Entity('comments')
export class Comments extends BaseEntity {
  @ApiProperty({ example: 'это комментарий', description: 'Текст комментария' })
  @IsNotEmpty({ message: isNotEmpty('Текст') })
  @IsString({ message: isType('Текст', 'строка') })
  @Column({ type: 'varchar', nullable: false })
  text: string

  // @ApiProperty({  description: 'Создатель' })
  @ManyToOne(() => Users, user => user.comments, {
    cascade: true,
    onDelete: 'SET NULL',
    nullable: true
  })
  creator: Users

  @ApiProperty({ example: 12, description: 'ID создателя' })
  @Column({ nullable: true })
  creatorId: number

  // @ApiProperty({  description: 'Карточка' })
  @ManyToOne(() => Cards, card => card.comments, {
    cascade: true,
    onDelete: 'SET NULL',
    nullable: true
  })
  card: Cards

  @ApiProperty({ example: 122, description: 'ID карточки' })
  @Column({ nullable: true })
  cardId: number
}
