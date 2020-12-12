import React, { useEffect, useRef, useState } from 'react'

const ImageCard = ({ image }) => {
    const { urls, description } =  image;
    const [spans, setSpans] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        const handleSpan = () => {
            const height = imageRef.current.clientHeight;
            const spans = Math.ceil(height / 10);
            setSpans(spans);
        }

        imageRef.current.addEventListener('load', handleSpan);
    }, []);
    return (
        <div style={{ gridRowEnd: `span ${spans}`}}>
            <img src={urls.regular} ref={imageRef} alt={description}/>
        </div>
    )
}
export default ImageCard;
