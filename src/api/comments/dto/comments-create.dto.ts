import { PickType } from '@nestjs/swagger'
import { Comments } from 'src/db/entities/comments.entity'

export class CommentsCreateDto extends PickType(Comments, ['text']) {}
