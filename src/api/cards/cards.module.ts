import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Cards } from 'src/db/entities/cards.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [TypeOrmModule.forFeature([Cards])]
})
export class CardsModule {}
