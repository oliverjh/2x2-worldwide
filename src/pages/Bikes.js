import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import BikesContainer from '../components/BikesContainer';
import Footer from '../components/Footer';

const Bikes = () => {
    return(
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Bikes">
                    <Link to="/" className="btn-primary">
                        Back to home
                    </Link>
                </Banner>
            </Hero>
            <BikesContainer />
            <Footer />
        </>
    )
}

export default Bikes;