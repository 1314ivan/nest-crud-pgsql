import { Controller, Get, Head, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './common/guards/auth.guard';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(JwtAuthGuard )
  @Head('ping')
  ping() {
    return
  }
}
