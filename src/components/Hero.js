import React from 'react';

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    );
}

//Will need updating to a relevant image to ensure it displays correctly on error page

Hero.defaultProps = {
    hero: 'defaultHero'
}