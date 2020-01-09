import React from 'react';

class Try extends React.Component{
  render(){
    return(
    <div>
    <li>{this.props.jung.tries}</li>
    <li>{this.props.jung.result}</li>
    </div>
  );
  }
}

export default Try;
