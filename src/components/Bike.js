import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types';

//change default image shortly
//needs to be a bike obviously and not a room... 

export default function Bike({bike}) {
    const {name, slug, images, price} = bike;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="bike" />
                <div className="price-top">
                    <h6>£{price}.99</h6>
                </div>
                <Link to={`/bikes/${slug}`} className="btn-primary room-link">View Bike</Link>  
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
    )
}

//check the props that are passed through to the component
Bike.propTypes = {
    bike: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}