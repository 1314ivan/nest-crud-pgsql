import { Controller, Get, Head, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Head('ping')
  ping() {
    return
  }
}
