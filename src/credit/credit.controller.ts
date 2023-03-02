/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorMessage } from '../helpers/constants';
import CreditCardService from './credit.service';


class CreditController {
  constructor(public creditCardService:CreditCardService ) {
    this.creditCardService = new CreditCardService()
  }

  public getCreditCardsInfo = async (req: Request, res: Response) => {
    try {
      const { clientId } = req.query;
      const result = await this.creditCardService.getInfoCreditCards(clientId)

      if (!result){
        return res.status(StatusCodes.NOT_FOUND).json({ message: ErrorMessage.NOT_FOUND_CARDS })
      }
      return res.status(StatusCodes.OK).json({ cards: result });
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
  }
}

export default CreditController;