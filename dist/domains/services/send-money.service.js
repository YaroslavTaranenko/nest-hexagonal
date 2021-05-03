"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyService = void 0;
class SendMoneyService {
    constructor(_loadAccountPort, _updateAccountStatePort) {
        this._loadAccountPort = _loadAccountPort;
        this._updateAccountStatePort = _updateAccountStatePort;
    }
    async sendMoney(command) {
        const sourceAccount = await this._loadAccountPort.loadAccount(command.sourceAccountId);
        const targetAccount = await this._loadAccountPort.loadAccount(command.targetAccountId);
        if (!sourceAccount.withdraw(command.money, targetAccount.id)) {
            return false;
        }
        if (!targetAccount.deposite(command.money, sourceAccount.id)) {
            return false;
        }
        this._updateAccountStatePort.updateActivities(sourceAccount);
        this._updateAccountStatePort.updateActivities(targetAccount);
        return true;
    }
}
exports.SendMoneyService = SendMoneyService;
//# sourceMappingURL=send-money.service.js.map