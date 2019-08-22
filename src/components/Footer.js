import React from 'react';
import logo from '../images/2x2-worldwide-logo-transparent.png'

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <>
            <div className="section-footer">
                <div className="footerLogo">
                    <img src={logo} />
                </div>                
            </div>
            <br />
            <div className="footer-copyright">
                <h6>&copy; Copyright 2X2 Worldwide {year}</h6>
            </div>
        </>
    )
}