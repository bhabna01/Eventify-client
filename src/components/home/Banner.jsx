
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/Banner.jpg'
const Banner = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-6 md:p-10">
                    <h1 className="mb-5 text-5xl font-bold">Join the Ultimate Experience</h1>
                    <p className="mb-5 text-lg">
                        Explore our upcoming events and be part of something extraordinary. From conferences to workshops, we have events for everyone.
                    </p>
                    <button className="btn btn-primary btn-lg transform transition-transform hover:scale-105">
                        <Link to="/upcoming">Explore Events</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;