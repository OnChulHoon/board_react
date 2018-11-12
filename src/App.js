import React, {Component, Fragment} from 'react';
import _ from 'lodash';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
import BoardList2 from "./components/list/BoardList2";
import DetailModal from "./components/modal/DetailModal";
//import BoardDetail from "../detail/BoardDetail";

class App extends Component {


    idx = 1

    boardNo = 2

    constructor(){
        super();

        this.state = {

            board_lists: [
                { idx: 0, boardNo: 1, title: "글제목", writer: "관리자", content: "내용", wrtDate: "2018-11-07" }
            ]
        }
    }

    componentDidMount(){
        this.setState({
            wrtDate : document.getElementById("wrtDate").value
        });
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        });
        console.log("New State: ", this.state);
    }

    handleCreate = () => {

        const { board_lists, ...restState } = this.state;

        const formData = restState;

        // 복사 한 이유는 call by reference 때문에
        const newBoardLists = _.cloneDeep(board_lists);
        // const newBoardLists = this.state.board_lists;

        //newBoardLists.push(formData);
        newBoardLists.push( {idx: this.idx++, boardNo: this.boardNo++,
            title: formData.title,
            writer: formData.writer,
            wrtDate: formData.wrtDate,
            content: formData.content
        } );

        console.log( 'this.state.board_lists', this.state.board_lists );
        console.log( 'newBoardLists', newBoardLists );

        this.setState( {
            board_lists: newBoardLists
        } );
    }

    handleClick = () =>{

        console.log(this.props.content);
    }

    HandleShowModal = () => {

        console.log('Modal Call!!');
    }

    myCallback = (dataFromChild) => {

    }

    getIndexNum = (indexNum) => {

        this.setState({

            index : indexNum

        });

        console.log("indexNum :", this.state.index);
    }

    render() {
        const { board_lists } = this.state;
        const {
            handleCreate,
            handleChange,
            handleClick,
            HandleShowModal,
            //getIndexNum
        } = this;

        const currDate = new Date();
        currDate.setDate(currDate.getDate());
        const defDate = currDate.toISOString().substr(0,10);



    return (
        <Fragment>

            <BoardVer001 form={(
                    <WriteForm
                        wrtDate={defDate}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        onClick={handleClick}
                    />
            )}>

                <div align="center">
                    <h4>목록 표시 부분</h4>
                </div>

                <BoardList2 lists={board_lists} onClick={HandleShowModal} />

            </BoardVer001>

            <div align="center">
                <br/>
                {JSON.stringify(board_lists)}
                <br/>
                <h4>상세보기 모달</h4>
            </div>
            <DetailModal contentLists={board_lists[0]}/>
        </Fragment>

    );
  }
}

export default App;
