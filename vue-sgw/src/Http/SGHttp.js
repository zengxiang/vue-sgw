let HOST = 'http://xplay.dinghaoinfo.com/api/'
// let HOST = 'http://192.168.1.129/';
import axios from 'axios'
export function RequestData(method, url, body, resolve, reject) {
  body.credentials = 'include'
  axios({
    method: method,
    url: HOST + url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    dataType: 'JSONP',
    data: body
  }).then(function (response) {
    console.log(response)
    resolve(response)
  })
    .catch(function (error) {
      console.log(error)
      reject(error)
    })
}
function toQueryString(obj) {
  return obj ? Object.keys(obj).sort().map(function (key) {
    var val = obj[key]
    if (Array.isArray(val)) {
      return val.sort().map(function (val2) {
        return (key) + '=' + (val2)
      }).join('&')
    }
    return (key) + '=' + (val)
  }).join('&') : ''
}


export function PostRequestData(url, body, resolve, reject) {
  fetch(HOST + url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    body: toQueryString(body),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      resolve(responseData);
    })
    .catch((error) => {
      reject(error);
    });
}

export function GetRequestData(url, body, resolve, reject) {
  body.credentials = 'include';
  fetch(HOST + url + '?' + toQueryString(body), {
    method: 'GET',
    mode: 'no-cors'
  }).then((response) => {
    return response.json();
  }).then((responseData) => {
    alert(responseData);

    resolve(responseData);
  }).catch((error) => {
    reject(error);
  });
}


// 需要汉字转码的用下面方法
// function toQueryString(obj) {
//     return obj ? Object.keys(obj).sort().map(function (key) {
//         var val = obj[key];
//         if (Array.isArray(val)) {
//             return val.sort().map(function (val2) {
//                 return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
//             }).join('&');
//         }
//
//         return encodeURIComponent(key) + '=' + encodeURIComponent(val);
//     }).join('&') : '';
// }
