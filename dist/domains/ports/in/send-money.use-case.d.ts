import { SendMoneyCommand } from './send-money.command';
export declare const SendMoneyUseCaseSymbol: unique symbol;
export interface SendMoneyUseCase {
    sendMoney(command: SendMoneyCommand): Promise<boolean>;
}
