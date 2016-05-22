import request from 'superagent'
const BASE_API_URL = 'http://anapioficeandfire.com/api/houses/'
let counter = 0

function getAPI() {
  counter+=1
  return new Promise((fulfill, reject) => {
    request.get(BASE_API_URL+counter).end((err, res) => {
      if (err) {
        reject({
          status: res.status,
          error: res.body ? res.body.error : res.error,
          code: res.statusCode
        })
      } else if (!res.body) {
        fulfill(res)
      } else {
        fulfill({
          body: res.body,
          status: res.status
        })
      }
    })
  })
}

export function fetchHouse() {
  const promise = getAPI()

  return {
    type: 'HOUSE_FETCH',
    payload: promise
  }
}