import LogoCO2 from "../../.././img/logoco2.svg";
import ImgStar from '../../.././img/imgstar.svg';
import LogoVerified from '../../.././img/logoverified.png';
import Logo1406 from '../../.././img/1406inn-color.svg';
import LogoTgcb from '../../.././img/tgcbinn_gris.svg';
import LogoFb from '../../.././img/fb.svg';
import LogoIg from '../../.././img/ig.svg';
import LogoYt from '../../.././img/yt.svg';
import LogoLab from '../../.././img/lab_footer.svg';
import './opciones.scss';
import { Link } from "react-router-dom";

export function ScOpciones() {
    return (<div className="sc-opciones">
        <div className="sc-opciones-total">
            <p>ABOUT RUNNERINN</p>
                <li><Link to={'/'}>About us</Link></li>
                <li><Link to={'/'}>Our team</Link></li>
                <li><Link to={'/'}>Our physical store</Link></li>
                <li><Link to={'/'}>Terms & conditions</Link></li>
                <li><Link to={'/'}>Affiliate programs</Link></li>
            <div className="sc-other-shops">
                <p>OTHER SHOPS</p>
                    <li><Link to={'/'}>Techinn</Link></li>
                    <li><Link to={'/'}>Bricoinn</Link></li>
                    <li><Link to={'/'}>Outletinn</Link></li>
            </div>
        </div>

        <div className="sc-opciones-total">
            <p>SHOP WITH CONFIDENCE</p>
                <li><Link to={'/'}>How to place an order?</Link></li>
                <li><Link to={'/'}>Shipping and delivery</Link></li>
                <li><Link to={'/'}>Payment methods</Link></li>
                <li><Link to={'/'}>Safe shopping guarantee</Link></li>
                <li><Link to={'/'}>Satisfied or refunded</Link></li>
            <div className="sc-delivery">
                <p>SUSTAINABLE DELIVERY</p>
                <img src={LogoCO2} alt='SUSTAINABLE DELIVERY'/>
            </div>
        </div>

        <div className="sc-opciones-total">
            <p>CUSTOMER SERVICES</p>
                <li><Link to={'/'}>Order tracking</Link></li>
                <li><Link to={'/'}>Contact us</Link></li>
                <li><Link to={'/'}>Frequently asked questions</Link></li>
                <li><Link to={'/'}>Easy return</Link></li>
                <li><Link to={'/'}><b>Customer testimonials</b></Link></li>
                <li>
                    <Link to={'/'}>
                        <div className="sc-rate">
                            <p className="sc-number-rate">4.6 / 5</p>
                            <div className="sc-logo-star">
                                <img src={ImgStar} alt='Customer testimonials'/>
                                <img src={ImgStar} alt='Customer testimonials'/>
                                <img src={ImgStar} alt='Customer testimonials'/>
                                <img src={ImgStar} alt='Customer testimonials'/>
                                <img src={ImgStar} alt='Customer testimonials'/>
                            </div>
                        </div>
                    </Link>
                </li>
            <div className="sc-logo-verified">
                <img src={LogoVerified} alt='Verified Reviews'/>
                <p>By Verified Reviews</p>
            </div>
        </div>

        <div className="sc-opciones-total">
            <div className="sc-follow-us">
                <p>OUR INTERNATIONAL EVENT</p>
                <img src={Logo1406} alt='140.6INN Club'/>
            </div>
            <div className="sc-follow-us">
                <p>OUR TRIATHLON CLUB</p>
                <img src={LogoTgcb} alt ='TGCBINN Club'/>
            </div>
            <div className="sc-follow-us">
                <p>FOLLOW US ON</p>
                <div className="sc-follow">
                <img src={LogoFb} alt='Facebook'/>
                <img src={LogoIg} alt='Instagram runerinn'/>
                <img src={LogoYt} alt='Youtube runerinn'/>
                <img src={LogoLab} alt='Lab'/>
                </div>
            </div>
        </div>
    </div>)
}