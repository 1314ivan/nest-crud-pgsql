import { Controller, Head } from '@nestjs/common'

import { ApiTags } from '@nestjs/swagger'

@ApiTags('app')
@Controller()
export class AppController {
  constructor() {}

  @Head('ping')
  ping() {
    return
  }
}
 