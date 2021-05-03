import { Controller, Get, Inject, Query } from '@nestjs/common';
import { SendMoneyUseCase, SendMoneyUseCaseSymbol } from '../../domains/ports/in/send-money.use-case';
import { SendMoneyCommand } from '../../domains/ports/in/send-money.command';
import { MoneyEntity } from '../../domains/entities/money.entity';

@Controller('account/send')
export class SendMoneyController {
  constructor(@Inject(SendMoneyUseCaseSymbol) private readonly _sendMoneyUseCase: SendMoneyUseCase) {}
  @Get('/')
  async sendMoney(
    @Query('sourceAccountId') sourceAccountId: string,
    @Query('targetAccountId') targetAccountId: string,
    @Query('amount') amount: number,
  ) {
    const command: SendMoneyCommand = new SendMoneyCommand(
      sourceAccountId,
      targetAccountId,
      MoneyEntity.of(amount),
    );
    const result = await this._sendMoneyUseCase.sendMoney(command);
    return result;
  }
}
