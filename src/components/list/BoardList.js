import React, { Component } from 'react';
import ListItem from "./ListItem";

class BoardList extends Component{
    render(){
        const { lists, onToggle, onRemove } = this.props;

        const boardLists = lists.map(
            ({id, text, checked }) => (
             <ListItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}/>
            )
        );
        return (
            <div>
                {boardLists}
            </div>
        );
    }
}

export default BoardList;