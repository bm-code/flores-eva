import React from 'react';
import imgCabecera from '../assets/img-home.jpg';
import imgTest from '../assets/img-test.svg';
import imgTest2 from '../assets/img-test2.svg';
import imgTest3 from '../assets/img-test3.svg';
import imgTest4 from '../assets/img-test4.svg';
import imgTest5 from '../assets/img-test5.svg';
import { BsArrowRight } from 'react-icons/bs'
import { TbLocation, TbDeviceMobile, TbMail } from 'react-icons/tb';
import Gallery from '../components/Gallery';
import './Home.css'

export default function Home() {
    return (
        <>
            <section className="home__cabecera">
                <h1>Flores Eva</h1>
                <div className="home__img">
                    <img src={imgCabecera} alt="imagen de cabecera de la página principal. Ramo de flores para regalar." />
                </div>
            </section>

            <section className="servicios">
                <div className="servicios__flores">
                    <h2>Servicios</h2>
                    <div className="servicios__flores-desc">
                        <h3>Ramos de flores</h3>
                        <div className="ramos-list">
                            <ul>
                                <li className="ramos-list__item"><a href="">Ramos de regalo </a><BsArrowRight /></li>
                                <li className="ramos-list__item"><a href="">Ramos de regalo </a><BsArrowRight /></li>
                                <li className="ramos-list__item"><a href="">Ramos de regalo </a><BsArrowRight /></li>
                                <li className="ramos-list__item"><a href="">Ramos de regalo </a><BsArrowRight /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="servicios__flores-img">
                        <img src={imgTest} alt="" /><img src={imgTest2} alt="" />
                    </div>
                </div>

                <div className="servicios__plantas">
                    <div className="servicios__plantas-img">
                        <img src={imgTest2} alt="" /><img src={imgTest} alt="" />
                    </div>
                    <div className="servicios__plantas-desc">
                        <h3>Plantas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium placeat vero nulla accusamus iusto. Corrupti quae accusantium harum nihil culpa?</p>
                    </div>
                </div>

                <div className="servicios__funerarios">
                    <div className="servicios__funerarios-left">
                        <img src={imgTest3} alt="" />
                    </div>
                    <div className="servicios__funerarios-center">
                        <h3>Funerarios</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium placeat vero nulla accusamus iusto. Corrupti quae accusantium harum nihil culpa?</p>
                        <img src={imgTest4} alt="" />
                    </div>
                    <div className="servicios__funerarios-right">
                        <img src={imgTest5} alt="" />
                    </div>
                </div>
            </section>
            <section className="gallery">
                <Gallery />
            </section>
            <section className="contact">
                <h3>Contacta con nosotros</h3>
                <div className="contact__card tienda1">
                    <div className="map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9684261913458!2d-4.64800782440376!3d37.579361172035384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d1482aa3c4abb%3A0xbb0259c66dc97e7a!2sFlores%20Eva%20S.L.!5e0!3m2!1ses!2ses!4v1671960949565!5m2!1ses!2ses" width="300" height="150" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <ul>
                        <li><TbLocation /> Calle Ciudad de Sevilla Nº 2</li>
                        <li><TbDeviceMobile /> 957 651 373</li>
                        <li><TbMail /> info@floreseva.com</li>
                    </ul>
                </div>
                <div className="contact__card tienda2">
                    <div className="map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5291380252847!2d-4.64023972440323!3d37.589703972032545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d137885f62285%3A0x88e45dd7914719d7!2sFlores%20Eva%20S.L.!5e0!3m2!1ses!2ses!4v1671961423768!5m2!1ses!2ses" width="300" height="150" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <ul>
                        <li><TbLocation /> Avda de María Auxiliadora Nº 18</li>
                        <li><TbDeviceMobile /> 957 567 022</li>
                        <li><TbMail /> info@floreseva.com</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
