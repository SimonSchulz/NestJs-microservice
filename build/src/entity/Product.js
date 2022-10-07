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
const CreditOrder_1 = __importDefault(require("./CreditOrder"));
let Product = class Product extends BaseEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.OneToOne)(() => CreditOrder_1.default),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Product.prototype, "minSum", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Product.prototype, "maxSum", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 3 }),
    __metadata("design:type", String)
], Product.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 4 }),
    __metadata("design:type", Number)
], Product.prototype, "minInterestRate", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 4 }),
    __metadata("design:type", Number)
], Product.prototype, "maxInterestRate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Product.prototype, "needGuarentees", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Product.prototype, "deliveryInCash", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Product.prototype, "earlyRepayment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Product.prototype, "needIncomeDetails", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "minPeriodMonths", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "maxPeriodMonths", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Product.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: constants_1.CalculationMode }),
    __metadata("design:type", String)
], Product.prototype, "calculationMode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "gracePeriodMonth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Product.prototype, "rateIsAdjustable", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Product.prototype, "rateBase", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 4 }),
    __metadata("design:type", Number)
], Product.prototype, "rateFixPart", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 4 }),
    __metadata("design:type", Number)
], Product.prototype, "increasedRate", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.default = Product;
