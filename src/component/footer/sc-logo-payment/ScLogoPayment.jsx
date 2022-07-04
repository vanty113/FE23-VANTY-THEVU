import Paypal from "../../.././img/paypal.svg";
import Visa from "../../.././img/visa.svg";
import MasterCard from "../../.././img/mastercard.svg";
import America from "../../.././img/americalexpress.svg";
import Adyen from "../../.././img/adyen.svg";
import Verisign from "../../.././img/verisign.svg";
import NetRivals from "../../.././img/netrivals.svg";
import Confianzaon from "../../.././img/confianzaonlineeurop.svg";
import GeoTrust from "../../.././img/geotrust.svg";
import Securetypayment from "../../.././img/securutypayment.svg";
import Scalapay from "../../.././img/scalapay.svg";
import Klarna from "../../.././img/klarna.svg";
import Tradeinn from "../../.././img/tradeinn.svg";
import './logopayments.scss';

export function ScLogoPayment() {
    return (<>
        <div className="sc-logo-payment">
            <img src={Paypal} alt="Paypal" />
            <img src={Visa} alt="Visa" />
            <img src={MasterCard} alt="MasterCard" />
            <img src={America} alt="America" />
            <img src={Adyen} alt="Adyen" />
            <img src={Verisign} alt="Verisign" />
            <img src={NetRivals} alt="NetRivals" />
            <img src={Confianzaon} alt="Confianzaon" />
            <img src={GeoTrust} alt="GeoTrust" />
            <img src={Securetypayment} alt="Securetypayment" />
            <img src={Scalapay} alt="Scalapay" />
            <img src={Klarna} alt="Klarna" />
        </div>
        <div className="sc-copyright">
            <img src={Tradeinn} alt="Tradeinn" />
            <p>
                Copyright 2009 - 2022 by runnerinn. TRADEINN RETAIL SERVICES, S.L. CIF/VAT ES-B-17527524, C/ Pirineus, 9, 17460 Celrà (Girona), Spain. Terms & Conditions | Affiliate programs | Cookies policy | Privacy policy | Legal notice | Privacy policy social networks
            </p>
        </div>
    </>)
}