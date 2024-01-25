import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DBModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/users/users.module';
import { ColumnsModule } from './api/columns/columns.module';
import { CardsModule } from './api/cards/cards.module';
import { CommentsModule } from './api/comments/comments.module';

@Module({
  imports: [ConfigModule, DBModule, AuthModule, UsersModule, ColumnsModule, CardsModule, CommentsModule],
  controllers: [AppController]
})
export class AppModule {}
