import React from 'react';
import BikesFilter from './BikesFilter';
import BikesList from './BikesList';
import { withBikeConsumer } from '../context';
import Loading from './Loading';

function BikeContainer({context}) {
    const {loading, sortedBikes, bikes} = context;

    if (loading){
        return <Loading />
    }
    return(
        <>  
            <BikesFilter bikes={bikes} />
            <BikesList bikes={sortedBikes} />
        </>
    );
}

export default withBikeConsumer(BikeContainer);

// import React from 'react';
// import BikesFilter from './BikesFilter';
// import BikesList from './BikesList';
// import { BikeConsumer } from '../context';
// import Loading from './Loading';

// export default function BikesContainer() {
//     return (
//         <BikeConsumer>
//             {value => {
//                 const {loading, sortedBikes, bikes} = value;
//                 if (loading){
//                     return <Loading />
//                 }
//                 return(
//                     <div>
//                         Hello from Bikes Container
//                         <BikesFilter bikes={bikes} />
//                         <BikesList bikes={sortedBikes} />
//                     </div>
//                 );
//             }}
//         </BikeConsumer>
//     )
// }