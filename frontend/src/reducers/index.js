import { combineReducers } from 'redux';
import providerReducer from './provider';
import apptReducer from './appt';
import dateReducer from './date';
import patientReducer from './patient';
import idReducer from './id';


const rootReducer = combineReducers({
  provider : providerReducer,
  appt : apptReducer, 
  date : dateReducer,
  patient : patientReducer,
  id : idReducer
})

export default rootReducer;