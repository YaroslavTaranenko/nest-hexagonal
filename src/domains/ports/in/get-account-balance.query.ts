import { AccountId } from '../../entities/account.entity';

export interface GetAccountBalanceQuery {
  getAccountBalance(accountId: AccountId);
}
