import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, onClick, largeImageURL }) => {
    return (
        <li className={css.imageGalleryItem} >
            <img className={css.imageGalleryItemImage} onClick={() => onClick(largeImageURL)} src={src} alt="search word" />
        </li>
    )
}

export default ImageGalleryItem;