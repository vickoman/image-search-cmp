import React from 'react'
import ImageCard from '../ImageCard';

const ImagesList = ({images}) => {

    return (
        <div className="grid grid-cols-3 gap-2 mt-4">
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    )
}
export default ImagesList;
