import { BeforeInsert, Column, Entity } from "typeorm";
import { BaseEntity } from "./base-entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { isNotEmpty, isType } from "src/common/utils/error-msg";
import { compare, genSalt, hash } from 'bcrypt'
async function hashPassword(password: string): Promise<string> {
  const salt = await genSalt(10)
  return hash(password, salt)
}


@Entity('users')
export class Users extends BaseEntity {

  @IsNotEmpty({ message: isNotEmpty('почта') })
  @IsEmail({}, { message: isType("почта", "emai@ru.com") })
  @IsString({ message: isType("почта", "строкой") })
  @ApiProperty({ example: "ivan@maill.com", description: 'Почта' })
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string

  @ApiProperty({ example: "dsujkhfiuds21KIdsd", description: 'Пароль' })
  @Column({ type: 'varchar', nullable: false, select: false })
  password: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashPassword(this.password)
  }

  async checkPassword(password: string): Promise<boolean> {
    return compare(password, this.password)


  }



}