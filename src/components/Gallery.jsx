import React from 'react'
import { Carousel } from '3d-react-carousal';

export default function Gallery() {

    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/300/?random" alt="1" />
    ]

    return (
        <div className="gallery">
            <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
    )
}
