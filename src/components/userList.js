import React from 'react';
import User from './user';
import GroupBox from './generics/groupBox';
//import store from '../store';
import {connect} from 'react-redux';

class UserList extends React.Component {

    static defaultProps = {
        users: []
    };

    render(){
        return (
            <GroupBox title="Lista de usuarios">
                <ul>
                    {this.props.users.map((u) => {
                        return <User key={u.codigo} user={u} />
                    })}
                </ul>
                Total: {this.props.users.length}
            </GroupBox>
        );
    }
}

 const mapStateToProps = (store) =>{
     return {
         users: store.userState.users
     }
 }

export default connect(mapStateToProps)(UserList);
//export default UserList;