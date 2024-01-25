import { Body, Controller, Ip, Post, Req, Res, } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import * as moment from 'moment';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @ApiOperation({ summary: 'Регистрация' })
  @Post('register')
  register(
    @Body() dto: RegisterDto,

  ) {
    return this.authService.register(dto)
  }

  @ApiOperation({ summary: 'Авторизация' })
  @Post('login')
  async login(
    @Res() response: Response,
    @Body() dto: RegisterDto,
  ) {
    const pay = await this.authService.login(dto)
    response.send(pay)
  }


}
