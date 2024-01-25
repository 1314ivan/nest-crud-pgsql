import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { RegisterDto } from './dto/register.dto'
import { JwtService } from '@nestjs/jwt'
import { Users } from 'src/db/entities/users.entity'
export const jwtConstants = {
  secret: 'secretKey'
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtTokenService: JwtService
  ) {}
  public async register(dto: RegisterDto): Promise<Users> {
    const existingUserEmail = await this.usersService.getOneBy('email', dto.email, ['email'])
    if (existingUserEmail) {
      throw new ConflictException('Данная почта уже занята')
    }
    const user = await this.usersService.createOne(dto)
    return user
  }

  public async login(dto: RegisterDto) {
    const user = await this.usersService.getOneBy('email', dto.email, ['email', 'id', 'password'])
    if (!user) {
      throw new NotFoundException('Данный пользователь не найден')
    }

    const passwordIsOk = await user.checkPassword(dto.password)
    if (!passwordIsOk) {
      throw new UnauthorizedException('Неверный пароль')
    }
    return this.loginWithCredentials(user)
  }
  async loginWithCredentials(user) {
    const payload = { email: user.email, sub: user.id }

    return {
      Authorization: this.jwtTokenService.sign(payload)
    }
  }
}
