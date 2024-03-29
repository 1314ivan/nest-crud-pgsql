import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { Users } from 'src/db/entities/users.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [UsersService]
})
export class UsersModule {}
