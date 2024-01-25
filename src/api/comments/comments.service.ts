import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Comments } from 'src/db/entities/comments.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CommentsService extends TypeOrmCrudService<Comments> {
  constructor(
    @InjectRepository(Comments)
    protected repo: Repository<Comments>
  ) {
    super(repo)
  }
}
{
}
