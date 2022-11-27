import React from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImageURL }) => {
    return (
        <div class={css.overlay}>
            <div class={css.modal}>
                <img src={largeImageURL} alt="Large" />
            </div>
        </div>
    )
}

export default Modal;