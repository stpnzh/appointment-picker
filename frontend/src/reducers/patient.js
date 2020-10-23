const initialState = '';

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PATIENT_NAME':
      return action.payload;
    default:
      return state;
  }
}

export default patientReducer;