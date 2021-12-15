import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {BadRequest} from '../errors/badRequet.error';
import {URL} from '../models/url';
import {URLService} from '../services/url.service';
class URLController {
  constructor(private service: URLService) {}
  public async handleShorten(req: Request, res: Response, next: NextFunction): Promise<void> {
    const urlRequest: URL = req.body;
    try {
      if (!this.isURL(urlRequest)) {
        throw new BadRequest({log: 'Bad Request URL', message: 'Bad Request URL'});
      }
      const url = await this.service.saveURL(urlRequest);

      res.status(StatusCodes.OK).json(url);
    } catch (err) {
      next(err);
    }
  }
  private isURL(url: URL): url is URL {
    return 'domain' in url;
  }
}
export {URLController};
