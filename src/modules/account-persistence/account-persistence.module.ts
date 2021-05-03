import { Global, Module } from '@nestjs/common';
import { AccountPersistenceAdatper } from './account-persistence.adatper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountOrmEntity } from './account.orm-entity';
import { ActivityOrmEntity } from './activity.orm-entity';
import { SendMoneyUseCaseSymbol } from '../../domains/ports/in/send-money.use-case';
import { SendMoneyService } from '../../domains/services/send-money.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])],
  providers: [
    AccountPersistenceAdatper,
    {
      provide: SendMoneyUseCaseSymbol,
      useFactory: (accountPersistenceAdatper) => {
        return new SendMoneyService(
          accountPersistenceAdatper,
          accountPersistenceAdatper,
        );
      },
      inject: [AccountPersistenceAdatper],
    },
  ],
  exports: [SendMoneyUseCaseSymbol],
})
export class AccountPersistenceModule {}
