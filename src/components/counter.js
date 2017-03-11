import React from 'react';
import store from '../store';

export default class Counter extends React.Component {

  constructor(props){
    super(props);
    this.onClicked = this.onClicked.bind(this);
  }

  componentDidMount(){
    console.log("Conter did mount");
  }

  render(){
    return (
      <div>
         <h1>{this.props.counter}</h1>
         <button onClick={this.onClicked}> Agregar </button> 
      </div>
    )
  }

  onClicked(){
    store.dispatch({type:"addNumber",payload:1});
  }
}

Counter.defaultProps = {
  counter:0
};