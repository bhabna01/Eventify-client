import { useEffect, useState } from "react";

import SingleEventRow from "../components/dashboard/SingleEventRow";

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
            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <SingleEventRow
                                key={event._id}
                                event={event}
                                onDelete={handleDeleteProduct}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllEvents;