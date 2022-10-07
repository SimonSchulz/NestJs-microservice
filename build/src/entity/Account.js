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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const PaymentSchedule_1 = __importDefault(require("./PaymentSchedule"));
const Operation_1 = __importDefault(require("./Operation"));
const Card_1 = __importDefault(require("./Card"));
let Account = class Account extends BaseEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Account.prototype, "creditId", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Account.prototype, "principalDebt", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Account.prototype, "interestDebt", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Account.prototype, "outstandingPrincipal", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Account.prototype, "outstandingInterestDebt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Account.prototype, "openingDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Account.prototype, "closingDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 3 }),
    __metadata("design:type", String)
], Account.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Account.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PaymentSchedule_1.default, (paymentSchedule) => paymentSchedule.accountNumber),
    __metadata("design:type", Array)
], Account.prototype, "paymentSchediles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Operation_1.default, (operation) => operation.accounNumber),
    __metadata("design:type", Array)
], Account.prototype, "operations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Card_1.default, (card) => card.accountNumber),
    __metadata("design:type", Array)
], Account.prototype, "cards", void 0);
Account = __decorate([
    (0, typeorm_1.Entity)()
], Account);
exports.default = Account;
