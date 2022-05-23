/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class ExampleService {
  constructor() {
    this.testRequest = this.testRequest.bind(this);
  }

  async testRequest(req: Request, res: Response) {
    try {
      return res.status(StatusCodes.OK).json({ msg: 'Success' });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ exists: 'Phone is already registered' });
    }
  }
}

export default ExampleService;
