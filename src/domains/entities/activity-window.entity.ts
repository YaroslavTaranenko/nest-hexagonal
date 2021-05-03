import { ActivityEntity } from './activity.entity';
import { AccountId } from './account.entity';
import { MoneyEntity } from './money.entity';

export class ActivityWindowEntity {
  constructor(private readonly _activities: ActivityEntity[] = []) {}

  get activities(): ActivityEntity[] {
    return this._activities;
  }
  addActivity(activity: ActivityEntity) {
    this.activities.push(activity);
    return this;
  }

  public calculateBalance(accountId: AccountId): MoneyEntity {
    const depositedBalance = this.activities
      .filter(
        (activity: ActivityEntity) => activity.targetAccountId === accountId,
      )
      .map((activity: ActivityEntity) => activity.money)
      .reduce(MoneyEntity.add, MoneyEntity.ZERO());

    const withdrawnBalance = this.activities
      .filter(
        (activity: ActivityEntity) => activity.sourceAccountId === accountId,
      )
      .map((activity: ActivityEntity) => activity.money)
      .reduce(MoneyEntity.add, MoneyEntity.ZERO());

    return MoneyEntity.add(depositedBalance, withdrawnBalance.negate());
  }
}
