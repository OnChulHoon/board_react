import React, { Component } from 'react';
import ListItem from "./ListItem";

class BoardList extends Component{
    render(){
        const { list, onToggle, onRemove } = this.props;

        return (
            <div>
                <ListItem text="테스트1"/>
                <ListItem text="테스트2"/>
                <ListItem text="테스트3"/>
            </div>
        );
    }
}

export default BoardList;