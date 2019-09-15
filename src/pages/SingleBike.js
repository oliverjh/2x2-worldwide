import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { BikeContext } from '../context';
import StyledHero from '../components/StyledHero';
import headImage from '../images/montague-header.png'
import Footer from '../components/Footer';

export default class SingleBike extends Component {
    //get url slug
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
            headImage
        }
    }

    static contextType = BikeContext;

    componentDidMount() {

    }

    render() {
        const { getBike } = this.context;
        const bike = getBike(this.state.slug);
        if (!bike) {
            return (
            <div className="error">
                <h3>Sorry, we couldn't find the bike that you are looking for...</h3>
                <Link to='/bikes' className="btn-primary">Back to bikes</Link>
            </div>
            )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = bike;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                {
                    //below sets the heading image
                }
                <StyledHero img={this.state.headImage || mainImg}>
                    <Banner title={`${name}`}>
                        <Link to='/bikes' className="btn-primary">
                            Back to Bikes
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return (
                                <img key={index} src={item} alt={name} />
                            )                            
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="description">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: £{price} SRP</h6>
                            <h6>Size: {size} inch</h6>
                            <h6>Year: {capacity}</h6>
                            {
                            /*
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                            */
                           }                            
                        </article>
                    </div>
                </section>
                {extras && 
                    <section className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((item, index) => {
                                return (
                                    <li key={index}>- {item}</li>
                                )
                            })}
                        </ul>
                    </section>
                }
                <section className="room-extras">
                    <h4>If you are interested in this bike, or need any further information, please contact us via the contact page and a member of the team will get back to you.</h4>
                </section>
                <Footer />
            </>
        )
    }
}