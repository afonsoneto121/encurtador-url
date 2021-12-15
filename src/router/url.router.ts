import {NextFunction, Request, Response, Router} from 'express';
import {urlController} from '../';
// eslint-disable-next-line new-cap
const urlRouter = Router();

urlRouter.post('/', (req: Request, res: Response, next: NextFunction) => (
  urlController.handleShorten(req, res, next)
));

urlRouter.get('/:hash', (req: Request<{hash:string}>, res: Response, next: NextFunction) => (
  urlController.redirect(req, res, next)
));

export {urlRouter};
