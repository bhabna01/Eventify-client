import SingleEvent from "./SingleEvent";


const Events = () => {
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Upcoming Events</h1>

            <div className="flex gap-2 px-6 justify-center items-center ">
                {
                    // eslint-disable-next-line react/prop-types

                    <SingleEvent />

                }
            </div>
        </div>
    );
};

export default Events;