import React from 'react';

export default class GroupBox extends React.Component {
    render(){
        return (
            <fieldset>
                <legend>{this.props.title}</legend>
                {this.props.children}
            </fieldset>
        );
    }
}