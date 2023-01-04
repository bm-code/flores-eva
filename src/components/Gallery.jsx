import React from 'react'
import { Carousel } from '3d-react-carousal';
import galeriaTest from '../assets/galeria.jpg'

export default function Gallery() {

    let slides = [
        <img src={galeriaTest} alt="1" />,
        <img src={galeriaTest} alt="1" />,
        <img src={galeriaTest} alt="1" />,
        <img src={galeriaTest} alt="1" />,
        <img src={galeriaTest} alt="1" />
    ]

    return (
        <div className="gallery__slides">
            <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
    )
}
