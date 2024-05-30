import { dataPath } from "../constant";

class Api {
  constructor(dataURL) {
    this._dataURL = dataURL;
  }

  _handleResponse(response) {
    return response.ok ?
      response.json() :
      Promise.reject("Error!!!");

  }

  getIngredients() {

    return fetch(this._dataURL)
      .then(this._handleResponse);
  }
}

const api = new Api(dataPath);

export default api;

