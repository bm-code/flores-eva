import React from 'react';
import logo from '../assets/logo-blanco.svg';
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo} alt="Logo blanco de Flores Eva" />
                </div>
                <div className="footer__main">
                    <div className="footer__menu">
                        <h4>Menú</h4>
                        <ul>
                            <li><a href='https://floreseva.netlify.app/'>Inicio</a></li>
                            <li><a href='https://floreseva.netlify.app/'>Servicios</a></li>
                            <li><a href='https://floreseva.netlify.app/'>Contacto</a></li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <h4>Contacto</h4>
                        <ul>
                            <li>Dirección</li>
                            <li>Teléfono</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <h4>Legal</h4>
                        <ul>
                            <li>Aviso legal</li>
                            <li>Términos y condiciones</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__text">
                <p>Flores Eva © {currentYear} | Developed by <a href="https://benimorales.com/" target='_blank' without rel="noopener noreferrer">Beni Morales</a> </p>
            </div>
        </footer>
    )
}
