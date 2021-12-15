import {URL} from '../models/url';

interface IURLRepository {
  saveURL(url: URL): Promise<void>,
  findURLByDomain(domain: string): Promise<URL | undefined>
}

export {IURLRepository};
