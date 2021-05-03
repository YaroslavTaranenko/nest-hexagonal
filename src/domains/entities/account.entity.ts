import { MoneyEntity } from './money.entity';
import { ActivityWindowEntity } from './activity-window.entity';
import { ActivityEntity } from './activity.entity';

export type AccountId = string;

export class AccountEntity {
  constructor(
    private readonly _id: AccountId,
    private readonly _baselineBalance: MoneyEntity,
    private readonly _activityWindow: ActivityWindowEntity,
  ) {}

  get id(): AccountId {
    return this._id;
  }

  get baselineBalance(): MoneyEntity {
    return this._baselineBalance;
  }

  get activityWindow(): ActivityWindowEntity {
    return this._activityWindow;
  }

  public calculateBalance(): MoneyEntity {
    return MoneyEntity.add(
      this._baselineBalance,
      this._activityWindow.calculateBalance(this.id),
    );
  }

  public withdraw(money: MoneyEntity, targetAccountId: AccountId): boolean {
    if (!this._canWithdraw(money)) {
      return false;
    }

    const withdrawal: ActivityEntity = new ActivityEntity(
      this._id,
      this._id,
      targetAccountId,
      new Date(),
      money,
    );

    this._activityWindow.addActivity(withdrawal);
    return true;
  }
  public deposite(money: MoneyEntity, sourceAccountId: AccountId): boolean{
    const deposite = new ActivityEntity(
      this._id,
      sourceAccountId,
      this._id,
      new Date(),
      money
    );
    this._activityWindow.addActivity(deposite);
    return true;
  }

  private _canWithdraw(money: MoneyEntity) {
    return MoneyEntity.add(
      this.calculateBalance(),
      money.negate(),
    ).isPositiveOrZero();
  }
}
