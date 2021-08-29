import { moviesUrl } from '../config';

class Api {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  // eslint-disable-next-line class-methods-use-this
  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Ошибка: ${response.status}`));
  }

  get() {
    return fetch(this._baseURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._handleResponse);
  }
}

const movieApi = new Api(moviesUrl);

export default movieApi;
