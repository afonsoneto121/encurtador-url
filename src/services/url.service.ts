import {nanoid} from 'nanoid';
import {URL} from '../models/url';
import {IURLRepository} from '../repositories/url.repository';
import * as uuid from 'uuid';
import * as constants from '../common/constants';
class URLService {
  constructor(private repository: IURLRepository) {}
  public async saveURL(url: URL): Promise<URL> {
    const urlAlreadyExists = await this.repository.findURLByDomain(url.domain);
    if (urlAlreadyExists) {
      return urlAlreadyExists;
    }
    const hash = nanoid(10);
    const urlToSave: URL = {
      domain: url.domain,
      hash,
      urlShortened: `${constants.API_URL}/${hash}`,
      uuid: uuid.v4(),
    };
    await this.repository.saveURL(urlToSave);
    return urlToSave;
  }

  public async findDomain(url: string): Promise<string | undefined | null> {
    if (this.isFullUrl(url)) {
      return await this.repository.findDomainByURLShortened(url);
    }
    return await this.repository.findDomainByHash(url);
  }

  private isFullUrl(url: string): boolean {
    return url.startsWith('http');
  }
}
export {URLService};
