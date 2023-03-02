import { getRepository, ObjectType } from "typeorm";
import Account from "../entity/Account";
import Card from "../entity/Card";
import { CardStatus } from "../helpers/constants";

class CreditCardService {

  public async getInfoCreditCards(creditId){
    const accountData = await getRepository(Account).findOne({ creditId })
                
    if (accountData){
      const { currencyCode } = accountData;
      const cardsData = await getRepository(Card).find({
        where: [
          { accountNumber: creditId, status: CardStatus.ACTIVE },
          { accountNumber: creditId, status: CardStatus.BLOCKED } ],
      })
      
      return cardsData.map(card => {
        const {cardNumber, balance} = card;
        return {  cardId:creditId,
                  cardNumber,
                  balance,
                  accountCurrencyCode:currencyCode }
      })
    } 
  }
}

export default CreditCardService;