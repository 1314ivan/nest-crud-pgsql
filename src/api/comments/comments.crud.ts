import { Comments } from 'src/db/entities/comments.entity'
import { CommentsCreateDto } from './dto/comments-create.dto'
import { CommentsUpdateDto } from './dto/comments-update.dto'
import { CrudOptions } from '@dataui/crud'

const commentsCrud: CrudOptions = {
  model: {
    type: Comments
  },
  params: {
    cardsId: {
      field: 'cardId',
      type: 'number'
    }
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
    update: CommentsUpdateDto,
    create: CommentsCreateDto
  }
}
export { commentsCrud }
