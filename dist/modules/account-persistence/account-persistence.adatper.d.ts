import { LoadAccountPort } from '../../domains/ports/out/load-account.port';
import { UpdateAccountStatePort } from '../../domains/ports/out/update-account-state.port';
import { AccountEntity, AccountId } from '../../domains/entities/account.entity';
import { AccountOrmEntity } from './account.orm-entity';
import { Repository } from 'typeorm';
import { ActivityOrmEntity } from './activity.orm-entity';
export declare class AccountPersistenceAdatper implements LoadAccountPort, UpdateAccountStatePort {
    private readonly accountRepository;
    private readonly activityRepository;
    constructor(accountRepository: Repository<AccountOrmEntity>, activityRepository: Repository<ActivityOrmEntity>);
    loadAccount(accountId: AccountId): Promise<AccountEntity>;
    updateActivities(account: AccountEntity): Promise<void>;
}
