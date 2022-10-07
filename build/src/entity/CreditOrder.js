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
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const Credit_1 = __importDefault(require("./Credit"));
const Product_1 = __importDefault(require("./Product"));
let CreditOrder = class CreditOrder extends BaseEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.OneToOne)(() => Credit_1.default),
    __metadata("design:type", String)
], CreditOrder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreditOrder.prototype, "clientid", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Product_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", Product_1.default)
], CreditOrder.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], CreditOrder.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], CreditOrder.prototype, "monthlyIncome", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], CreditOrder.prototype, "monthlyExpenditure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: constants_1.OrderStatus }),
    __metadata("design:type", String)
], CreditOrder.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CreditOrder.prototype, "periodMonth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CreditOrder.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], CreditOrder.prototype, "employerIdentificationNumber", void 0);
CreditOrder = __decorate([
    (0, typeorm_1.Entity)()
], CreditOrder);
exports.default = CreditOrder;
