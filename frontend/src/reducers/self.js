const initialState = '';

const selfReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENTER_NAME':
      return action.payload;
    default:
      return state;
  }
}

export default selfReducer;