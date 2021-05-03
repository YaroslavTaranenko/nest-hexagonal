import { AccountOrmEntity } from './account.orm-entity';
import { ActivityEntity } from '../../domains/entities/activity.entity';
import { AccountEntity } from '../../domains/entities/account.entity';
import { ActivityOrmEntity } from './activity.orm-entity';
import { ActivityWindowEntity } from '../../domains/entities/activity-window.entity';
import { MoneyEntity } from '../../domains/entities/money.entity';

export class AccountMapper {
  static mapToDomain(
    account: AccountOrmEntity,
    activities: ActivityOrmEntity[],
  ) {
    const activityWindow: ActivityWindowEntity = this.mapToActivityWindow(
      activities,
    );
    const balance = activityWindow.calculateBalance(account.userId);
    return new AccountEntity(account.userId, balance, activityWindow);
  }

  static mapToActivityWindow(
    activities: ActivityOrmEntity[],
  ): ActivityWindowEntity {
    const activityWindowEntity: ActivityWindowEntity = new ActivityWindowEntity();
    activities.forEach((activity: ActivityOrmEntity) => {
      const activityEntity: ActivityEntity = new ActivityEntity(
        activity.ownerAccountId,
        activity.sourceAccountId,
        activity.targetAccountId,
        new Date(activity.timestamp),
        MoneyEntity.of(activity.amount),
        activity.id,
      );
      activityWindowEntity.addActivity(activityEntity);
    });
    return activityWindowEntity;
  }

  static mapToActivityOrmEntity(activity: ActivityEntity): ActivityOrmEntity {
    const activityOrmEntity: ActivityOrmEntity = new ActivityOrmEntity();
    activityOrmEntity.ownerAccountId = activity.ownerAccountId;
    activityOrmEntity.sourceAccountId = activity.sourceAccountId;
    activityOrmEntity.targetAccountId = activity.targetAccountId;
    activityOrmEntity.timestamp = activity.timestamp.getTime();
    activityOrmEntity.amount = activity.money.amount.toNumber();
    if(activity.id !== null){
      activityOrmEntity.id = activity.id;
    }
    return activityOrmEntity;
  }
}
