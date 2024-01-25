import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService, jwtConstants } from './auth.service'
import { UsersModule } from '../users/users.module'
import { JwtStrategy } from './jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ]
})
export class AuthModule {}
