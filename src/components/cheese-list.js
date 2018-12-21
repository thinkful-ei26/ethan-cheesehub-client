import React from 'react';

export default class CheeseList extends React.Component {
  

  render(){
    console.log(this.props.cheeses);
    
    const cheeseMap = this.props.cheeses.map((cheese, index) => <li key={index}>{cheese}</li>)

    return <ul>
      {cheeseMap}
    </ul>

  }
}