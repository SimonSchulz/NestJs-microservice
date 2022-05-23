import { IRouter } from 'express';
import ExampleService from '../services/example.service';

class ExampleController {
  private exampleService: ExampleService;

  constructor(private router: IRouter) {
    this.router = router;
    this.exampleService = new ExampleService();
    this.routes();
  }

  public routes() {
    this.router.route('/something').get(this.exampleService.testRequest);
  }
}

export default ExampleController;
