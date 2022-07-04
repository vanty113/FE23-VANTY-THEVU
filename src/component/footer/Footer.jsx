import './footer.scss';
import { ScBrands } from "./sc-brands/ScBrands";
import { ScLogoPayment } from './sc-logo-payment/ScLogoPayment';
import { ScOpciones } from "./sc-opciones/ScOpciones";
import { React } from 'react';

export function Footer() {
        
    return (<div className='footer'>
        <div className="footer-container">
        <ScOpciones/>
        <ScBrands/>
        <ScLogoPayment/>
    </div>
    </div>)
}