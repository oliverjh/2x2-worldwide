import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Section from '../components/Section'
import FeaturedBikes from '../components/FeaturedBikes'
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="2x2 Worldwide" subtitle="Designers, Importers ,Distributors and Retailers of Quality Bikes">
                    <Link to="/bikes" className="btn-primary">
                        View Bikes
                    </Link>
                </Banner>
            </Hero>
            <FeaturedBikes />
            {/*
            <Section />
            Not currently implemented fully, so i am commenting out for the mean time
            */
            <Footer />            
           }
        </>
    )
}

export default Home;