import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => {
  return {
    type: 'FETCH_CHEESES_REQUEST'
  } 
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => {
  return {
    type: 'FETCH_CHEESES_ERROR',
    error
  } 
}

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (data) => {
  return {
    type: 'FETCH_CHEESES_SUCCESS', 
    data
  } 
}

export const ADD_CHEESE_REQUEST = 'ADD_CHEESE_REQUEST';
export const addCheeseRequest = () => {
  return {
    type: 'ADD_CHEESE_REQUEST',  
  }
}

export const ADD_CHEESE_ERROR = 'ADD_CHEESE';
export const addCheeseError = (error) => {
  return {
    type: 'ADD_CHEESE',
    error
  }
}

export const ADD_CHEESE_SUCCESS = 'ADD_CHEESE';
export const addCheeseSuccess = (data) => {
  return {
    type: 'ADD_CHEESE_SUCCESS',
    data
  }
}


export const fetchCheeses = () => {
  return(dispatch) => {
    dispatch(fetchCheesesRequest());
    // console.log(`${API_BASE_URL}/cheeses`);
    fetch(`${API_BASE_URL}/cheeses`)
      .then(res => res.json())
      .then(cheeses => dispatch(fetchCheesesSuccess(cheeses.cheeses)))
      .catch(err => dispatch(fetchCheesesError(err)))
  }
}

export const addCheese = (value) => {
  console.log(value)
  const cheeseObj = {"name": value};
  return(dispatch) => {
    dispatch(addCheeseRequest());
    fetch(`${API_BASE_URL}/cheeses`, 
    {
      method: 'POST',
      body: JSON.stringify(cheeseObj),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(cheeses => dispatch(fetchCheesesSuccess(cheeses.cheeses)))
      .catch(err => dispatch(addCheeseError(err)))
  }
}