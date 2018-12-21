import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CheeseList cheeses={[
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
]} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
