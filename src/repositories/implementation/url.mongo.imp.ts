import {URL} from '../../models/url';
import {IURLRepository} from '../url.repository';

class URLMongoImp implements IURLRepository {
  async saveURL(url: URL): Promise<void> {
    console.log('save');
  }
  async findURLByDomain(domain: string): Promise<URL | undefined> {
    return undefined;
  }
}
export {URLMongoImp};
