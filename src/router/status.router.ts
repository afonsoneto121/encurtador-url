import {Router} from 'express';
import StatusCodes from 'http-status-codes';

// eslint-disable-next-line new-cap
const urlStatus = Router();

urlStatus.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'OK',
  });
});

export {urlStatus};
