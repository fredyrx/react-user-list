import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

 import {createStore} from 'redux';
 import {Provider} from 'react-redux';

 const reducer = (state,action) => {
   switch (action.type){
    case 'add':
      state.counter = state.counter + action.payload
   }
   return state;
 };

 const store = createStore(reducer,{counter:0});

const action =  {
  type:"add",payload:1
};

store.subscribe(()=>{
  console.log("data:"+ store.getState().counter);
});


store.dispatch(action);
store.dispatch(action);


export default class NumberText extends React.Component {
  
  render(){
    return (
      <div>
         <h1>{this.props.counter}</h1>
         <button > Agregar </button> 
      </div>
    )
  }
}

NumberText.defaultProps = {
  counter:1
};

ReactDOM.render(
<Provider store={store}><NumberText /></Provider>, document.getElementById("root") 
);