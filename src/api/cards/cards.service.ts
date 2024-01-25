import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cards } from 'src/db/entities/cards.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService extends TypeOrmCrudService<Cards> {
  constructor(
    @InjectRepository(Cards)
    protected  repo: Repository<Cards>
  ) {
    super(repo)
  }
} {}
