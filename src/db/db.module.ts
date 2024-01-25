import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { options } from './db.datasource'

@Module({
  imports: [TypeOrmModule.forRoot(options)]
})
export class DBModule {}
