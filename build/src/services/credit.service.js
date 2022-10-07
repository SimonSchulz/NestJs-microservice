"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
//import getInfoCreditCards from '../controllers/credit-card.controller';
const credit_card_controller_1 = __importDefault(require("../controllers/credit-card.controller"));
class CreditService {
    constructor() {
        //this.getCreditCardsByClientID = this.getCreditCardsByClientID.bind(this);
        this.creditCardController = new credit_card_controller_1.default();
    }
    getCreditCardsByClientID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { clientID } = req.params;
                //const result = await getInfoCreditCards(clientID);
                const result = yield this.creditCardController.getInfoCreditCards(clientID);
                return res.status(http_status_codes_1.StatusCodes.OK).json({ cards: result });
            }
            catch (error) {
                return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ exists: 'incorrect user id' });
            }
        });
    }
}
exports.default = CreditService;
