import React from 'react';
import { Component } from 'react';
import HouseList from '../containers/house_list';

export default class App extends Component {
  render() {
    return (
      <div>
        GoT API
        <HouseList />
      </div>
    )
  }
}