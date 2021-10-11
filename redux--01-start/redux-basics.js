// execute with node, 'node redux-basics.js'
const redux = require('redux'); // nodejs syntax for importing
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  // NEVER mutate data, always do it immutably
  if (action.type === 'INC_COUNTER') {
    return {
      ...state, // copy values ans props of old state
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state, // copy values ans props of old state
      counter: state.counter + action.value
    }
  }

  return state;
};

// Store
const store =  createStore(rootReducer);
console.log(store.getState());

// Subscription is triggered whenever state is updated (AFTER the dispatch)
store.subscribe(() => {
  console.log('|Subscription|', store.getState());
});

// Dispatch Action
// dispatch MUST have a type property
// 2nd arg is payload, and can be a single property or a payload: {} object
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
