import { combineReducers } from 'redux';
import fetchHouseReducer from './reducer_fetch_house'

const rootReducer = combineReducers({
  fetchHouse: fetchHouseReducer
})

export default rootReducer