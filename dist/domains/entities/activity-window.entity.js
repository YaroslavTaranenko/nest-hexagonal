"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWindowEntity = void 0;
const money_entity_1 = require("./money.entity");
class ActivityWindowEntity {
    constructor(_activities = []) {
        this._activities = _activities;
    }
    get activities() {
        return this._activities;
    }
    addActivity(activity) {
        this.activities.push(activity);
        return this;
    }
    calculateBalance(accountId) {
        const depositedBalance = this.activities
            .filter((activity) => activity.targetAccountId === accountId)
            .map((activity) => activity.money)
            .reduce(money_entity_1.MoneyEntity.add, money_entity_1.MoneyEntity.ZERO());
        const withdrawnBalance = this.activities
            .filter((activity) => activity.sourceAccountId === accountId)
            .map((activity) => activity.money)
            .reduce(money_entity_1.MoneyEntity.add, money_entity_1.MoneyEntity.ZERO());
        return money_entity_1.MoneyEntity.add(depositedBalance, withdrawnBalance.negate());
    }
}
exports.ActivityWindowEntity = ActivityWindowEntity;
//# sourceMappingURL=activity-window.entity.js.map