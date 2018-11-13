import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
//import DetailModal from "../modal/DetailModal";
import BoardDetail from "../detail/BoardDetail";


class BoardList2 extends Component{


    // 필요한 기본 state 값을 설정한다.
    constructor(props){
        super(props)
        this.state = {
            pageSize: 5,
            filter: false
        }
    }

    // 검색 필터 이벤트를 제어한다.
    handleFilterChange = (column, value) => {
        this.setState({
            pageSize: 10
        })
    }


    render(){

        // 목록에 표시할 다른 컴퍼넌트를 선택한 행의 값을 보내고 호출한다.
        const subComponentMapper = row => {
            return (
                <div>
                    <BoardDetail contentLists={row.original}/>
                </div>
            );
        };

        // 콘솔에서 데이터 확인용 로그 출력
        console.log( "[BoardList2]props.content: ", this.props.lists);

        // 열 데이터의 라벨을 지정한다.
        const columns = [{
            Header: '글번호',
            accessor: 'boardNo',
            // 행에 표시할 사용자 정의 태그와 표시할 데이터 값을 설정한다.
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

        }]

        return (
            <div>
                <ReactTable
                    // 열 데이터의 라벨을 설정한다.
                    columns={columns}
                    // 행에 표시할 데이터값을 성정한다.
                    data={this.props.lists}
                    // 내림차수 또는 오름차순으로 목록을 정렬한다.
                    sorted={[
                        {
                            idx: 'lastName',
                            desc: true
                        }
                    ]}
                    // 한 페이지에 들어갈 목록 갯수의 기본값을 정한다.
                    defaultPageSize={3}
                    // 페이지 표시할 목록 갯수를 선택할 수 있는 값을 정한다.
                    pageSizeOptions={[3, 6]}
                    // 검색을 위한 필터를 설정한다.
                    filterable={true}
                    onFilteredChange={this.handleFilterChange}
                    // 다른 컨퍼넌트를 호출하여 목록에 표시하는 기능을 한다.
                    SubComponent = {subComponentMapper}


                    // React-Table 라이브러리에서 td 테그의 행 데이터를 조회하는 기능을 한다.
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