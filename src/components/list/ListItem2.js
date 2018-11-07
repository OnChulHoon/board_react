import React, { Component } from 'react';
import './ListItem2.css';
import ReactTable from "react-table";
import "react-table/react-table.css";

class ListItem2 extends Component {

    state = {
        input: '',
        textarea: '',
        lists: [
            { boardNo: 1, title: "글제목1", writer: "관리자1", content: "내용1", wrtDate: "2018-11-07" }
        ]
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.lists !== nextProps.lists;
    }
/*
    static getDerivedStateFromProps(nextProps, prevState){

        if (nextProps.value !== prevState.value){
            return { value : nextProps.value };
        }
        return null;
    }


    componentDidUpdate(prevProps, prevState) {
        if(this.props.value !== prevProps.value){
            console.log("value 값이 변경되었습니다!" , this.props.value);
        }
    }
*/

    render() {

        const columns = [{
            Header: '글번호',
            accessor: 'boardNo'
        },{
            Header: '제목',
            accessor: 'title'
        },{
            Header: '작성자',
            accessor: 'writer'
        },{
            Header: '작성일',
            accessor: 'wrtDate'
        }]

        return (
            <div>
                <ReactTable
                    columns={columns}
                    data={this.state.lists}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}/>
            </div>
        );
    }
}

export default ListItem2;