"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyEntity = void 0;
const bignumber_js_1 = require("bignumber.js");
class MoneyEntity {
    constructor(_amount) {
        this._amount = _amount;
    }
    static ZERO() {
        return new MoneyEntity(new bignumber_js_1.BigNumber(0));
    }
    static of(value) {
        return new MoneyEntity(new bignumber_js_1.BigNumber(value));
    }
    get amount() {
        return this._amount;
    }
    static add(a, b) {
        return new MoneyEntity(a.amount.plus(b.amount));
    }
    negate() {
        return new MoneyEntity(this.amount.negated());
    }
    isPositiveOrZero() {
        return this.amount.comparedTo(0) >= 0;
    }
}
exports.MoneyEntity = MoneyEntity;
//# sourceMappingURL=money.entity.js.map