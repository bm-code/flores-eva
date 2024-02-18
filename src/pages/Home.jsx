import React from 'react';
import imgCabecera from '../assets/img-home.jpg';
import logo from '../assets/logo.svg';
import planta1 from '../assets/planta-1.jpg';
import planta2 from '../assets/planta-2.jpg';
import imgTest from '../assets/flores-1.jpg';
import imgTest2 from '../assets/flores-2.jpg';
import imgTest3 from '../assets/funerarios-1.jpg';
import imgTest4 from '../assets/funerarios-2.jpg';
import imgTest5 from '../assets/funerarios-3.jpg';
import bodas1 from '../assets/bodas-1.jpg'
import bodas2 from '../assets/bodas-2.jpg'
import { AiOutlineWhatsApp } from 'react-icons/ai';
// import { BsArrowRight } from 'react-icons/bs'
import { TbLocation, TbDeviceMobile, TbMail } from 'react-icons/tb';
// import Gallery from '../components/Gallery';
import './Home.css'
// import Form from '../components/Form';

export default function Home() {
    return (
        <>
            <section className="home__cabecera">
                {/* <h1>Flores Eva</h1> */}
                <img className='logo-home' src={logo} alt="Logo flores eva" />
                <div className="home__img">
                    <img loading="lazy" src={imgCabecera} alt="imagen de cabecera de la página principal. Ramo de flores para regalar." />
                </div>
            </section>

            <section className="servicios">
                <div className="container">
                    <h2>Servicios</h2>
                    <div className="servicios__flores">
                        <div className="servicios__flores-desc">
                            <div className="ramos-list">
                                <h3 className='title__after'>Ramos de flores</h3>
                                {/* <ul>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Rosas </a><BsArrowRight /></li>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Bouquet </a><BsArrowRight /></li>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Nacimientos </a><BsArrowRight /></li>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Ramos para cumpleaños </a><BsArrowRight /></li>
                                </ul> */}
                                <ul>
                                    <li className="ramos-list__item">Rosas</li>
                                    <li className="ramos-list__item">Bouquet</li>
                                    <li className="ramos-list__item">Nacimientos</li>
                                    <li className="ramos-list__item">Ramos para cumpleaños</li>
                                </ul>
                            </div>
                            <div className="servicios__flores-img">
                                <img loading="lazy" className='servicios__flores-img-1' src={imgTest} alt="" />
                                <img loading="lazy" className='servicios__flores-img-2' src={imgTest2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="servicios__plantas">
                        <div className="servicios__plantas-img">
                            <img loading="lazy" className='servicios__plantas-img-1' src={planta1} alt="" />
                            <img loading="lazy" className='servicios__plantas-img-2' src={planta2} alt="" />
                        </div>
                        <div className="servicios__plantas-desc">
                            <h3 className='title__before'>Plantas</h3>
                            <p>Viste tu casa con color y naturaleza y da un toque de vida a tu entorno. Aporta beneficios para la salud y decoración natural para el hogar.</p>
                            {/* <button className="btn">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="btn-text">Ver más</span>
                            </button> */}
                        </div>
                    </div>

                    <div className="servicios__flores">
                        <div className="servicios__flores-desc">
                            <div className="ramos-list">
                                <h3 className='title__after'>Flores para Bodas</h3>
                                {/* <ul>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Ramos de Novia </a><BsArrowRight /></li>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Decoración para la ceremonia </a><BsArrowRight /></li>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Decoración floral para el banquete </a><BsArrowRight /></li>
                                    <li className="ramos-list__item"><a href="https://floreseva.netlify.app/">Complementos </a><BsArrowRight /></li>
                                </ul> */}
                                <ul>
                                    <li className="ramos-list__item"> Ramos de Novia</li>
                                    <li className="ramos-list__item"> Decoración para la ceremonia</li>
                                    <li className="ramos-list__item"> Decoración floral para el banquete</li>
                                    <li className="ramos-list__item"> Complementos</li>
                                </ul>
                            </div>
                            <div className="servicios__flores-img">
                                <img loading="lazy" className='servicios__flores-img-1' src={bodas1} alt="" />
                                <img loading="lazy" className='servicios__flores-img-2' src={bodas2} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="servicios__funerarios">
                        <div className="servicios__funerarios-left">
                            <img loading="lazy" src={imgTest3} alt="" />
                        </div>
                        <div className="servicios__funerarios-center">
                            <h3 className='title__after'>Funerarios</h3>
                            <p>Puedes tener total confianza en Flores Eva para dar el pésame en estos momentos tan difíciles. Nuestros arreglos fúnebres tratan de reflejar de la mejor forma tus condolencias.</p>
                            {/* <button className="btn">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="btn-text">Ver más</span>
                            </button> */}
                            <img loading="lazy" src={imgTest4} alt="" />
                        </div>
                        <div className="servicios__funerarios-right">
                            <img loading="lazy" src={imgTest5} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="gallery">
                <h3>Nuestros productos</h3>
                <Gallery />
            </section> */}
            <section className="contact">
                <h3>Contacta con nosotros.</h3>
                <div className="cards-container">
                    <div className="contact__card tienda1">
                        <div className="map">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9684261913458!2d-4.64800782440376!3d37.579361172035384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d1482aa3c4abb%3A0xbb0259c66dc97e7a!2sFlores%20Eva%20S.L.!5e0!3m2!1ses!2ses!4v1671960949565!5m2!1ses!2ses" width="300" height="150" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <ul className='contact__details'>
                            <li><TbLocation />Avda de María Auxiliadora Nº 18 </li>
                            <li><TbDeviceMobile /> 957 657 022</li>
                            <li><TbMail />info@floreseva.com</li>
                        </ul>
                    </div>
                    <div className="contact__card tienda2">
                        <div className="map">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5291380252847!2d-4.64023972440323!3d37.589703972032545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d137885f62285%3A0x88e45dd7914719d7!2sFlores%20Eva%20S.L.!5e0!3m2!1ses!2ses!4v1671961423768!5m2!1ses!2ses" width="300" height="150" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <ul className='contact__details'>
                            <li><TbLocation />Calle Ciudad de Sevilla Nº 2 </li> 
                            <li><TbDeviceMobile />957 651 373 </li>
                            <li><TbMail /> info@floreseva.com</li>
                        </ul>
                    </div>
                </div>

                {/* <div className="contact__form">
                    <Form />
                </div> */}
            </section>
            <div className="sticky__whatsapp">
                <a className="sticky__whatsapp-link" href="https://api.whatsapp.com/send?phone=+34629562610&text=Hola,%20quiero%20solicitar%20informaci%C3%B3n" rel="noopener noreferrer" target="_blank">
                    <AiOutlineWhatsApp size={32} color='var(--brown)' />
                </a>
            </div>
        </>
    )
}
