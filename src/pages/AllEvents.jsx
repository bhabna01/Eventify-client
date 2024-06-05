import { useEffect, useState } from "react";
import SingleEventCardDashboard from "../components/dashboard/SingleEventCardDashboard";

const AllEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://eventify-server-amber.vercel.app/events")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    const handleDeleteProduct = (id) => {
        setEvents(events.filter((event) => event._id !== id));
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">All Events</h1>
            <div className="my-10 flex flex-wrap  gap-2">
                {events.map((event) => (
                    <SingleEventCardDashboard
                        key={event._id}
                        event={event}
                        onDelete={handleDeleteProduct}
                    />
                ))}
            </div>
        </div>

    );
};

export default AllEvents;