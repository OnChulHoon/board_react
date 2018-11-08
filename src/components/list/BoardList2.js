import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class BoardList2 extends Component{

    render(){

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

        const { lists } = this.props;

        console.log(lists);

        return (
            <div>
                <ReactTable
                    columns={columns}
                    data={this.props.lists}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}/>
            </div>
        );
    }
}

export default BoardList2;