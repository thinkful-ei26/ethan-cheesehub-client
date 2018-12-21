import React from 'react';

import {Field, reduxForm, reset} from 'redux-form';

import NewCheeseInput from './new-cheese-input';
import { addCheese } from '../actions/cheese';

class NewCheeseForm extends React.Component {

  onSubmit(value) {
    const newCheese = value.newCheese;
    this.props.dispatch(addCheese(newCheese));
    this.props.dispatch(reset('NewCheese'));
  }

  render(){
    return (
    <form onSubmit={this.props.handleSubmit(value => this.onSubmit(value))}>
      <Field 
            component={NewCheeseInput}
            element="input"
            label="Add a cheese!" 
            type="input" 
            name="newCheese" 
            // validate={[required, notEmpty, length]} 
            />
      <button type="submit">Add your cheese</button>
    </form>
    )}
}

export default reduxForm({
  form: 'NewCheese'
})(NewCheeseForm)