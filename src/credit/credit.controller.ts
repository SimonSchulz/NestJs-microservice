/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorMessage, messages } from '../helpers/constants';
import CreditCardService from './credit.service';


class CreditController {
  constructor(public creditCardService:CreditCardService ) {
    this.creditCardService = new CreditCardService()
  }

  public getCreditCardsInfo = async (req: Request, res: Response) => {
    try {
      const result = await this.creditCardService.getInfoCreditCards(req.query)

      if (!result){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ exists: ErrorMessage.INCORRECT_ID })
      }
      return res.status(StatusCodes.OK).json({ cards: result });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ exists: messages.INTERNAL_SERVER_ERROR });
    }
  }
}

export default CreditController;