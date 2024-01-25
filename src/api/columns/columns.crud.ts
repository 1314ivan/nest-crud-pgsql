import { Columns } from 'src/db/entities/columns.entity'
import { ColumnsCreateDto } from './dto/columns-create.dto'
import { ColumnsUpdateDto } from './dto/columns-update.dto'
import { CrudOptions } from '@dataui/crud'

const columnsCrud: CrudOptions = {
  model: {
    type: Columns
  },
  query: {
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
}

export { columnsCrud }
