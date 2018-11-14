import React from "react";
import './WriteForm.css';

const inputStyles ={
    marginLeft: "10px",
}

const textareaStyles ={
    marginLeft: "50px",
    fontSize: "20px"
}


const WriteForm = ({title, writer, wrtDate, content, onChange, onCreate, onModify, onCancel, editing, selectedRowData}) => {

    return (
        <div className="form">
            <form id="boardWriteForm">
                <div>
                    <label>
                        제&nbsp;&nbsp;목&nbsp;&nbsp;:
                        <input type="text" name="title" value={title} onChange={onChange} style={inputStyles}/>
                    </label>
                </div>
                <div>
                    <label>
                        작성자 :
                        <input type="text" name="writer" value={writer} onChange={onChange} style={inputStyles} />
                    </label>
                </div>
                <div>
                    <label>
                        작성일 :
                        <input id="wrtDate" type="date" name="wrtDate" onChange={onChange} defaultValue={wrtDate} style={inputStyles}/>
                    </label>
                </div>
                <div>
                    <label>
                        내&nbsp;&nbsp;용&nbsp;&nbsp;:
                        <br/>
                        <textarea cols={45} rows={5} name="content" value={content} onChange={onChange} style={textareaStyles}/>

                    </label>
                </div>
                <br/>
                <div>
                    <span className="write-button" onClick={onCreate}>등록</span>
                    <span className="modify-button" onClick={onModify}>수정</span>
                    <span className="cancel-button" onClick={onCancel}>취소</span>
                </div>

            </form>
        </div>
    );

    if(editing){
        return (
            <div className="form">
                <form id="boardWriteForm">
                    <div>
                        <label>
                            제&nbsp;&nbsp;목&nbsp;&nbsp;:
                            <input type="text" name="title" value={selectedRowData.title} onChange={onChange} style={inputStyles}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            작성자 :
                            <input type="text" name="writer" value={selectedRowData.writer} onChange={onChange} style={inputStyles} />
                        </label>
                    </div>
                    <div>
                        <label>
                            작성일 :
                            <input id="wrtDate" type="date" name="wrtDate" onChange={onChange} defaultValue={selectedRowData.wrtDate} style={inputStyles}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            내&nbsp;&nbsp;용&nbsp;&nbsp;:
                            <br/>
                            <textarea cols={45} rows={5} name="content" value={selectedRowData.content} onChange={onChange} style={textareaStyles}/>
                        </label>
                    </div>
                    <br/>
                    <div>
                        <span className="modify-button" onClick={onModify}>수정</span>
                        <span className="cancel-button" onClick={onCancel}>취소</span>
                    </div>

                </form>
            </div>
        );
    }
};

export default WriteForm;