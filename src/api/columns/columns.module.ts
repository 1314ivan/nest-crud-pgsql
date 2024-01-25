import { Module } from '@nestjs/common';
import { ColumnsController } from './columns.controller';
import { ColumnsService } from './columns.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Columns } from 'src/db/entities/columns.entity';

@Module({
  controllers: [ColumnsController],
  providers: [ColumnsService],
  imports: [TypeOrmModule.forFeature([Columns])]
})
export class ColumnsModule {}
