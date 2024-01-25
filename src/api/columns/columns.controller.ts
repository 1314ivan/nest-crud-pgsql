import { Controller, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@dataui/crud'
import { JwtAuthGuard } from 'src/common/guards/auth.guard'
import { Columns } from 'src/db/entities/columns.entity'
import { ColumnsService } from './columns.service'
import { ABACValidator } from 'src/common/interceptors/abac.interceptor'
import { columnsCrud } from './columns.crud'

@Controller('columns')
@ApiTags('columns')
@Crud(columnsCrud)
@UseGuards(JwtAuthGuard)
@UseInterceptors(ABACValidator(Columns))
export class ColumnsController implements CrudController<Columns> {
  constructor(public service: ColumnsService) {}
  get base(): CrudController<Columns> {
    return this
  }
}
