import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title';

export default class Section extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Free cocktails for all bike owners"
            },
            {
                icon: <FaHiking />,
                title: "1 year warranty",
                info: "Included with every bike purchased"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Delivery",
                info: "All bikes come with free delivery"
            },
            {
                icon: <FaBeer />,
                title: "Years of experience",
                info: "Free cocktails for all bike owners"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Why Us?" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}