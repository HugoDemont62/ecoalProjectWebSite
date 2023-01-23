import * as React from 'react';
import FooterStyle from "../styles/Footer.module.css";

function Footer() {
    let style = FooterStyle;
    return (
    <footer className={style.container}>
        <div className={style.flex}>
            <div className={style.links}>
                <h1>Pages</h1>
                <a href="/">Lorem ipsum dolor.</a>
                <a href="/">Lorem ipsum dolor.</a>
                <a href="/">Lorem ipsum dolor.</a>
            </div>
            <div className={style.links}>
                <h1>The project</h1>
                <a href="/">Lorem ipsum dolor.</a>
                <a href="/">Lorem ipsum dolor.</a>
                <a href="/">Lorem ipsum dolor.</a>
            </div>
            <div className={style.links}>
                <h1>About</h1>
                <a href="/">Lorem ipsum dolor.</a>
                <a href="/">Lorem ipsum dolor.</a>
                <a href="/">Lorem ipsum dolor.</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer