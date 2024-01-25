import { Controller, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@dataui/crud'
import { JwtAuthGuard } from 'src/common/guards/auth.guard'
import { Columns } from 'src/db/entities/columns.entity'
import { ColumnsService } from './columns.service'
import { ABACValidator } from 'src/common/interceptors/abac.interceptor'
import { ColumnsCreateDto } from './dto/columns-create.dto'
import { ColumnsUpdateDto } from './dto/columns-update.dto'

@Controller('columns')
@ApiTags('columns')
@Crud({
  model: {
    type: Columns
  },
  query: {
    join: {},
    sort: [
      {
        field: 'createdAt',
        order: 'DESC'
      }
    ]
  },
  dto: {
    create: ColumnsCreateDto,
    update: ColumnsUpdateDto
  }
})
@UseGuards(JwtAuthGuard)
@UseInterceptors(ABACValidator(Columns))
export class ColumnsController implements CrudController<Columns> {
  constructor(public service: ColumnsService) {}
  get base(): CrudController<Columns> {
    return this
  }
}
