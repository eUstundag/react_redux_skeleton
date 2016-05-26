import { combineReducers } from 'redux';
import fooActionReducer from './reducer_foo_action'
const rootReducer = combineReducers({
  fooAction: fooActionReducer
});

export default rootReducer;