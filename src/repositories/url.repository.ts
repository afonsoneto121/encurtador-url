import {URL} from '../models/url';

interface IURLRepository {
  saveURL(url: URL): Promise<void>,
  findURLByDomain(domain: string): Promise<URL | undefined | null>
  findDomainByURLShortened(url: string): Promise<string | undefined | null>
  findDomainByHash(hash: string): Promise<string | undefined | null>
}

export {IURLRepository};
