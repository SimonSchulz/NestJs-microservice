import { IRouter } from 'express';
import CreditController from './credit.controller';

class CreditRoutes {
 public creditController: CreditController;

  constructor(private router: IRouter) {
    this.router = router;
    this.creditController = new CreditController();
    this.routes();
  }

  public routes() {
     this.router.route('/credit-cards/:clientID').get(this.creditController.getCreditCardsByClientID)
  }
}

export default CreditRoutes;