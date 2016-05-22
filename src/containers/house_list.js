import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { fetchHouse } from '../actions/index'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

class HouseList extends Component {
  handleClick() {
    _.times(445, () => this.props.fetchHouse())
  }
  mapHouses() {
    return (
      this.props.house ? this.props.house.map(house => {
              return (
                  <li key={house.body.name}>
                    {house.body.name} {house.body.coatOfArms} {house.body.words} {house.body.titles}
                  </li>
                )
            }) : 'no data'
    )
  }
  render() {
    return (
        <div>
          <button className='btn' onClick={() => this.handleClick()}>Get</button>
          <ul className='list-group col-lg-4'>
             {this.mapHouses()}
          </ul>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    house: state.fetchHouse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHouse: fetchHouse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseList)