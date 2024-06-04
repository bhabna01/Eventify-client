import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";


const FeaturedEvents = () => {
    const [featuredEvents, setFeaturedEvents] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            // Replace with your actual API endpoints
            const featuredResponse = await axios.get('https://eventify-server-amber.vercel.app/featured');

            setFeaturedEvents(featuredResponse.data);

        };

        fetchEvents();
    }, []);
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Featured Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedEvents;
