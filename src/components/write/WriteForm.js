import React from "react";
import './WriteForm.css';

const WriteForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="write-button" onClick={onCreate}>
            작성
        </div>
    </div>
  );
};

export default WriteForm;