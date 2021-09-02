import { baseUrl, movieCoverPrefix } from '../config';

class Api {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  // eslint-disable-next-line class-methods-use-this
  async _handleResponse(response) {
    const resp = await response.json();
    if (response.ok) {
      return resp;
    }

    return Promise.reject(resp.message);
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

  getSavedMovies() {
    return fetch(`${this._baseURL}/movies/`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(this._handleResponse);
  }

  saveMovie({
    nameRU,
    nameEN,
    id,
    image,
    trailerLink,
    description,
    duration,
    country,
    director,
    year,
  }) {
    const movieToSave = {
      nameRU,
      nameEN,
      movieId: id,
      image: `${movieCoverPrefix}${image.url}`,
      thumbnail: `${movieCoverPrefix}${image.formats.thumbnail.url}`,
      trailer: trailerLink,
      description,
      duration,
      country,
      director,
      year,
    };
    return this._post('movies', movieToSave);
  }

  deleteMovie(id) {
    return fetch(`${this._baseURL}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(this._handleResponse);
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
