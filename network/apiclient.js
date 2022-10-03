export const API_CLIENT = function () {
  return {
    headers : {
      'Content-type': 'application/x-www-form-urlencoded',
    }
  }
}

export const API_CLIENT_WITH_TOKEN = function (token) {
  return {
    headers : {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token
    }
  }
}
