import React, { Component } from 'react';
import ListItem from "./ListItem";

class BoardList extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.lists !== nextProps.lists;
    }

    render(){
        const { lists, onToggle, onRemove, onOpenModal } = this.props;

        const boardLists = lists.map(
            ({id, title, checked }) => (
             <ListItem
                id={id}
                title={title}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                onClick={onOpenModal}
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