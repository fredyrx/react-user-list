import React from 'react';

export default class UserForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            _name:"",
            _enabled:false
        }
    }

    render(){
        return (
            <form>
                <label htmlFor="descripcion"> Nombre: </label>
                <input type="text" id="descripcion"/>
                <label htmlFor="enabled"> Habilitado?: </label>
                <input type="checkbox" id="enabled" checked={this.state._enabled}/>
                <input type="submit" 
                    value="Guardar" 
                    onClick={(event)=>{this.handleOnClick(event)}}
                />
            </form>
        );
    }

    handleOnClick = (e) =>{
        console.log("button clicked");
        e.preventDefault();
        console.log(e);
    }
}