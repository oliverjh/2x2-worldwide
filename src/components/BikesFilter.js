import React from 'react';
import { useContext } from 'react';
import { BikeContext } from '../context';
import Title from '../components/Title';

//get all unique values
const getUnique = (items, value) => {
    //Set only accepts unique values
    return [...new Set(items.map(item => item[value]))]
}

export default function BikesFilter({bikes}) {
    const context = useContext(BikeContext);
    const {
        handleChange,
        type,
        brand,
        price,
        minPrice,
        maxPrice,
        male,
        female
    } = context;

    // get unique types for select field
    let types = getUnique(bikes, 'type');
    // add all to select field
    types = ['All', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })

    // get unique brands for select field
    let brands = getUnique(bikes, 'brand');
    // add all to select field
    brands = ['All', ...brands];
    // map to jsx
    brands = brands.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })


    return (
        <section className="filter-container">
            <Title title="search bikes" />
            <form className="filter-form">
                {/* Select Type */}
                    <div className="form-group">
                        <label htmlFor="type">Bike Type</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                {/* End of Select Type */}
                {/* Select Brand */}
                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <select name="brand" id="brand" value={brand} className="form-control" onChange={handleChange}>
                        {brands}
                    </select>
                </div>
                {/* End of Select Brand */}
                {/* Bike Price */}
                <div className="form-group">
                    <label htmlFor="price">Bike Price £{price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* End of Bike Price */}
                {/* Checkboxes */}
                <div className="form-group">
                    <div className="form-group">
                        <div className="single-extra">
                            <input 
                                type="checkbox" 
                                name="male" 
                                id="male" 
                                checked={male} 
                                onChange={handleChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="single-extra">
                            <input
                                type="checkbox" 
                                name="female" 
                                id="female" 
                                checked={female} 
                                onChange={handleChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                {/* End of Checkboxes */}
            </form>
        </section>
    )
}