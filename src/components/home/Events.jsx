/* eslint-disable react/prop-types */
import SingleEvent from "./SingleEvent";


const Events = ({ data }) => {
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Our Services</h1>

            <div className="flex flex-wrap gap-2 px-6 justify-center items-center">
                {
                    // eslint-disable-next-line react/prop-types
                    data.map((event) => (
                        <SingleEvent key={event._id} event={event} />
                    ))
                }
            </div>
        </div>
    );
};

export default Events;