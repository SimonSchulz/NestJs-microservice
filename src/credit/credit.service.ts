import {getConnection} from "typeorm";
import Account from "../entity/Account";
import Card from "../entity/Card";
import { CardStatus } from "../helpers/constants";

class CreditCardService {

  public async getInfoCreditCards(cardId:string){
    const connection = getConnection();
    const accountData = await connection.getRepository(Account).find({
      where: [{ creditId: cardId}]      
    })
  
    const {currencyCode} = accountData[0];
              
    if (accountData.length){
      const cardsData = await connection.getRepository(Card).find({
        where: [
          { accountNumber: cardId, status: CardStatus.ACTIVE },
          { accountNumber: cardId, status: CardStatus.BLOCKED } ],
      })
      
      return cardsData.map(card => {
        const {cardNumber, balance} = card;
        return {  cardId,
                  cardNumber,
                  balance,
                  accountCurrencyCode:currencyCode }
      })
    } 
  }
}

export default CreditCardService;