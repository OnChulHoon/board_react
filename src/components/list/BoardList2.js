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
            accessor: 'title',
        },{
            Header: '작성자',
            accessor: 'writer'
        },{
            Header: '작성일',
            accessor: 'wrtDate'
        },{
            Header: '내용 보기',
            accessor: 'detailBtn',
            // Cell: props => {
            //     const {
            //         columnProps: { rest: { showModalComponent } },
            //         content
            //     }= props;
            //
            //     return (
            //         <div>
            //             <button
            //                 onClick={e => showModalComponent({content: content }, e)}
            //             >
            //                 내용 보기 {props.value}
            //             </button>
            //         </div>
            //     );
            // }

        }]

        const { lists } = this.props;

        console.log(lists);

        return (
            <div>
                <ReactTable
                    //indexKey={this.props.lists.idx}
                    columns={columns}
                    data={this.props.lists}
                    sorted={[
                        {
                            idx: 'lastName',
                            desc: true
                        }
                    ]}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}
                   /* getTrProps={(state, rowInfo, column, instance) =>({
                        onClick: e => console.log('clicked!!')
                    })}*/
                    />
            </div>
        );
    }
}

export default BoardList2;