"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEntity = void 0;
const money_entity_1 = require("./money.entity");
const activity_entity_1 = require("./activity.entity");
class AccountEntity {
    constructor(_id, _baselineBalance, _activityWindow) {
        this._id = _id;
        this._baselineBalance = _baselineBalance;
        this._activityWindow = _activityWindow;
    }
    get id() {
        return this._id;
    }
    get baselineBalance() {
        return this._baselineBalance;
    }
    get activityWindow() {
        return this._activityWindow;
    }
    calculateBalance() {
        return money_entity_1.MoneyEntity.add(this._baselineBalance, this._activityWindow.calculateBalance(this.id));
    }
    withdraw(money, targetAccountId) {
        if (!this._canWithdraw(money)) {
            return false;
        }
        const withdrawal = new activity_entity_1.ActivityEntity(this._id, this._id, targetAccountId, new Date(), money);
        this._activityWindow.addActivity(withdrawal);
        return true;
    }
    deposite(money, sourceAccountId) {
        const deposite = new activity_entity_1.ActivityEntity(this._id, sourceAccountId, this._id, new Date(), money);
        this._activityWindow.addActivity(deposite);
        return true;
    }
    _canWithdraw(money) {
        return money_entity_1.MoneyEntity.add(this.calculateBalance(), money.negate()).isPositiveOrZero();
    }
}
exports.AccountEntity = AccountEntity;
//# sourceMappingURL=account.entity.js.map