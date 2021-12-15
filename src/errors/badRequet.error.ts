import {ApplicationError} from './application.error';

class BadRequest extends ApplicationError<any> {}

export {BadRequest};
