"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const credit_service_1 = __importDefault(require("../services/credit.service"));
class CreditController {
    constructor(router) {
        this.router = router;
        this.router = router;
        this.creditService = new credit_service_1.default();
        this.routes();
    }
    routes() {
        this.router.route('/credit-cards/:clientID').get(this.creditService.getCreditCardsByClientID);
    }
}
exports.default = CreditController;
