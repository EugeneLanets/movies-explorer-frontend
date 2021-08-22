import { baseUri } from '../config';

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }
}

const mainApi = new Api(baseUri);
export default mainApi;
