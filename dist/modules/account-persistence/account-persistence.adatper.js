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
exports.AccountPersistenceAdatper = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_orm_entity_1 = require("./account.orm-entity");
const typeorm_2 = require("typeorm");
const activity_orm_entity_1 = require("./activity.orm-entity");
const account_mapper_1 = require("./account.mapper");
let AccountPersistenceAdatper = class AccountPersistenceAdatper {
    constructor(accountRepository, activityRepository) {
        this.accountRepository = accountRepository;
        this.activityRepository = activityRepository;
    }
    async loadAccount(accountId) {
        const account = await this.accountRepository.findOne({
            userId: accountId,
        });
        if ( account === undefined ) {
            throw new Error('Account not found');
        }
        const activities = await this.activityRepository.find({
            ownerAccountId: accountId,
        });
        return account_mapper_1.AccountMapper.mapToDomain(account, activities);
    }
    async updateActivities(account) {
        account.activityWindow.activities.forEach((activity) => {
            if (activity.id === null) {
                this.activityRepository.save(account_mapper_1.AccountMapper.mapToActivityOrmEntity(activity));
            }
        });
    }
};
AccountPersistenceAdatper = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(account_orm_entity_1.AccountOrmEntity)),
    __param(1, typeorm_1.InjectRepository(activity_orm_entity_1.ActivityOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AccountPersistenceAdatper);
exports.AccountPersistenceAdatper = AccountPersistenceAdatper;
//# sourceMappingURL=account-persistence.adatper.js.map