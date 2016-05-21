import React from 'react';
import { Component } from 'react';
import HouseList from './house_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        GoT API
        <div>
          <button className='btn'>Get</button>
          <HouseList />
        </div>
      </div>
    )
  }
}