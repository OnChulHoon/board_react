import React, {Component, Fragment} from 'react';
import _ from 'lodash';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
import BoardList2 from "./components/list/BoardList2";
import DetailModal from "./components/modal/DetailModal";

class App extends Component {


    id = 1

    constructor(){
        super();

        this.state = {

            board_lists: [
                { id: 0, boardNo: 1, title: "글제목1", writer: "관리자1", content: "내용1", wrtDate: "2018-11-07" }
            ]
        }
    }


    // componentDidMount(){
    //     console.log('componentDidMount');
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log("New State: ", this.state);
    }

    handleCreate = (e) => {

        const { board_lists, ...restState } = this.state;

        const formData = restState;

        // 복사 한 이유는 call by reference 때문에
        const newBoardLists = _.cloneDeep(board_lists);
        // const newBoardLists = this.state.board_lists;
        newBoardLists.push( formData );
        //newBoardLists.push({boardNo : this.state.boardNo + 1});

        console.log( 'this.state.board_lists', this.state.board_lists );
        console.log( 'newBoardLists', newBoardLists );

        this.setState( {
            board_lists: newBoardLists,
        } );


        // console.log(e.target.title.value);
        // const { board_lists } = this.state;
        //
        // this.setState({
        //
        //     board_lists: board_lists.concat({
        //         //boardNo: this.state.lists.boardNo + 1,
        //         id: this.id++,
        //         //title: e.target.title.value
        //         [e.target.name] : e.target.value
        //     })
        // });
        // console.log(board_lists);
    }


    render() {
        const { board_lists } = this.state;
        const {
            handleCreate,
            handleChange
        } = this;

    return (
        <Fragment>
            <BoardVer001 form={(
                    <WriteForm
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
            )}>

                <div align="center">
                    <h4>목록 표시 부분</h4>
                </div>

                <BoardList2 lists={board_lists} />
            </BoardVer001>

            <div align="center">
                <br/>
                {JSON.stringify(board_lists)}
                <br/>
                <h4>상세보기 모달</h4>
            </div>
            <DetailModal/>
        </Fragment>

    );
  }
}

export default App;
