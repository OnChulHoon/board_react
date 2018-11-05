import React, { Component } from 'react';
import ListItem from "./ListItem2";

class BoardList2 extends Component{

    render(){
        const { lists, onRemove, onOpenModal } = this.props;

        const boardLists = lists.map(
            ({ boardNo, title, writer, content, wrtDate, checked }) => (
                <ListItem
                    boardNo={boardNo}
                    title={title}
                    writer={writer}
                    content={content}
                    wrtDate={wrtDate}
                    checked={checked}
                    onRemove={onRemove}
                    onClick={onOpenModal}
                    key={boardNo}/>
            )
        );
        return (
            <div>
                {boardLists}
            </div>
        );
    }
}

export default BoardList2;