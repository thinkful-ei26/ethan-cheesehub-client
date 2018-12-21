import {FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR, ADD_CHEESE_ERROR, ADD_CHEESE_REQUEST, ADD_CHEESE_SUCCESS} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export const cheeseReducer = (state=initialState, action) => {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      cheeses: action.data
    })
  } else if (action.type === ADD_CHEESE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === ADD_CHEESE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === ADD_CHEESE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      cheeses: action.data
    })
  }
  return state
}