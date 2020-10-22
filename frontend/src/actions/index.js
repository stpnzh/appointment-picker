const SELECT_NAME = 'SELECT_NAME';
const SELECT_APPT = 'SELECT_APPT';
const SELECT_DATE = 'SELECT_DATE';
const ENTER_NAME = 'ENTER_NAME';


export const selectName = (name) => {
  return {
    type: SELECT_NAME,
    payload: name
  }
}

export const selectAppt = (appt) => {
  return {
    type: SELECT_APPT,
    payload: appt
  }
}

export const selectDate = (date) => {
  return {
    type: SELECT_DATE,
    payload: date
  }
}

export const setSelf = (self) => {
  return {
    type: ENTER_NAME,
    payload: self
  }
}