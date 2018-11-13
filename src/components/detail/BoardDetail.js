import React, { Component } from 'react';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "left",
    paddingLeft: "150px",
};

class BoardDetail extends Component {

    render() {

        const { contentLists } = this.props;

        // 콘솔에서 데이터 확인용 로그 출력
        console.log("[BoardDetail] contentLists : ", contentLists);
        console.log("[BoardDetail] row.original.idx : ", contentLists.idx);
        console.log("[BoardDetail] row.original.boardNo : ", contentLists.boardNo);
        console.log("[BoardDetail] row.original.title : ", contentLists.title);
        console.log("[BoardDetail] row.original.content : ", contentLists.content);

        return (
            <div style={styles}>
                {/*<h3>{this.props.contentLists.title}</h3>*/}
                <h4>{this.props.contentLists.content}</h4>
            </div>
        );
    }
}

export default BoardDetail;
