import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import headersMiddleware from '../helpers/headers';
import ExampleController from '../controllers/example.controller';

class App {
  public app: Application;

  public router: Router;

  public exampleController: ExampleController;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.set_config();
    this.exampleController = new ExampleController(this.router);
  }

  private set_config() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
    this.app.use(headersMiddleware);
    this.app.use(express.static('static'));
    this.app.use('/api/v1', this.router);
  }
}

export default new App().app;
