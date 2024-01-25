import { Controller, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@dataui/crud'
import { JwtAuthGuard } from 'src/common/guards/auth.guard'
import { ABACValidator } from 'src/common/interceptors/abac.interceptor'
import { Cards } from 'src/db/entities/cards.entity'
import { CardsService } from './cards.service'
import { cardsCrud } from './cards.crud'


@Controller('columns/:columnsId/cards')
@ApiTags('cards')
@Crud(cardsCrud)
@UseGuards(JwtAuthGuard)
@UseInterceptors(ABACValidator(Cards))
export class CardsController implements CrudController<Cards> {
  constructor(public service: CardsService) {}
  get base(): CrudController<Cards> {
    return this
  }
}
