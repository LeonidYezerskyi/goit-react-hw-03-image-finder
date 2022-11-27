import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
    return (
        <li className={css.imageGalleryItem} key={id}>
            <img className={css.imageGalleryItemImage} src={webformatURL} src2={largeImageURL} alt="search word" />
        </li>
    )
}

export default ImageGalleryItem;