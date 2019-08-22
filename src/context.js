import React, {Component} from 'react'
//import items from './data';
import Client from './Contentful';

//context api
const BikeContext = React.createContext();

class BikeProvider extends Component {
    state = {
        bikes: [],
        sortedBikes: [],
        featuredBikes: [],
        loading: true,
        brand: 'All',
        type: 'All',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        male: false,
        female: false,
    };

    //get data from contentful
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "twoByTwoBikes"
            });
            let bikes = this.formatData(response.items);
            //create array of featured bikes
            let featuredBikes = bikes.filter(bike => bike.featured === true);
            let maxPrice = Math.max(...bikes.map(item => item.price));
            this.setState({
                bikes,
                featuredBikes,
                sortedBikes: bikes,
                loading: false,
                price: maxPrice,
                maxPrice            
            })
        } catch (error) {
            console.log(error);
        }
    }

    //lifecycle method
    componentDidMount() {
        this.getData();
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            //overwrite images with unnested images array created above
            let bike = {...item.fields, images, id}
            return bike;
        });
        return tempItems;
    }

    //Filter bikes in state and return bike that matches url slug passed in
    getBike = (slug) => {
        let tempBikes = [...this.state.bikes];
        const bike = tempBikes.find(bike => bike.slug === slug);
        return bike;
    }

    handleChange = event => {
        const target = event.target;
        const name = event.target.name; 
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        }, 
        this.filterBikes
        );
    };

    filterBikes = () => {
        let {
            bikes, 
            type,
            brand,
            price, 
            male,
            female
        } = this.state;

        // All the rooms
        let tempBikes = [...bikes];

        //transform values to int
        price = parseInt(price);

        //Filter by type
        if (type !== 'All'){
            tempBikes = tempBikes.filter(bike => bike.type === type)
        }

        //Filter by bike brand
        if (brand !== 'All'){
            tempBikes = tempBikes.filter(bike => bike.brand === brand)
        }

        //Filter by price
        tempBikes = tempBikes.filter(bike => bike.price <= price);

        //filter by male
        if (male) {
            tempBikes = tempBikes.filter(bike => bike.male === true);
        }

        //filter by female
        if (female) {
            tempBikes = tempBikes.filter(bike => bike.female === true);
        }

        //Change state - i.e. the bikes that are returned after filtering
        this.setState({
            sortedBikes: tempBikes
        })
    }

    render() {
        return (
            <BikeContext.Provider value={{ ...this.state, getBike: this.getBike, handleChange: this.handleChange }}>
                {this.props.children}
            </BikeContext.Provider>
        )
    }
}

//consumer
const BikeConsumer = BikeContext.Consumer;

export function withBikeConsumer(Component){
    return function ConsumerWrapper(props){
        return <BikeConsumer>
            {value => <Component {...props} context={value} />}
        </BikeConsumer>
    }
}

export{BikeProvider, BikeConsumer, BikeContext};