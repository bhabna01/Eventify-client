/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const SingleEvent = ({ event }) => {
    const { _id, title, price, description, image_url } = event;
    return (
        // <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl m-2">
        //     <figure className="w-full h-48 overflow-hidden">
        //         <img src={image_url} alt="Event" className="w-full h-full object-cover" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title text-lg md:text-2xl">{title}</h2>
        //         <h3 className="text-md md:text-xl font-semibold">${price}</h3>
        //         <p className="text-sm md:text-base">{description}</p>
        //         <div className="card-actions justify-end">
        //             <Link to={`/events/${id}`} className="btn btn-primary">
        //                 See details
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl m-2">
            <figure className="w-full h-48 overflow-hidden flex items-center justify-center">
                <img src={image_url} alt="Event" className="w-full h-full object-cover" />
            </figure>
            <div className="card-body flex flex-col justify-between h-64">
                <div>
                    <h2 className="card-title text-lg md:text-2xl">{title}</h2>
                    <h3 className="text-md md:text-xl font-semibold">${price}</h3>
                    <p className="text-sm md:text-base overflow-hidden overflow-ellipsis" style={{ maxHeight: '4rem' }}>
                        {description}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/events/${_id}`} className="btn btn-primary">
                        See details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;