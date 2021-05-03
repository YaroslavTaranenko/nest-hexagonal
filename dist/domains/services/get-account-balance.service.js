"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountBalanceService = void 0;
class GetAccountBalanceService {
    constructor(_loadAccountPort) {
        this._loadAccountPort = _loadAccountPort;
    }
    async getAccountBalance(accountId) {
        const account = await this._loadAccountPort.loadAccount(accountId);
        return account.calculateBalance();
    }
}
exports.GetAccountBalanceService = GetAccountBalanceService;
//# sourceMappingURL=get-account-balance.service.js.map