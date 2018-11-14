import React, {Component, Fragment} from 'react';
import _ from 'lodash';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
import BoardList2 from "./components/list/BoardList2";
//import DetailModal from "./components/modal/DetailModal";
//import BoardDetail from "../detail/BoardDetail";

class App extends Component {

    // 초기 state 설정 인덱스 및 글번호 값의 다음 값으로 지정한다.
    idx = 1
    boardNo = 2

    // 초기 state 값을 지정한다.
    constructor(){
        super();
        this.state = {
            listDataFromChild: null,
            board_lists: [
                { idx: 0, boardNo: 1, title: "글제목", writer: "관리자", content: "내용", wrtDate: "2018-11-07" }
            ],
            rows: null
        }
    }

    // 페이지 렌더 후에 state 값을 업데이트한다.
    componentDidMount(){
        this.setState({
            // 현재 시간의 날짜로 지정된 값을 불러와 지정한다.
            wrtDate : document.getElementById("wrtDate").value
        });
    }

    // 입력란이 변경될 때마다 조회하여 state 값을 업데이트한다.
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        // 콘솔에서 데이터 확인용 로그 출력
        console.log("[App] New State: ", this.state);
    }

    // 작성 버튼을 누르면 입력란에 입력된 데이터 값을 state에 지정한 맵 형식으로 업데이트한다.
    handleCreate = () => {

        const { board_lists, ...restState } = this.state;
        const formData = restState;

        // 복사 한 이유는 call by reference 때문에
        const newBoardLists = _.cloneDeep(board_lists);
        // const newBoardLists = this.state.board_lists;

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
        console.log( '[App] this.state.board_lists: ', this.state.board_lists );
        console.log( '[App] newBoardLists: ', newBoardLists );

        this.setState( {
            board_lists: newBoardLists,
        } );
        // 입력폼의 입력란 값을 초기화한다.
        document.getElementById("boardWriteForm").reset();
        // 등록 성공 메시지를 표시한다.
        alert("게시글 등록이 완료되었습니다.");
    }
    // 수정한 데이터 값을 제어한다.
    handleModify = () => {

    }
    // 선택된 데이터를 삭제한다.
    handleRemove = (i) => {
        // 콘솔에서 데이터 확인용 로그 출력
        console.log("[App] i(row.index): ", i );
        console.log('[App] this.state.board_lists: ', this.state.board_lists);
        // 현재 state에 담아있는 board_lists 값들을 참조하는 변수를 만든다.
        let board_lists_refresh = [...this.state.board_lists];
        // 선택한 행의 인덱스 값의 데이터를 제거한다.
        this.setState({
            ...board_lists_refresh.splice(i, 1),
            board_lists: board_lists_refresh
        });
        // 콘솔에서 데이터 확인용 로그 출력
        console.log('[App] let board_lists_refresh after splice: ', board_lists_refresh);
        alert("게시글이 삭제되었습니다.");

    }
    // 취소 버튼 이벤트를 제어한다.
    handleCancel= () => {
        // 입력폼의 입력란 값을 초기화한다.
        document.getElementById("boardWriteForm").reset();
        // 취소 완료 메시지를 표시한다.
        alert("입력이 취소되었습니다.");
    }

    // myCallback = (dataFromChild, row) => {
    //     console.log( "[App] dataFromChild_first: ", dataFromChild);
    //     let board_lists = [...this.state.board_lists]
    //     board_lists.splice(0, dataFromChild)
    //     board_lists.splice(dataFromChild +1, dataFromChild.length)
    //     this.setState({
    //         board_lists: board_lists
    //     })
    //     console.log( "[App] row: ", row);
    //     //console.log( "[App] state.rows.i: ", this.state.rows);
    //     console.log( "[App] dataFromChild_second: ", dataFromChild.index);
    //     alert("[App] 삭제 이벤트 발생!!");
    //
    //     //this.setState({ listDataFromChild: dataFromChild });
    // }

    render() {
        const { board_lists } = this.state;
        const {
            handleCreate,
            handleChange,
            handleModify,
            handleRemove,
            handleCancel
        } = this;

        // 현재 시간으로 날짜를 설정하여 저장한다.
        const currDate = new Date();
        currDate.setDate(currDate.getDate());
        const defDate = currDate.toISOString().substr(0,10);

    return (
        <Fragment>

            <BoardVer001 form={(
                // 게시글 작성폼을 표시한다.
                    <WriteForm
                        wrtDate={defDate}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        onModify={handleModify}
                        onCancel={handleCancel}
                    />
            )}>
               {/* 게시글 목록을 표시한다.*/}
                <div align="center">
                    <h2>게시글 목록</h2>
                </div>

                <BoardList2 lists={board_lists} onRemove={handleRemove} >

                </BoardList2>

            </BoardVer001>

            {/* 입력값 확인 및 테스트용 태그
            <div align="center">
                <br/>
                {JSON.stringify(board_lists)}
                <br/>
                <h4>상세보기 모달</h4>
                <DetailModal contentLists={board_lists[0]}/>
            </div>
            */}

        </Fragment>

    );
  }
}

export default App;
