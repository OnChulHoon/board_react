//import React from 'react';
import BoardList from "./components/list/BoardList";
import ReactTable from "react-table";

BoardList.propTypes = {
    propTypes : {
        boardNo : ReactTable.PropTypes.number,
        title : ReactTable.PropTypes.string,
        writer : ReactTable.PropTypes.string,
        content : ReactTable.PropTypes.string,
        wrtDate : ReactTable.PropTypes.dateTime
    }
}