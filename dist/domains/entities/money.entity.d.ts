import { BigNumber } from 'bignumber.js';
export declare class MoneyEntity {
    private readonly _amount;
    constructor(_amount: BigNumber);
    static ZERO(): MoneyEntity;
    static of(value: number): MoneyEntity;
    get amount(): BigNumber;
    static add(a: MoneyEntity, b: MoneyEntity): MoneyEntity;
    negate(): MoneyEntity;
    isPositiveOrZero(): boolean;
}
