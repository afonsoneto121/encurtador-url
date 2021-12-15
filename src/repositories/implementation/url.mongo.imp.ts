import {URL, URLModel} from '../../models/url';
import {IURLRepository} from '../url.repository';

class URLMongoImp implements IURLRepository {
  async saveURL(url: URL): Promise<void> {
    await URLModel.create(url);
  }
  async findURLByDomain(domain: string): Promise<URL | undefined | null> {
    return await URLModel.findOne({domain}, {_id: 0});
  }
  async findDomainByURLShortened(urlShortened: string): Promise<string | undefined | null> {
    const url = await URLModel.findOne({urlShortened}, {_id: 0});
    return url?.domain;
  }
  async findDomainByHash(hash: string): Promise<string | undefined | null> {
    const url = await URLModel.findOne({hash}, {_id: 0});
    return url?.domain;
  }
}
export {URLMongoImp};
