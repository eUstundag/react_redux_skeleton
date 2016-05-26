import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { fooAction } from '../actions/index'
import { bindActionCreators } from 'redux'

class BarComponent extends Component {
  render() {
    return (
        <div>
        Bar Component
        <button onClick={this.props.fooAction()}/>
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