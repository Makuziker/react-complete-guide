import * as actionTypes from '../actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_ADDED_HANDLER:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionTypes.PERSON_DELETED_HANDLER:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.id)
      }
    default:
      return state;
  }
};

export default reducer;