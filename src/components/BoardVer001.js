import React from "react";
import './BoardVer001.css';

const BoardVer001 = ({form, children}) => {
    return (
        <main className="board-section">
            <div className="title">
                BOARD
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="board-list-wrapper">
                { children }
            </section>
        </main>
    );
};

export default BoardVer001;

