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
const typeorm_1 = require("typeorm");
const Account_1 = __importDefault(require("../entity/Account"));
const Card_1 = __importDefault(require("../entity/Card"));
const constants_1 = require("../helpers/constants");
class CreditCardController {
    // constructor(public cardId:any) {
    //   this.cardId = cardId;
    // }
    getInfoCreditCards(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = (0, typeorm_1.getConnection)();
            const accountData = yield connection.getRepository(Account_1.default).find({
                where: [{ creditId: cardId }]
            });
            const { currencyCode } = accountData[0];
            if (accountData.length) {
                const cardsData = yield connection.getRepository(Card_1.default).find({
                    where: [
                        { accountNumber: cardId, status: constants_1.CardStatus.ACTIVE },
                        { accountNumber: cardId, status: constants_1.CardStatus.BLOCKED }
                    ],
                });
                return cardsData.map(card => {
                    const { cardNumber, balance } = card;
                    return { cardId,
                        cardNumber,
                        balance,
                        accountCurrencyCode: currencyCode };
                });
            }
        });
    }
}
// const getInfoCreditCards  = async (cardId:any) => {
//   const connection = getConnection();
//   const accountData = await connection.getRepository(Account).find({
//     where: [{ creditId: cardId}]      
//   })
//   const {currencyCode} = accountData[0];
//   if (accountData.length){
//     const cardsData = await connection.getRepository(Card).find({
//       where: [
//         { accountNumber: cardId, status: CardStatus.ACTIVE },
//         { accountNumber: cardId, status: CardStatus.BLOCKED } ],
//     })
//     return cardsData.map(card => {
//       const {cardNumber, balance} = card;
//       return {  cardId,
//                 cardNumber,
//                 balance,
//                 accountCurrencyCode:currencyCode }
//     })
//   } 
// };
exports.default = CreditCardController;
