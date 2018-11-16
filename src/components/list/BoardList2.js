import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import BoardDetail from "../detail/BoardDetail";

const styles = {
    textAlign: "center",

};

class BoardList2 extends Component{

    // 필요한 기본 state 값을 설정한다.
    constructor(props2){
        super(props2)
        this.state = {
            pageSize: 5,
            filter: false,
            rows: this.props.lists
        }
    }

    // 검색 필터 이벤트를 제어한다.
    handleFilterChange = (column, value) => {
        this.setState({
            pageSize: 10
        })
    }

    render(){

        // 목록에 표시할 다른 컴포넌트를 선택한 행의 값을 보내고 호출한다.
        const subComponentMapper = row => {
            return (
                <div>
                    <BoardDetail selectedRow={row.original} onRemove={this.props.onRemove}/>
                </div>
            );
        };

        // 콘솔에서 데이터 확인용 로그 출력
        //console.log( "[BoardList2] props.lists: ", this.props.lists);

        // 열 데이터의 라벨을 지정한다.
        const columns = [{
            Header: '글번호',
            accessor: 'boardNo',
            // 행에 표시할 사용자 정의 태그와 표시할 데이터 값을 설정한다.
            Cell: props =>
                <div style={styles}>
                    <span className = 'number'> {
                        props.value
                    } </span>
                </div>
        },{
            Header: '제목',
            accessor: 'title',
        },{
            Header: '작성자',
            accessor: 'writer',
            Cell: props =>
                <div style={styles}>
                    <span className = 'text'> {
                        props.value
                    } </span>
                </div>
        },{
            Header: '작성일',
            accessor: 'wrtDate',
            Cell: props =>
                <div style={styles}>
                    <span className = 'text'> {
                        props.value
                    } </span>
                </div>
        },{
            Header: '수정/삭제',
            accessor: 'modifyAndDelete',
            Cell: row => (
                <div style={styles}>
                    {/*// 콘솔에서 데이터 확인용 로그 출력*/}
                    {/*{console.log("[BoardList2] selected.row: ", row)}*/}
                    {/*{console.log("[BoardList2] selected.row.original: ", row.original)}*/}
                    <button onClick={() => this.props.showRowData(row.original, row.index)}>수정</button>
                    <button onClick={() => {if(window.confirm("[ "+ row.original.boardNo + " ] 번 글을 삭제하시겠습니까?")){this.props.onRemove(row.index)};}}>삭제</button>
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
                    // 내림차순 또는 오름차순으로 목록을 정렬한다.
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

                    />
            </div>
        );
    }
}

export default BoardList2;