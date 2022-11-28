import React from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImage }) => {
    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <img src={largeImage} alt="Large" />
            </div>
        </div>
    )
}

export default Modal;