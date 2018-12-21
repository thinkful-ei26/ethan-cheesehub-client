import {combineReducers} from 'redux';
import {cheeseReducer} from './cheese';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  cheeseReducer
});

export default rootReducer;