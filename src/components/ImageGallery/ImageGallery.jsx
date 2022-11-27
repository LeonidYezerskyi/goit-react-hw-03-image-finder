import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos }) => {
    return (
        <ul className={css.imageGallery}>
            {photos.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id} src={webformatURL} src2={largeImageURL} id={id} />
            })}
        </ul>
    )
}

export default ImageGallery;