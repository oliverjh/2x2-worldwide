import React, {Component} from 'react';
import { BikeContext } from '../context';
import Loading from './Loading';
import Bike from './Bike';
import Title from '../components/Title';

export default class FeaturedBikes extends Component {
    //create static context type
    static contextType = BikeContext;
    render() {
        let { loading, featuredBikes : bikes } = this.context;
        bikes = bikes.map(bike => {
            return <Bike key={bike.id} bike={bike} />
        })
        return (
            <section className="featured-rooms">
                <Title title="featured bikes" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : bikes}
                </div>                   
            </section>
        )
    }
}