import { baseUrl } from '../config';

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

  checkToken() {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._handleResponse);
  }

  _post(path, credentials) {
    return fetch(`${this._baseURL}/${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(this._handleResponse);
  }

  register(credentials) {
    return this._post('signup', credentials);
  }

  login(credentials) {
    return this._post('signin', credentials);
  }

  logout() {
    return fetch(`${this._baseURL}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(this._handleResponse);
  }

  update(userInfo) {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(this._handleResponse);
  }
}

const mainApi = new Api(baseUrl);
export default mainApi;
