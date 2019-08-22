import React from 'react';
import Bike from './Bike';

export default function BikesList({bikes}) {
    if (bikes.length === 0){
        return (
            <div className="empty-search">
                Sorry, we couldnt find a bike matching your criteria
            </div>
        )
    } else {
        return (
            <section className="roomslist">
                <div className="roomslist-center">
                    {
                        bikes.map(item => {
                            return <Bike key={item.id} bike={item} />
                        })
                    }
                </div>
            </section>
        )
    }

}