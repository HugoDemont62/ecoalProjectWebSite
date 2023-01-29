import * as React from 'react';
import Style from '../styles/About.module.css';


function About() {
    const style = Style;

    return(
        <div className={style.about}>
            <div className={style.header}>
                <h1>ECOAL</h1>
                <div className={style.bulle}></div>
            </div>
        </div>
    )
}

export default About