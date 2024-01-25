import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from '../base-entity'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { isNotEmpty, isType } from 'src/common/utils/error-msg'
import * as bcrypt from 'bcrypt';
import { Columns } from './columns.entity'
import { Cards } from './cards.entity'
import { Comments } from './comments.entity'
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

@Entity('users')
export class Users extends BaseEntity {
  @IsNotEmpty({ message: isNotEmpty('почта') })
  @IsEmail({}, { message: isType('почта', 'emai@ru.com') })
  @IsString({ message: isType('почта', 'строкой') })
  @ApiProperty({ example: 'ivan@maill.com', description: 'Почта' })
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string

  @ApiProperty({ example: 'dsujkhfiuds21KIdsd', description: 'Пароль' })
  @Column({ type: 'varchar', nullable: false, select: false })
  password: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashPassword(this.password)
  }

  async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }

  @ApiProperty({ description: 'Колонки' })
  @OneToMany(() => Columns, col => col.creator, { lazy: true })
  columns: Array<Columns>

  @ApiProperty({ description: 'Карточки' })
  @OneToMany(() => Cards, card => card.creator, { lazy: true })
  cards: Array<Cards>

  @ApiProperty({ description: 'Комментарий' })
  @OneToMany(() => Comments, comment => comment.creator, { lazy: true })
  comments: Array<Comments>
}
