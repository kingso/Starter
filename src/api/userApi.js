import 'whatwg-fetch';
// import getBaseUrl from './baseUrl';

// const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

// // Can't call func delete since reserved word.
// export function deleteUser(id) {
//     return del(`users/${id}`);
//   }
  

// function del(url) {
//   const request = new Request(baseUrl + url, {
//     method: 'DELETE'
//   });

//   return fetch(request).then(onSuccess, onError);
// }
