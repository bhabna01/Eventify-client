import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            // Replace with your actual API endpoints

            const upcomingResponse = await axios.get('https://eventify-server-amber.vercel.app/upcoming');

            setUpcomingEvents(upcomingResponse.data);
        };

        fetchEvents();
    }, []);

    return (
        // <div>
        //     <h1 className="my-8 text-2xl font-bold text-center">Upcoming Events</h1>
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        //         {upcomingEvents.map((event) => (
        //             <EventCard key={event._id} event={event} />
        //         ))}
        //     </div>
        // </div>
        <div className="container mx-auto px-4">
            <h1 className="my-8 text-2xl font-bold text-center">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>

    );
};

export default UpcomingEvents;