import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard';


const SearchEvents = () => {
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const featuredResponse = await fetch('http://localhost:5000/featured');
                const upcomingResponse = await fetch('http://localhost:5000/upcoming');
                const featuredData = await featuredResponse.json();
                const upcomingData = await upcomingResponse.json();
                const allEvents = [...featuredData, ...upcomingData];
                setFeaturedEvents(featuredData);
                setUpcomingEvents(upcomingData);
                setFilteredEvents(allEvents); // Set initial filtered events to all events
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const allEvents = [...featuredEvents, ...upcomingEvents];
            const filtered = allEvents.filter(event =>
                event && event.name && event.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredEvents(filtered);
        } else {
            setFilteredEvents([]);
        }
    }, [searchQuery, featuredEvents, upcomingEvents]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"  >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-3xl text-center">
                <div className="mb-8 w-full flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="input input-bordered w-full max-w-lg p-3 text-lg rounded-l-lg"
                    />
                    <button className="btn btn-primary rounded-r-lg px-6 text-lg" onClick={() => setSearchQuery(searchQuery)}>
                        Search
                    </button>
                </div>

                {searchQuery.trim() !== '' && (
                    <>
                        <h1 className="text-3xl font-bold mb-4 text-white">Search Results</h1>
                        <div className="flex flex-wrap justify-center">
                            {filteredEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default SearchEvents;

