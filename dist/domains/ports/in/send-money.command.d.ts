import { AccountId } from '../../entities/account.entity';
import { MoneyEntity } from '../../entities/money.entity';
export declare class SendMoneyCommand {
    private readonly _sourceAccountId;
    private readonly _targetAccountId;
    private readonly _money;
    constructor(_sourceAccountId: AccountId, _targetAccountId: AccountId, _money: MoneyEntity);
    get sourceAccountId(): AccountId;
    get targetAccountId(): AccountId;
    get money(): MoneyEntity;
}
