import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-gray-900 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border-b border-gray-800 pb-6">
                        <h6 className="text-lg font-semibold mb-4">About Us</h6>
                        <p className="text-sm">At Eventify, we specialize in organizing top-notch events and conferences. Since our inception, we have been dedicated to creating memorable experiences for our attendees.</p>
                    </div>
                    <div className="border-b border-gray-800 pb-6">
                        <h6 className="text-lg font-semibold mb-4">Events</h6>
                        <ul className="list-disc list-inside text-sm">
                            <li><Link to="">Upcoming Events</Link></li>
                            <li><Link to="">Past Events</Link></li>
                            <li><Link to="">Speakers</Link></li>
                            <li><Link to="">Tickets</Link></li>
                        </ul>
                    </div>
                    <div className="border-b border-gray-800 pb-6">
                        <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
                        <p className="text-sm">456 Event Avenue, Conference City, Country</p>
                        <p className="text-sm">Email: support@eventify.com</p>
                        <p className="text-sm">Phone: +1 (987) 654-3210</p>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="flex justify-between items-center">
                    <p className="text-sm">© 2024 Eventify. All rights reserved.</p>
                    <nav className="space-x-4">
                        <a href="#" className="text-gray-400 hover:text-indigo-500">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500">
                            Refund Policy
                        </a>
                    </nav>
                </div>
            </footer>
        </>

    );
};

export default Footer;