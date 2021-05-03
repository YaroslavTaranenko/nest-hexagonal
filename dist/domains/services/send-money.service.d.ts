import { LoadAccountPort } from '../ports/out/load-account.port';
import { UpdateAccountStatePort } from '../ports/out/update-account-state.port';
import { SendMoneyUseCase } from '../ports/in/send-money.use-case';
import { SendMoneyCommand } from '../ports/in/send-money.command';
export declare class SendMoneyService implements SendMoneyUseCase {
    private readonly _loadAccountPort;
    private readonly _updateAccountStatePort;
    constructor(_loadAccountPort: LoadAccountPort, _updateAccountStatePort: UpdateAccountStatePort);
    sendMoney(command: SendMoneyCommand): Promise<boolean>;
}
