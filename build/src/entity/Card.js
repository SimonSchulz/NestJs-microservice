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
const constants_1 = require("../helpers/constants");
const Account_1 = __importDefault(require("./Account"));
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
let Card = class Card extends BaseEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Card.prototype, "cardNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Account_1.default, (account) => account.cards),
    __metadata("design:type", Account_1.default)
], Card.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Card.prototype, "holderName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "expirationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Card.prototype, "paymentSystem", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Card.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Card.prototype, "transactionLimit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: constants_1.CardStatus }),
    __metadata("design:type", String)
], Card.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Card.prototype, "deliveryPoint", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Card.prototype, "coBrand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Card.prototype, "isDigitalWallet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Card.prototype, "isDigital", void 0);
Card = __decorate([
    (0, typeorm_1.Entity)()
], Card);
exports.default = Card;
