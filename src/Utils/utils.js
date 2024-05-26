import { dataPath } from "../constant";

class Utils {
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
      .then(this._handleResponse)
      .catch(console.log);
  }
}

const utils = new Utils(dataPath);

export default utils;

