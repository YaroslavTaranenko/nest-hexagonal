"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyController = void 0;
const common_1 = require("@nestjs/common");
const send_money_use_case_1 = require("../../domains/ports/in/send-money.use-case");
const send_money_command_1 = require("../../domains/ports/in/send-money.command");
const money_entity_1 = require("../../domains/entities/money.entity");
let SendMoneyController = class SendMoneyController {
    constructor(_sendMoneyUseCase) {
        this._sendMoneyUseCase = _sendMoneyUseCase;
    }
    async sendMoney(sourceAccountId, targetAccountId, amount) {
        const command = new send_money_command_1.SendMoneyCommand(sourceAccountId, targetAccountId, money_entity_1.MoneyEntity.of(amount));
        const result = await this._sendMoneyUseCase.sendMoney(command);
        return result;
    }
};
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Query('sourceAccountId')),
    __param(1, common_1.Query('targetAccountId')),
    __param(2, common_1.Query('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], SendMoneyController.prototype, "sendMoney", null);
SendMoneyController = __decorate([
    common_1.Controller('account/send'),
    __param(0, common_1.Inject(send_money_use_case_1.SendMoneyUseCaseSymbol)),
    __metadata("design:paramtypes", [Object])
], SendMoneyController);
exports.SendMoneyController = SendMoneyController;
//# sourceMappingURL=send-money.controller.js.map