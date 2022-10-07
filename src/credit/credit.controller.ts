/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CreditCardService from './credit.service';


class CreditController {
  public creditCardService:CreditCardService;

  constructor() {
    this.getCreditCardsByClientID = this.getCreditCardsByClientID.bind(this);
    this.creditCardService = new CreditCardService()
  }


  async getCreditCardsByClientID(req: Request, res: Response) {
    try {
      const {clientID} = req.params;
      const result = await this.creditCardService.getInfoCreditCards(clientID)
      
      return res.status(StatusCodes.OK).json({ cards: result });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ exists: 'incorrect user id' });
    }
  }
}

export default CreditController;