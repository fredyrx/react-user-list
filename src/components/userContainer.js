import React from 'react';
import GroupBox from './generics/groupBox';
import UserForm from './userForm';
import UserList from './userList';

export default class UserContainer extends React.Component {

    render(){
        return (
            <GroupBox title="Usuarios">
                <UserForm />
                <UserList />
            </GroupBox>
        );
    }
}