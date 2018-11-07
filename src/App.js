import React, {Component, Fragment} from 'react';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
import BoardList2 from "./components/list/BoardList2";
//import ListItem2 from "./components/list/ListItem2";
import DetailModal from "./components/modal/DetailModal";

class App extends Component {


    id = 1

    state = {
        input: '',
        textarea: '',
        board_lists: [
            { id: 0, boardNo: 1, title: "app-글제목", writer: "app-관리자", content: "app-내용", wrtDate: "app-2018-11-07" }
        ]
    }

    // componentDidMount(){
    //     console.log('componentDidMount');
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleCreate = (e) => {
        console.log(e);
        const { board_lists } = this.state;

        this.setState({

            board_lists: board_lists.concat({
                //boardNo: this.state.lists.boardNo + 1,
                id: this.id++,
                [e.target.name] : e.target.value
            })
        });
        console.log(board_lists);
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
                {/*<ListItem2 lists={this.state.lists} />*/}
            </BoardVer001>

            <div align="center">
                <br/>
                {JSON.stringify(board_lists)}
                <h4>상세보기 모달</h4>
            </div>
            <DetailModal/>
        </Fragment>

    );
  }
}

export default App;
