import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { fooAction } from '../actions/index'
import { bindActionCreators } from 'redux'

class BarComponent extends Component {
  render() {
    console.log('this.props', this.props)
    return (
        <div>
        fooBar component {this.props.foo}
        <button className='btn' onClick={this.props.fooAction}>get</button>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    foo: state.fooAction
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fooAction: fooAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BarComponent)