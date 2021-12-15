import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequest} from '../errors/badRequet.error';

const errorHanddlerMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof BadRequest) {
    console.error(error.information.log);
    console.error(error.information.data);
    return res.status(StatusCodes.BAD_REQUEST).send(error.information.message);
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
};

export {errorHanddlerMiddleware};
