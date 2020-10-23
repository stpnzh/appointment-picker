const initialState = ''

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ID':
      return action.payload
    default:
      return state 
  }
}

export default idReducer;