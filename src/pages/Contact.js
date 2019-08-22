import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
//import '../../src/style.css'

export default function Contact() {
    return (
        <>
        <Hero hero="contactHero">
            <Banner title="Get in touch">
                <Link to="/" className="btn-primary">
                    Back to home
                </Link>
            </Banner>
        </Hero>
        <div className="spacing-top-contact">
        </div>
        <section className="contact-form">
            <div className="parent blue">
                <div className="previous green">
                <h3 className="text-uppercase text-bold">How to Find us</h3>
                    <hr className="divider hr-lg-left-0 bg-mantis" />
                    <p>If you have any questions, just fill in the contact form, and we will answer you shortly. 
                        If you need a faster response, please dont hesitate to give us a call on the number provided.
                    </p>
                    <address className="contact-info offset-top-50">
                    <p className="h6 text-uppercase text-bold text-picton-blue letter-space-none offset-top-none">2X2 Worldwide</p>
                    <p>First Floor, 9 Shottery Brook, </p>
                    <p>Timothy's Bridge Road</p>
                    <p>Stratford Upon Avon</p>
                    <p>Warwickshire, CV37 9NR</p>
                    <dl className="offset-top-0">
                        <dt>Telephone</dt>
                        <dd><a href="callto:#">01827 331 099</a></dd>
                    </dl>
                    <dl>
                        <dt>E-mail:</dt>
                        <dd><a href="mailto:sales@2x2worldwide.com">sales@2x2worldwide.com</a></dd>
                    </dl>
                    </address>
                </div>
                <div className="next red">
                <h3 className="text-uppercase text-bold">Get in touch</h3>
                    <hr className="divider hr-lg-left-0 bg-mantis" />
                    <form className="rd-mailform text-left" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                    <div className="range">
                        <div className="cell-lg-6">
                        <div className="form-group">
                            <label className="form-label form-label-outside" htmlFor="contact-us-name">Name:</label>
                            <input className="form-control" id="contact-us-name" type="text" name="name" data-constraints="@Required" />
                        </div>
                        </div>
                        <div className="cell-lg-6 offset-top-20 offset-lg-top-0">
                        <div className="form-group">
                            <label className="form-label form-label-outside" htmlFor="contact-us-email">E-Mail:</label>
                            <input className="form-control" id="contact-us-email" type="email" name="email" data-constraints="@Required @Email" />
                        </div>
                        </div>
                        <div className="cell-lg-12 offset-top-20">
                        <div className="form-group">
                            <label className="form-label form-label-outside" htmlFor="contact-us-message">Message:</label>
                            <textarea className="form-control" id="contact-us-message" name="message" data-constraints="@Required"></textarea>
                        </div>
                        </div>
                        <div className="group-sm text-lg-left offset-top-30 send-btn">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
        <div className="divClear5p">
        </div>
        <Footer />
    </>
    )
}