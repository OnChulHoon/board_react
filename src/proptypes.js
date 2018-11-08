//import React from 'react';
import BoardList2 from "./components/list/BoardList2";
import ReactTable from "react-table";

BoardList2.propTypes = {
    propTypes : {
        boardNo : ReactTable.PropTypes.number,
        title : ReactTable.PropTypes.string,
        writer : ReactTable.PropTypes.string,
        content : ReactTable.PropTypes.string,
        wrtDate : ReactTable.PropTypes.dateTime
    }
}