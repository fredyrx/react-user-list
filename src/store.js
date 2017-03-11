import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
//import numberReducer from './reducers/numberReducer';

// const state = {
//     userState: {
//         users: []
//     }
// };

const reducers = combineReducers({
    userState: userReducer
});

//const store = createStore(userReducer, state);
const store = createStore(reducers);

export default store;