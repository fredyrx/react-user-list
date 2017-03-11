import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

import store from './store';
import UserContainer from './components/userContainer';
import {Provider} from 'react-redux';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

store.subscribe(()=>{
  console.log("state:");
  console.log(store.getState());
});

store.dispatch(
  {type:"ADD_USER",payload:{codigo:1,name:"Fredy Ramos", enabled:true}}
);

store.dispatch(
  {type:"ADD_USER",payload:{codigo:2,name:"Erick Ramos", enabled:false}}
);

ReactDOM.render(
<Provider store={store}><UserContainer /></Provider>, document.getElementById("root") 
);