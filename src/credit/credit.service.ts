import { ParsedQs } from "qs";
import { getRepository, ObjectType } from "typeorm";
import Account from "../entity/Account";
import Card from "../entity/Card";
import { CardStatus } from "../helpers/constants";

class CreditCardService {

  public async getInfoCreditCards(param){
    const { clientId } = param;
    const accountData = await getRepository(Account).find({
      where: [{ creditId: clientId}]      
    })
  
    const {currencyCode} = accountData[0];
              
    if (accountData.length){
      const cardsData = await getRepository(Card).find({
        where: [
          { accountNumber: clientId, status: CardStatus.ACTIVE },
          { accountNumber: clientId, status: CardStatus.BLOCKED } ],
      })
      
      return cardsData.map(card => {
        const {cardNumber, balance} = card;
        return {  cardId:clientId,
                  cardNumber,
                  balance,
                  accountCurrencyCode:currencyCode }
      })
    } 
  }
}

export default CreditCardService;