import React from "react";
import './WriteForm.css';

const inputStyles ={
    marginLeft: "10px",
}

const textareaStyles ={
    marginLeft: "50px",
    fontSize: "20px"
}


const WriteForm = ({title, writer, wrtDate, content, onChange, onCreate, onModify, onCancel, editing, selectedRowData, onCancelByModify,required}) => {
    if(!editing){
    return (
        <div className="form">
                <div>
                    <label>
                        제&nbsp;&nbsp;목&nbsp;&nbsp;:
                        <input type="text" name="title" value={title} onChange={onChange} style={inputStyles} required={required}/>
                    </label>
                </div>
                <div>
                    <label>
                        작성자 :
                        <input type="text" name="writer" value={writer} onChange={onChange} style={inputStyles} required={required}/>
                    </label>
                </div>
                <div>
                    <label>
                        작성일 :
                        <input id="wrtDate" type="date" name="wrtDate" onChange={onChange} defaultValue={wrtDate} style={inputStyles} required={required}/>
                    </label>
                </div>
                <div>
                    <label>
                        내&nbsp;&nbsp;용&nbsp;&nbsp;:
                        <br/>
                        <textarea cols={45} rows={5} name="content" value={content} onChange={onChange} style={textareaStyles} required={required}/>

                    </label>
                </div>
                <br/>
                <div>
                    <span className="write-button" onClick={onCreate}>등록</span>
                    <span className="cancel-button" onClick={onCancel}>취소</span>
                </div>

        </div>
    );

    }else {
        //const formTitle = selectedRowData.title ? selectedRowData.title : title;
        const rowTitle = selectedRowData.title;

        return (

            <div className="form">
                {/*{console.log("[WriteForm By Update] data read test: ", selectedRowData)}*/}
                    <div>
                        <label>
                            제&nbsp;&nbsp;목&nbsp;&nbsp;:
                            {console.log("[WriteForm By Update] data read test: ", selectedRowData.title)}
                            <input type="text" name="title" value={title} onChange={onChange} style={inputStyles} defaultValue={rowTitle}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            작성자 :
                            {console.log("[WriteForm By Update] data read test: ", selectedRowData.writer)}
                            <input type="text" name="writer" value={writer} onChange={onChange} style={inputStyles} defaultValue={selectedRowData.writer} readOnly/>
                        </label>
                    </div>
                    <div>
                        <label>
                            작성일 :
                            {console.log("[WriteForm By Update] data read test: ", selectedRowData.wrtDate)}
                            <input id="wrtDate" type="date" name="wrtDate" onChange={onChange} defaultValue={selectedRowData.wrtDate} style={inputStyles}  readOnly/>
                        </label>
                    </div>
                    <div>
                        <label>
                            내&nbsp;&nbsp;용&nbsp;&nbsp;:
                            <br/>
                            {console.log("[WriteForm By Update] data read test: ", selectedRowData.content)}
                            <textarea cols={45} rows={5} name="content"  value={content} onChange={onChange} style={textareaStyles} defaultValue={selectedRowData.content}/>
                        </label>
                    </div>
                    <br/>
                    <div>
                        <span className="modify-button" onClick={onModify}>수정</span>
                        <span className="cancel-button" onClick={onCancelByModify}>취소</span>
                    </div>

            </div>
        );
    }
};

export default WriteForm;