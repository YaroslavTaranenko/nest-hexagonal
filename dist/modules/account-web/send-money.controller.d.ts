import { SendMoneyUseCase } from '../../domains/ports/in/send-money.use-case';
export declare class SendMoneyController {
    private readonly _sendMoneyUseCase;
    constructor(_sendMoneyUseCase: SendMoneyUseCase);
    sendMoney(sourceAccountId: string, targetAccountId: string, amount: number): Promise<boolean>;
}
