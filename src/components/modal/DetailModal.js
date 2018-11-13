import React, { Component } from 'react';
import Modal from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "left",
    paddingLeft: "100px",
};

class DetailModal extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        const { contentLists } = this.props;

        console.log("[DetailModal]contentLists : ", contentLists);
        console.log("[DetailModal]contentLists.row.index : ", contentLists.index);
        console.log("[DetailModal]contentLists.original : ", contentLists.title);


        return (
            <div style={styles}>
                <h3>Modal 호출</h3>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>{this.props.contentLists.title}</h2>
                    <p>
                        {this.props.contentLists.content}
                    </p>
                </Modal>
            </div>
        );
    }
}

export default DetailModal;
