"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyCommand = void 0;
class SendMoneyCommand {
    constructor(_sourceAccountId, _targetAccountId, _money) {
        this._sourceAccountId = _sourceAccountId;
        this._targetAccountId = _targetAccountId;
        this._money = _money;
    }
    get sourceAccountId() {
        return this._sourceAccountId;
    }
    get targetAccountId() {
        return this._targetAccountId;
    }
    get money() {
        return this._money;
    }
}
exports.SendMoneyCommand = SendMoneyCommand;
//# sourceMappingURL=send-money.command.js.map