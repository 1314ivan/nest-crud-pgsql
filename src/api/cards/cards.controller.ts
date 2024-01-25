

import { Controller, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@dataui/crud'
import { JwtAuthGuard } from 'src/common/guards/auth.guard'
import { Columns } from 'src/db/entities/columns.entity'

import { ABACValidator } from 'src/common/interceptors/abac.interceptor'
import { Cards } from 'src/db/entities/cards.entity'
import { CardsService } from './cards.service'
import { CardsCreateDto } from './dto/cards-create.dto'
import { CardsUpdateDto } from './dto/cards-update.dto'

@ApiBearerAuth()
@Controller('columns/:columnsId/cards')
@ApiTags('cards')
@Crud({
  model: {
    type: Cards
  },
  params: {
    columnsId: {
      field: 'columnId', // Adjust this to match the actual parameter name
      type: 'number',
    },
    },
  query: {
    sort: [
      {
        field: 'createdAt',
        order: 'DESC'
      }
    ]
  },
  dto:{
    create: CardsCreateDto,
    update: CardsUpdateDto
  }
})
@UseGuards(JwtAuthGuard)
@UseInterceptors(ABACValidator(Cards))
export class CardsController implements CrudController<Cards> {
  constructor(public service: CardsService) {}
  get base(): CrudController<Cards> {
    return this
  }
}



