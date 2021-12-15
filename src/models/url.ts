import {Schema, model} from 'mongoose';

interface URL {
  uuid?: string,
  domain: string,
  hash?: string,
  urlShortened?: string,
}
const schema = new Schema<URL>({
  uuid: String,
  domain: String,
  hash: String,
  urlShortened: String,
}, {
  versionKey: false,
});

const URLModel = model<URL>('url', schema);
export {URL, URLModel};
