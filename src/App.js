import React, { Component } from 'react';
import BoardVer001 from './components/BoardVer001';
import WriteForm from "./components/write/WriteForm";
import BoardList from "./components/list/BoardList";

class App extends Component {
  render() {
    return (
        <BoardVer001 form={<WriteForm/>}>
            <div align="center">
                <h4>목록 표시 부분 - Test</h4>
            </div>
            <BoardList/>
        </BoardVer001>
    );
  }
}

export default App;
