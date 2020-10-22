const initialState = ''

const apptReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_APPT':
      return action.payload
    default:
      return state 
  }
}

export default apptReducer;