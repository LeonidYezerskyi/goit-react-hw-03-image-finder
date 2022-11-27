import React from 'react';
import css from './ImageGalleryItem';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
    return (
        <li className={css.galleryItem} key={id}>
            <img src={webformatURL} src2={largeImageURL} alt="search word" />
        </li>
    )
}

export default ImageGalleryItem;