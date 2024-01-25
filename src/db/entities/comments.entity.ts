import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from './base-entity'
import { ApiProperty } from '@nestjs/swagger'
import { Users } from './users.entity'
import { Cards } from './cards.entity'


@Entity('comments')
export class Comments extends BaseEntity {

  @ApiProperty({ example: 'это комментарий', description: 'Текст комментария' })
  @Column({ type: 'varchar', nullable: false })
  text: string

  // @ApiProperty({  description: 'Создатель' })
  @ManyToOne(() => Users, user => user.comments, {
    cascade: true,
    onDelete: 'SET NULL',
    
  })
  creator: Users

  // @ApiProperty({  description: 'Карточка' })
  @ManyToOne(() => Cards, card => card.comments, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  card: Cards
}