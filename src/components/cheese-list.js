import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }


  render(){
    console.log(this.props);

    let cheeseList
    if(this.props.error){
      cheeseList = this.props.error.message
    } else {
      cheeseList = this.props.cheeses.map((cheese, index) => <li key={index}>{cheese}</li>)
    }

    return <ul>
      {cheeseList}
    </ul>

  }
}

const mapStateToProps = state => {
  return {
    cheeses: state.cheeses,
    state,
    error: state.error
  }
}

export default connect (mapStateToProps)(CheeseList);