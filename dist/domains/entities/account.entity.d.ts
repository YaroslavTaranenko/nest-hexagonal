import { MoneyEntity } from './money.entity';
import { ActivityWindowEntity } from './activity-window.entity';
export declare type AccountId = string;
export declare class AccountEntity {
    private readonly _id;
    private readonly _baselineBalance;
    private readonly _activityWindow;
    constructor(_id: AccountId, _baselineBalance: MoneyEntity, _activityWindow: ActivityWindowEntity);
    get id(): AccountId;
    get baselineBalance(): MoneyEntity;
    get activityWindow(): ActivityWindowEntity;
    calculateBalance(): MoneyEntity;
    withdraw(money: MoneyEntity, targetAccountId: AccountId): boolean;
    deposite(money: MoneyEntity, sourceAccountId: AccountId): boolean;
    private _canWithdraw;
}
