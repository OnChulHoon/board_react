import React from "react";
import './WriteForm.css';


const WriteForm = ({title, writer, wrtDate, content, onChange, onCreate, onClick }) => {

    return (
        <div className="form">
            <form>
                <div>
                    <label>
                        제목 :
                        <input type="text" name="title" value={title} onChange={onChange} onClick={onClick} />
                    </label>
                </div>
                <div>
                    <label>
                        작성자 :
                        <input type="text" name="writer" value={writer} onChange={onChange} />
                    </label>
                </div>
                <div>
                    <label>
                        작성일 :
                        <input id="wrtDate" type="date" name="wrtDate" onChange={onChange} defaultValue={wrtDate} />
                    </label>
                </div>
                <div>
                    <label>
                        내용 :
                        <textarea name="content" value={content} onChange={onChange} />
                    </label>
                </div>

                <div className="write-button" onClick={onCreate}>
                    작성
                </div>
            </form>
        </div>
    );
};

export default WriteForm;