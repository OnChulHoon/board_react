import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import DetailModal from "../modal/DetailModal";
//import BoardDetail from "../detail/BoardDetail";


class BoardList2 extends Component{


    constructor(props){
        super(props)
        this.state = {
            pageSize: 5,
            filter: false,
            selected: -1,
            open: false
        }
    }


    handleFilterChange = (column, value) => {
        this.setState({
            pageSize: 10
        })
        console.log("value : ", value)
    }




    render(){

        const subComponentMapper = row => {
            return (
                <div>
                    <DetailModal contentLists={row}/>
                </div>
            );
        };


        console.log( "props.content: ", this.props.lists);

        const columns = [{
            Header: '글번호',
            accessor: 'boardNo',
            Cell: props => <span className = 'number'> {
                props.value
            } </span>
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
            Header: '삭제',
            accessor: 'delete',
            Cell: row => (
                <div>
                    <button row={row}>삭제하기</button>
                </div>
            )

        },{
            Header: '내용 보기',
            accessor: 'content',



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
            //                 내용 보기 {props.content}
            //             </button>
            //         </div>
            //     );
            // }

        }]

        //const { lists } = this.props;

        //console.log(lists);

        //const onRemove = this.props;

        return (
            <div>
                <ReactTable
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
                    filterable={true}
                    onFilteredChange={this.handleFilterChange}
                    SubComponent = {subComponentMapper}

                    // getTdProps={(state, rowInfo, column, instance, idxNum) => {
                    //     return {
                    //
                    //     onClick : (e, handleOriginal) => {
                    //         this.setState({
                    //            selected: rowInfo.index
                    //         });
                    //
                    //             console.log("A Td Element was clicked!");
                    //             console.log("it produced this event:", e);
                    //             console.log("It was in this column:", column);
                    //             console.log("It was in this row:", rowInfo);
                    //             console.log("It was in this table instance:", instance);
                    //
                    //             console.log("rowInfo.index : ", rowInfo.index);
                    //
                    //             console.log("idxNumOrigin : ", idxNum);
                    //
                    //             idxNum = rowInfo.index;
                    //
                    //              // this.setState ({
                    //              //            tempFunc : rowInfo.index
                    //              //        });
                    //
                    //              console.log("idxNum : ", idxNum);
                    //
                    //              console.log("selected : ", this.state.selected);
                    //
                    //
                    //             if (handleOriginal) {
                    //                 handleOriginal();
                    //             }
                    //         }
                    //
                    //
                    //
                    //     };
                    // }}
                    />
            </div>
        );
    }
}

export default BoardList2;