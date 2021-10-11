import * as actionTypes from '../actions';

const initialState = {
  results: []
};

// ...state is to copy old state immutably so that new state is passed without losing old state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
      }
    case actionTypes.DELETE_RESULT:
      const newArr = state.results.filter(result => {
        return result.id !== action.id;
      });
      return {
        ...state,
        results: newArr
      }
    default:
      return state;
  }
}

export default reducer;