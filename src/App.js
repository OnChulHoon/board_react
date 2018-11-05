import React, {Component, Fragment} from 'react';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
//import BoardList from "./components/list/BoardList";
import BoardList2 from "./components/list/BoardList2";
import DetailModal from "./components/modal/DetailModal";


class App extends Component {

    // 초기 데이터 id값의 +1한다.
    // 새로운 데이터 값은 초기 데이터 다음에 표시되도록 하기위해서 설정한다.
    id = 1
    // 초기 데이터 값을 설정한다.

    state = {
        input: '',
        /*
        lists: [
            { id: 0, title: '목록 표시 테스트', checked: false, open: false }
        ],
        */
        // BoadList2 버전
        lists: [
            { boardNo: 1, title: "글제목", writer: "관리자", wrtDate: "2018-11-05" }
        ],
        open : false
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 다음 바뀔 값
        });
    }

    handleCreate = () => {
        const { input, lists } = this.state;
        this.setState({
            input: '', // input 내용을 비운다.
            // concat 을 사용하여 배열에 추가
            lists: lists.concat({
                id: this.id++,
                title: input,
                checked: false
            })
        });
    }

    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }
/*

    handleToggle = (id) => {
        const { lists } = this.state;

        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = lists.findIndex(list => list.id === id);
        const selected = lists[index]; // 선택한 객체

        const nextLists = [...lists]; // 배열을 복사

        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        // 모달로 수정 및 삭제 구성시 수정 필요
        nextLists[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            lists: nextLists
        });
    }
*/

    handleRemove = (id) => {
        const { lists } = this.state;
        this.setState({
            lists: lists.filter(list => list.id !== id)
        });
    }

    onOpenModal = (id) => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { input, lists } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            // handleToggle,
            handleRemove,
            onOpenModal,
            // onCloseModal
        } = this;

    return (
        <Fragment>
            <BoardVer001 form={(
                <WriteForm
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />
            )}>
                <div align="center">
                    <h4>목록 표시 부분</h4>
                </div>
                <BoardList2 lists={lists} onClick={onOpenModal} onRemove={handleRemove}>

                </BoardList2>

            </BoardVer001>
            <div align="center">
                <h4>상세보기 모달</h4>
            </div>
            <DetailModal/>
        </Fragment>

    );
  }
}

export default App;
