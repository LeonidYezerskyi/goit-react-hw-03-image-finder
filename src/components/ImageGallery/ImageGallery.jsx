import React from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onClick }) => {
    return (
        <ul className={css.imageGallery}>
            {photos.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem onClick={onClick} key={id} src={webformatURL} largeImageURL={largeImageURL} id={id} />
            })}
        </ul>
    )
}

export default ImageGallery;