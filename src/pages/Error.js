import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
            <Banner title="404 - Page Not Found" subtitle="Sorry, we couldn't find the page that you were looking for!">
                <Link to="/" className="btn-primary">
                    Back to home
                </Link>
            </Banner>
        </Hero>
    )
}