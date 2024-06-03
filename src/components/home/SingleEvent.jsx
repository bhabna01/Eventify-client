
import { Link } from 'react-router-dom';

const SingleEvent = ({ event }) => {
    const { id, title, price, description, image_url } = event;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image_url} alt="Event" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <h3 className="text-xl font-semibold">{price}</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/events/${id}`}>See details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;