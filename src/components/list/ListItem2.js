import React, { Component } from 'react';
import './ListItem2.css';
import ReactTable from "react-table";
import "react-table/react-table.css";

class ListItem2 extends Component {



    render() {

        const lists = [{
            boardNo: 1,
            title: "글제목",
            writer: "관리자",
            wrtDate: "2018-11-05"
        }]


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
                    data={lists}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}/>
            </div>
        );
    }
}

export default ListItem2;