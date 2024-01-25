
import { ApiProperty, PickType } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { isNotEmpty, isType, minLength, maxLength } from 'src/common/utils/error-msg';
import { Users } from 'src/db/entities/users.entity';


export class RegisterDto extends PickType(Users, ['email']) {

  @IsString({ message: isType("почта", "строкой") })
  @ApiProperty({ example: "LOgoD12J", description: 'пароль' })
  @IsNotEmpty({ message: isNotEmpty('пароль') })
  @MinLength(8, { message: minLength("пароль", 8) })
  @MaxLength(30, { message: maxLength("пароль", 30) })
  password: string
}