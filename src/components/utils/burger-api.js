const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Error get data`);
  }
  return res.json();
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export { checkResponse, request };