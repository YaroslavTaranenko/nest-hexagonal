import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AccountPersistenceModule } from './modules/account-persistence/account-persistence.module';
import { AccountWebModule } from './modules/account-web/account-web.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.join(__dirname, '..', 'data', 'data.sqlite'),
      logging: true,
      autoLoadEntities: true,
    }),
    AccountPersistenceModule,
    AccountWebModule,
  ],
})
export class AppModule {}
