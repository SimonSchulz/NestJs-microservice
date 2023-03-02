import { getRepository, ObjectType } from "typeorm";
import Account from "../entity/Account";

class CreditCardService {
  public async getAccountsWithCreditCards(clientId){
    const check = await getRepository(Account).find({
      relations: ['card'],
      where: {
        isMainAccount: true,
        clientId
    },
    });

    return check
  }
}

export default CreditCardService;