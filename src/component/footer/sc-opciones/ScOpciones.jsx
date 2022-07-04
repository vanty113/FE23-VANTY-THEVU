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

export function ScOpciones() {
    return (<div className="sc-opciones">
        <div className="sc-opciones-total">
            <p>ABOUT RUNNERINN</p>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Our physical store</a></li>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Affiliate programs</a></li>
            <div className="sc-other-shops">
                <p>OTHER SHOPS</p>
                    <li><a href="#">Techinn</a></li>
                    <li><a href="#">Bricoinn</a></li>
                    <li><a href="#">Outletinn</a></li>
            </div>
        </div>

        <div className="sc-opciones-total">
            <p>SHOP WITH CONFIDENCE</p>
                <li><a href="#">How to place an order?</a></li>
                <li><a href="#">Shipping and delivery</a></li>
                <li><a href="#">Payment methods</a></li>
                <li><a href="#">Safe shopping guarantee</a></li>
                <li><a href="#">Satisfied or refunded</a></li>
            <div className="sc-delivery">
                <p>SUSTAINABLE DELIVERY</p>
                <img src={LogoCO2} alt='SUSTAINABLE DELIVERY'/>
            </div>
        </div>

        <div className="sc-opciones-total">
            <p>CUSTOMER SERVICES</p>
                <li><a href="#">Order tracking</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Frequently asked questions</a></li>
                <li><a href="#">Easy return</a></li>
                <li><a href="#"><b>Customer testimonials</b></a></li>
                <li>
                    <a href="#">
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
                    </a>
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