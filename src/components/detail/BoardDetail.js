import React, { Component } from 'react';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "left",
    paddingLeft: "150px",
};

class BoardDetail extends Component {

    render() {

        const { selectedRow } = this.props;

        console.log("[BoardDetail] selectedContent : ", selectedRow);
        console.log("[BoardDetail] row.original.idx : ", selectedRow.idx);
        console.log("[BoardDetail] row.original.boardNo : ", selectedRow.boardNo);
        console.log("[BoardDetail] row.original.title : ", selectedRow.title);
        console.log("[BoardDetail] row.original.content : ", selectedRow.content);

        return (
            <div style={styles}>
                <h4>{this.props.selectedRow.content}</h4>
            </div>
        );
    }
}

export default BoardDetail;
