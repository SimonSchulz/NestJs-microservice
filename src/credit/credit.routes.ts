import { IRouter } from 'express';
import CreditController from './credit.controller';
import CreditCardService from './credit.service';

class CreditRoutes {
 public creditController: CreditController;
 public creditCardSevice: CreditCardService

  constructor(private router: IRouter) {
    this.router = router;
    this.creditController = new CreditController(this.creditCardSevice);
    this.routes();
  }

  public routes() {
     this.router.get('/credit-cards', this.creditController.getCreditCardsInfo)
  }
}

export default CreditRoutes;