import { AccountOrmEntity } from './account.orm-entity';
import { ActivityEntity } from '../../domains/entities/activity.entity';
import { AccountEntity } from '../../domains/entities/account.entity';
import { ActivityOrmEntity } from './activity.orm-entity';
import { ActivityWindowEntity } from '../../domains/entities/activity-window.entity';
export declare class AccountMapper {
    static mapToDomain(account: AccountOrmEntity, activities: ActivityOrmEntity[]): AccountEntity;
    static mapToActivityWindow(activities: ActivityOrmEntity[]): ActivityWindowEntity;
    static mapToActivityOrmEntity(activity: ActivityEntity): ActivityOrmEntity;
}
