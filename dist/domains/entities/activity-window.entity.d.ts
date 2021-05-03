import { ActivityEntity } from './activity.entity';
import { AccountId } from './account.entity';
import { MoneyEntity } from './money.entity';
export declare class ActivityWindowEntity {
    private readonly _activities;
    constructor(_activities?: ActivityEntity[]);
    get activities(): ActivityEntity[];
    addActivity(activity: ActivityEntity): this;
    calculateBalance(accountId: AccountId): MoneyEntity;
}
