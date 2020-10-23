const initialState = ''

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PROVIDER_NAME':
      return action.payload;
    default:
      return state
  }
}

export default providerReducer;