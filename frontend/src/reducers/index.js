import { combineReducers } from 'redux';
import nameReducer from './name';
import apptReducer from './appt';
import dateReducer from './date';
import selfReducer from './self';


const rootReducer = combineReducers({
  name : nameReducer,
  appt : apptReducer, 
  date : dateReducer,
  self : selfReducer
})

export default rootReducer;