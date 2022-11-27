import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery'

const ImageGallery = (names) => {
    return (
        <ul className={css.gallery}>
            {names.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id} src={webformatURL} src2={largeImageURL} id={id} />
            })}
        </ul>
    )
}

export default ImageGallery;