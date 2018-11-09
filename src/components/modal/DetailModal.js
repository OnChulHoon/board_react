import React, { Component } from 'react';
import Modal from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
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

        console.log(contentLists);

        return (
            <div style={styles}>
                <h4>테스트 버전</h4>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                    <p>
                        {this.props.contentLists}
                    </p>
                </Modal>
            </div>
        );
    }
}

export default DetailModal;
