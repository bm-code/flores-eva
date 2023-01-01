import React from 'react';
import logo from '../assets/logo.svg';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="header container">
                <div className="header__logo">
                    <img src={logo} alt="Logo de Flores Eva. Tienda de Flores y accesorios en Montilla." />
                </div>
                <div className="header__menu">
                    <input type="checkbox" id="burger" />
                    <label htmlFor="burger" className="burger__container">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                    <nav className="header__nav">
                        <ul className="header__menu-items">
                            <li className="menu__item"><a href="https://floreseva.netlify.app/">Inicio</a></li>
                            <li className="menu__item"><a href="https://floreseva.netlify.app/">Servicios</a></li>
                            <li className="menu__item"><a href="https://floreseva.netlify.app/">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__whatsapp">
                    <a className="header__whatsapp-link" href="#https://api.whatsapp.com/send?phone=+34618309147&text=Hola,%20quiero%20solicitar%20informaci%C3%B3n" rel="noopener noreferrer" target="_blank">
                        <AiOutlineWhatsApp size={32} color='var(--brown)' />
                    </a>
                </div>
            </div>
        </header>
    )
}
