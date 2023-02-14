import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="header container">
                <div className="header__logo">
                    <Link to='/'><img src={logo} alt="Logo de Flores Eva. Tienda de Flores y accesorios en Montilla." /></Link>
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
                            <li className="menu__item"><Link to='/'>Inicio
                            </Link></li>
                            <li className="menu__item"><Link to="/servicios">Servicios</Link></li>
                            <li className="menu__item"><Link to="/contacto">Contacto</Link></li>
                            <li className="menu__item"><Link to="/tienda">TIENDA</Link></li>
                            <li className='menu__item'><a href="http://localhost:8888/flores-eva/tienda/">Tienda</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__whatsapp">
                    <a className="header__whatsapp-link" href="https://api.whatsapp.com/send?phone=+34629562610&text=Hola,%20quiero%20solicitar%20informaci%C3%B3n" rel="noopener noreferrer" target="_blank">
                        <AiOutlineWhatsApp size={32} color='var(--brown)' />
                    </a>
                </div>
            </div>
        </header>
    )
}
