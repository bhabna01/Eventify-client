/* eslint-disable react/prop-types */


const EventCard = ({ event }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-gray-500">{event.date} - {event.location}</p>
        </div>
    );
};

export default EventCard;