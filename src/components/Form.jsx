import React from 'react'
import './Form.css'
export default function Form() {
    return (
        <div className="form">
            <h3>Escríbenos</h3>
            <form action="" netlify>
                <input required type="text" name="nombre" id="nombre" placeholder='Nombre' />
                <input required type="email" name="email" id="email" placeholder='Email' />
                <input required type="number" name="tel" id="tel" placeholder='Teléfono' />
                <textarea maxlength="200" required name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Escríbenos tu mensaje'></textarea>
                <div className="terms">
                    <input required type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Acepto los términos y condiciones</label>
                </div>
                <button type='submit' className="btn">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="btn-text">Enviar</span>
                </button>
            </form>
        </div>
    )
}
