"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPersistenceModule = void 0;
const common_1 = require("@nestjs/common");
const account_persistence_adatper_1 = require("./account-persistence.adatper");
const typeorm_1 = require("@nestjs/typeorm");
const account_orm_entity_1 = require("./account.orm-entity");
const activity_orm_entity_1 = require("./activity.orm-entity");
const send_money_use_case_1 = require("../../domains/ports/in/send-money.use-case");
const send_money_service_1 = require("../../domains/services/send-money.service");
let AccountPersistenceModule = class AccountPersistenceModule {
};
AccountPersistenceModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([account_orm_entity_1.AccountOrmEntity, activity_orm_entity_1.ActivityOrmEntity])],
        providers: [
            account_persistence_adatper_1.AccountPersistenceAdatper,
            {
                provide: send_money_use_case_1.SendMoneyUseCaseSymbol,
                useFactory: (accountPersistenceAdatper) => {
                    return new send_money_service_1.SendMoneyService(accountPersistenceAdatper, accountPersistenceAdatper);
                },
                inject: [account_persistence_adatper_1.AccountPersistenceAdatper],
            },
        ],
        exports: [send_money_use_case_1.SendMoneyUseCaseSymbol],
    })
], AccountPersistenceModule);
exports.AccountPersistenceModule = AccountPersistenceModule;
//# sourceMappingURL=account-persistence.module.js.map