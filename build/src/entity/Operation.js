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
const Account_1 = __importDefault(require("./Account"));
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const OperationType_1 = __importDefault(require("./OperationType"));
let Operation = class Operation extends BaseEntity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Operation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Account_1.default, (account) => account.operations),
    __metadata("design:type", Account_1.default)
], Operation.prototype, "accounNumber", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => OperationType_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'operationTypeId' }),
    __metadata("design:type", String)
], Operation.prototype, "operationTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 19, scale: 4 }),
    __metadata("design:type", Number)
], Operation.prototype, "sum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Operation.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 3 }),
    __metadata("design:type", String)
], Operation.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], Operation.prototype, "completedAt", void 0);
Operation = __decorate([
    (0, typeorm_1.Entity)()
], Operation);
exports.default = Operation;
