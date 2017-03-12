import React from 'react';
import store from '../store';
import FontAwesome from 'react-fontawesome';

export default class Item extends React.Component{

    render(){
        return (
            <li> 
                <FontAwesome  name="rocket" />
                {this.props.user.name} 
                Activo: {this.props.user.enabled ? "si":"no"} 
                <a href="#" onClick={this.handleClick}> {this.props.user.enabled ? "Desabilitar":"Habilitar"} </a>
                <a href="#" onClick={this.handleClickRemove}> Eliminar </a>
            </li>
        );
    }

    handleClick = ()=>{
        store.dispatch(
            {
                type: this.props.user.enabled ? "DISABLED_USER":"ENABLED_USER",
                payload: this.props
            }
        );
    }

    handleClickRemove = () => {
        store.dispatch(
            {
                type: "REMOVE_USER",
                payload: this.props
            }
        );        
    }
}