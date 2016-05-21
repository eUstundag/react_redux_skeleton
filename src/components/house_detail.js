import React, { Component } from 'react'
import request from 'superagent'
const BASE_API_URL = 'http://anapioficeandfire.com/api/'
export default class HouseList extends Component {
  getAPI() {
    const promise = new Promise(function (fulfill, reject) {
      request.get(BASE_API_URL).end(function(err, res) {
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
  render() {
    this.getAPI()
    return (
        <div>
          <ul className='list-group col-sm-4'>
            TEST
          </ul>
        </div>
      )
  }
}