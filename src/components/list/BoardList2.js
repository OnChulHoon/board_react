import React, { Component } from 'react';
import ListItem2 from "./ListItem2";

class BoardList2 extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.lists !== nextProps.lists;
    }

    render(){
        const { lists } = this.props;

        const boardLists = lists.map(
            ({ boardNo, title, writer, content, wrtDate }) => (
                <ListItem2
                    boardNo={boardNo}
                    title={title}
                    writer={writer}
                    content={content}
                    wrtDate={wrtDate}/>
            )
        );

        return (
            <div>
                <ListItem2 data={boardLists}/>
            </div>
        );
    }
}

export default BoardList2;