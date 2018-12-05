import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
import BoardList from "./components/list/BoardList";


// const propTypes = {
//
// }
//
// const defalutProps = {
//
// }

class App extends Component {

    // 초기 state 설정 인덱스 및 글번호 값의 다음 값으로 지정한다.
    idx = 1
    boardNo = 2

    // 초기 state 값을 지정한다.
    constructor(props){
        super(props);
        this.state = {
            board_lists: [
                { idx: 0, boardNo: 1, title: "글제목", writer: "관리자", content: "내용", wrtDate: "2018-11-07" }
            ],
            editing: false,
            selectedRowIdx: -1,
            selectedRowData: [
                { idx: null, boardNo: null, title: null, writer: null, content: null, wrtDate: null }
            ],

        }
    }

    // 컴포넌트 렌더 후 동작한다.
    componentDidMount(){
        const loginAuth = this.props;

        if(loginAuth === true){
            // 컴포넌트 렌더 후에 state 값을 업데이트한다.
            this.setState({
                // 현재 시간의 날짜로 지정된 값을 불러와 지정한다.
                wrtDate : document.getElementById("wrtDate").value
            });
        }
    }

    // 입력란이 변경될 때마다 조회하여 state 값을 업데이트한다.
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        // 콘솔에서 데이터 확인용 로그 출력
        //console.log("[App] New State: ", this.state);
    }

    // 작성 버튼을 누르면 입력란에 입력된 데이터 값을 state에 지정한 맵 형식으로 업데이트한다.
    handleCreate = () => {

        const { board_lists, ...restState } = this.state;
        const formData = restState;

        // 복사 한 이유는 call by reference 때문에
        const newBoardLists = _.cloneDeep(board_lists);
        // const newBoardLists = this.state.board_lists;

        // 사본 데이터에 새로 입력된 데이터를 추가한다.
        //newBoardLists.push(formData);
        newBoardLists.push( {
            idx: this.idx++,
            boardNo: this.boardNo++,
            title: formData.title,
            writer: formData.writer,
            wrtDate: formData.wrtDate,
            content: formData.content
        } );

        // 콘솔에서 데이터 확인용 로그 출력
        //console.log( '[App] this.state.board_lists: ', this.state.board_lists );
        //console.log( '[App] newBoardLists: ', newBoardLists );

        // 원본 state 데이터에 새로 입력된 사본 데이터를 반영한다.
        this.setState( {
            board_lists: newBoardLists,
        } );
        // 입력폼의 입력란 값을 초기화한다.
        document.getElementById("insertForm").reset();
        // 등록 성공 메시지를 표시한다.
        alert("게시글 등록이 완료되었습니다.");
    }

    // 선택열 데이터 값으로 제어
    handleShowRowData = (selectedRowValue, rowIndex) => {
        // 콘솔에서 데이터 확인용 로그 출력
        //console.log("[App] selectedRowValue:", selectedRowValue);
        //console.log("[App] rowIndex:", rowIndex);

        const {editing} = this.state;

        this.setState({
            selectedRowData: selectedRowValue,
            editing: !editing,
            selectedRowIdx: rowIndex
        });
        // 콘솔에서 데이터 확인용 로그 출력
        console.log("[App] this.state.selectedRowIdx:", this.state.selectedRowIdx);
        //console.log("[App] this.state.selectedRowData:", this.state.selectedRowData);
    }

    // 수정한 데이터 값을 제어한다.
    handleModify = () => {
        // 선택한 열 데이터 값과 수정 상태 변경을 위한 state를 선언한다.
        const { selectedRowData, editing } = this.state;
        // 글 목록 데이터와 새로 입력된 데이터 값의 state를 선언한다.
        const { board_lists, ...restState } = this.state;
        // 선택된 열의 인덱스 값을 변수에 저장한다.
        const selectedRowIdx = this.state.selectedRowIdx;
        // 새로 입력된 값을 변수에 저장한다.
        const newFormData = restState;
        // state에 담긴 글 목록을 변수에 복사한다.
        let updateBoardLists = _.cloneDeep(board_lists);

        // 콘솔에서 데이터 확인용 로그 출력
        //console.log( '[App] selectedRowIdx: ', selectedRowIdx );
        //console.log( '[App] newFormData: ', newFormData );

        // 복사한 글 목록 데이터에 수정된 데이터를 반영한다.
        updateBoardLists.splice(selectedRowIdx, 1,
            {idx: selectedRowData.idx,
            boardNo: selectedRowData.boardNo,
            title: newFormData.title,
            writer: selectedRowData.writer,
            wrtDate: selectedRowData.wrtDate,
            content: newFormData.content})

        // 원본 state 데이터에 수정된 사본 데이터를 반영하고 수정 상태를 변경한다.
        this.setState( {
            board_lists: updateBoardLists,
            editing: !editing
        } );

        // 콘솔에서 데이터 확인용 로그 출력
        //console.log( '[App] this.state.board_lists: ', this.state.board_lists );

        // 입력폼의 입력란 값을 초기화한다.
        document.getElementById("insertForm").reset();
        // 수정 성공 메시지를 표시한다.
        alert("게시글 수정이 완료되었습니다.");
    }

    // 선택된 데이터를 삭제한다.
    handleRemove = (selectedRowIndex) => {
        // 콘솔에서 데이터 확인용 로그 출력
        //console.log("[App] i(row.index): ", i );
        //console.log("[App] this.state.board_lists: ", this.state.board_lists);

        // 현재 state에 담아있는 board_lists 값들을 참조하는 변수를 만든다.
        let board_lists_refresh = [...this.state.board_lists];

        // 선택한 행의 인덱스 값의 데이터를 제거한다.
        this.setState({
            ...board_lists_refresh.splice(selectedRowIndex, 1),
            board_lists: board_lists_refresh
        });

        // 콘솔에서 데이터 확인용 로그 출력
        //console.log('[App] let board_lists_refresh after splice: ', board_lists_refresh);
        alert("게시글이 삭제되었습니다.");

    }

    // 취소 버튼 이벤트를 제어한다.
    handleCancel= () => {
        // 입력폼의 입력란 값을 초기화한다.
        document.getElementById("insertForm").reset();
        let newState = _.cloneDeep(this.state);

        this.setState({
            state: {title: "", writer: "", content: "", wrtDate: ""}
        })
        console.log("newState : ", newState.title);
        // 취소 완료 메시지를 표시한다.
        alert("입력이 취소되었습니다.");
    }

    // 수정 취소 버튼 이벤트를 제어한다.
    handleCancelByModify= () => {
        // 수정 상태를 변경한다.
        const {editing} = this.state
        this.setState({
            editing : !editing
        })
        // 수정 입력폼의 입력란 값을 초기화한다.
        document.getElementById("insertForm").reset();
        // 취소 완료 메시지를 표시한다.
        alert("수정 입력이 취소되었습니다.");
    }

    render() {
        const { board_lists } = this.state;

        const {
            handleCreate,
            handleChange,
            handleModify,
            handleRemove,
            handleCancel,
            handleShowRowData,
            handleCancelByModify
        } = this;

        // 현재 시간으로 날짜를 설정하여 저장한다.
        const currDate = new Date();
        currDate.setDate(currDate.getDate());
        const defDate = currDate.toISOString().substr(0,10);

        let root = this.props;
        const loginAuth = root.route.loginAuth;

    return (
        loginAuth ?
        <Fragment>
            <BoardVer001 form={(
                // 게시글 작성폼을 표시한다.
                <form id="insertForm">
                    <WriteForm
                        wrtDate={defDate}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        onModify={handleModify}
                        onCancel={handleCancel}
                        onCancelByModify={handleCancelByModify}
                        editing={this.state.editing}
                        selectedRowData={this.state.selectedRowData}
                    />
                </form>
            )}>
                <div align="right">
                    <button>로그아웃</button>
                </div>
                <br/>
               {/* 게시글 목록을 표시한다.*/}
                <div align="center">
                    <h2>게시글 목록</h2>
                </div>
                <br/>

                <BoardList lists={board_lists} onRemove={handleRemove} showRowData={handleShowRowData}/>

            </BoardVer001>
        </Fragment>
            : <div>
                {alert("회원정보가 없습니다. 로그인 후 이용해주세요.")}
                {window.location.href = "/login"}
                </div>

    );
  }
}

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;

export default App;
