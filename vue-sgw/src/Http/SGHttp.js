let HOST = 'http://192.168.1.129'
import axios from 'axios'
export function RequestData(method, url, body, resolve, reject) {


  if (method.toUpperCase() == 'GET') {
    axios({
      method: 'get',
      url: HOST + '/api/' + url + '?' + toQueryString(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      console.log(response.data)
      if (response.status == 200 && response.data.status == 1) {
        resolve(response.data)
      } else {
        if (reject) {
          reject(error)
        }
      }
    }).catch(function (error) {
      console.log(error);
      if (reject) {
        reject(error)
      }
    })
  }

  if (method.toUpperCase() == 'POST') {
    axios({
      method: 'post',
      url: HOST + '/api/' + url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: toQueryString(body)
    }).then(function (response) {
      console.log(response.data)
      if (response.status == 200 && response.data.status == 1) {
        resolve(response.data)
      } else {
        if (reject) {
          reject(error)
        }
      }
    }).catch(function (error) {
      console.log(error);
      if (reject) {
        reject(error)
      }
    })
  }

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
  console.log(HOST + url + '?' + toQueryString(body));
  fetch(HOST + url + '?' + toQueryString(body), {
    method: 'GET',
  }).then((response) => {
    return response.json();
  }).then((responseData) => {
    resolve(responseData);
  }).catch((error) => {
    reject(error);
  });
}

//
// //需要汉字转码的用下面方法
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
