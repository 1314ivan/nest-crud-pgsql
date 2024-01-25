import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Columns } from 'src/db/entities/columns.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ColumnsService extends TypeOrmCrudService<Columns> {
  constructor(
    @InjectRepository(Columns)
    protected  repo: Repository<Columns>
  ) {
    super(repo)
  }
}
