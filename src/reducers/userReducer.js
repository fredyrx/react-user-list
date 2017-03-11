import _ from 'lodash';

const initialUserState = {
    users:[]
};

const userReducer = (state=initialUserState,action)=>{
    switch(action.type){
        case "ADD_USER":
            return Object.assign({},state, {users:state.users.concat([action.payload])})
            break;
        case "REMOVE_USER":
            const newUsers = _.filter(state.users,u=>u.codigo !== action.payload.user.codigo);
            return Object.assign({},state, {users: newUsers});
        case "DISABLED_USER":
            const updateUsers = _.filter(state.users,u=>u.codigo !== action.payload.user.codigo)
                .concat([{...action.payload.user,enabled:false}]);
            return Object.assign({},state, {users: updateUsers});
        case "ENABLED_USER":
            const updateUsers2 = _.filter(state.users,u=>u.codigo !== action.payload.user.codigo)
                .concat([{...action.payload.user,enabled:true}]);
            return Object.assign({},state, {users: updateUsers2});
        default:
        break;
    }
        return state;
};

export default userReducer;