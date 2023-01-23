import * as React from 'react';
import FooterStyle from "../styles/Footer.css";
import Vague from "../elements/vagueFooter.svg"

function Footer() {
    return (
        <div className={FooterStyle.container}>
            <img src={Vague} alt="footer" />
        </div>
    )
}

export default Footer