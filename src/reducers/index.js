import { combineReducers } from 'redux';
import HouseReducer from './reducer_house'
const rootReducer = combineReducers({
  house: HouseReducer
})

export default rootReducer