import { AccountId } from './account.entity';
import { MoneyEntity } from './money.entity';
export declare type ActivityId = number | null;
export declare class ActivityEntity {
    private readonly _ownerAccountId;
    private readonly _sourceAccountId;
    private readonly _targetAccountId;
    private readonly _timestamp;
    private readonly _money;
    private readonly _id?;
    constructor(_ownerAccountId: AccountId, _sourceAccountId: AccountId, _targetAccountId: AccountId, _timestamp: Date, _money: MoneyEntity, _id?: ActivityId);
    get ownerAccountId(): AccountId;
    get id(): ActivityId;
    get sourceAccountId(): AccountId;
    get targetAccountId(): AccountId;
    get timestamp(): Date;
    get money(): MoneyEntity;
}
