import { PartialType} from '@nestjs/swagger'
import { CommentsCreateDto } from './comments-create.dto'

export class CommentsUpdateDto extends PartialType(CommentsCreateDto) {}