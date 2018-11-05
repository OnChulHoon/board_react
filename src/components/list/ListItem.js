import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { title, checked, id, onToggle, onRemove, onOpenModal } = this.props;

        return (
            <div className="list-item" onClick={() => onOpenModal(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`list-text ${checked && 'checked'}`}>
                    <div>{title}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default ListItem;