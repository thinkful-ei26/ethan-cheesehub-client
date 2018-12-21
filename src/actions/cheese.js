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



export const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheesesRequest());
    console.log(`${API_BASE_URL}/cheeses`);
    fetch(`${API_BASE_URL}/cheeses`)
      .then(res => res.json())
      .then(cheeses => dispatch(fetchCheesesSuccess(cheeses.cheeses)))
      .catch(err => dispatch(fetchCheesesError(err)))
  }
}