import { DateTime } from 'luxon';

const initialState = DateTime.local()

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return action.payload;
    default:
      return state
  }
}

export default dateReducer;