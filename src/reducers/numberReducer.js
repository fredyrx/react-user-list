/*
    Reducers
*/

const numberReducer = (state, action) => {
    switch(action.type){
        case "addNumber":
        state.correlativo = state.correlativo + action.payload;
        break;
        default:
        break;
    }
    return state;
}

export default numberReducer;