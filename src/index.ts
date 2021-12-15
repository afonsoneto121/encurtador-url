import {URLController} from './controllers/url.controller';
import {URLMongoImp} from './repositories/implementation/url.mongo.imp';
import {URLService} from './services/url.service';

const urlMongoRepository = new URLMongoImp();
const urlService = new URLService(urlMongoRepository);
const urlController = new URLController(urlService);

export {urlController};
