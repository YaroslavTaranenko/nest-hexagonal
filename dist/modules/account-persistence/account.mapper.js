"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMapper = void 0;
const activity_entity_1 = require("../../domains/entities/activity.entity");
const account_entity_1 = require("../../domains/entities/account.entity");
const activity_orm_entity_1 = require("./activity.orm-entity");
const activity_window_entity_1 = require("../../domains/entities/activity-window.entity");
const money_entity_1 = require("../../domains/entities/money.entity");
class AccountMapper {
    static mapToDomain(account, activities) {
        const activityWindow = this.mapToActivityWindow(activities);
        const balance = activityWindow.calculateBalance(account.userId);
        return new account_entity_1.AccountEntity(account.userId, balance, activityWindow);
    }
    static mapToActivityWindow(activities) {
        const activityWindowEntity = new activity_window_entity_1.ActivityWindowEntity();
        activities.forEach((activity) => {
            const activityEntity = new activity_entity_1.ActivityEntity(activity.ownerAccountId, activity.sourceAccountId, activity.targetAccountId, new Date(activity.timestamp), money_entity_1.MoneyEntity.of(activity.amount), activity.id);
            activityWindowEntity.addActivity(activityEntity);
        });
        return activityWindowEntity;
    }
    static mapToActivityOrmEntity(activity) {
        const activityOrmEntity = new activity_orm_entity_1.ActivityOrmEntity();
        activityOrmEntity.ownerAccountId = activity.ownerAccountId;
        activityOrmEntity.sourceAccountId = activity.sourceAccountId;
        activityOrmEntity.targetAccountId = activity.targetAccountId;
        activityOrmEntity.timestamp = activity.timestamp.getTime();
        activityOrmEntity.amount = activity.money.amount.toNumber();
        if (activity.id !== null) {
            activityOrmEntity.id = activity.id;
        }
        return activityOrmEntity;
    }
}
exports.AccountMapper = AccountMapper;
//# sourceMappingURL=account.mapper.js.map