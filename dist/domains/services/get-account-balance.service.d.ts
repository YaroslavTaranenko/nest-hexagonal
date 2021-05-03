import { GetAccountBalanceQuery } from '../ports/in/get-account-balance.query';
import { AccountId } from '../entities/account.entity';
import { LoadAccountPort } from '../ports/out/load-account.port';
export declare class GetAccountBalanceService implements GetAccountBalanceQuery {
    private readonly _loadAccountPort;
    constructor(_loadAccountPort: LoadAccountPort);
    getAccountBalance(accountId: AccountId): Promise<import("../entities/money.entity").MoneyEntity>;
}
