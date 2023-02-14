import React from 'react';
import './Links.css';
import logo from '../assets/logo.svg'

export default function Links() {
  return (
    <section className='links-page'>
        <img src={logo} alt="Logo de Flores Eva" />
        <div className='links'>
            <ul>
                <li className='link__item'><a href="https://api.whatsapp.com/send?phone=+34629562610&text=Hola,%20quiero%20solicitar%20informaci%C3%B3n" target='_blank' rel="noopener noreferrer">Contacta por Whatsapp</a></li>
                <li className='link__item'><a href="https://www.google.com/maps?ll=37.589704,-4.637665&z=15&t=m&hl=es&gl=ES&mapclient=embed&cid=9864112264284936663" target='_blank' rel="noopener noreferrer">Tienda Centro</a></li>
                <li className='link__item'><a href="https://www.google.com/maps/place/Flores+Eva+S.L./@37.579361,-4.645433,15z/data=!4m6!3m5!1s0xd6d1482aa3c4abb:0xbb0259c66dc97e7a!8m2!3d37.5793612!4d-4.6454329!16s%2Fg%2F1tdmwzjj?hl=es" target='_blank' rel="noopener noreferrer">Tienda Calle Ciudad de Sevilla</a></li>
            </ul>
        </div>
    </section>
  )
}
