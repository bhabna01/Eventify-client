import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import userpic from "../assets/user.png"
import { useState } from "react";

import EventList from "./EventList";

const Navbar = () => {
    const { logout, user } = useAuth();
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
    };

    const handleSearch = (searchQuery) => {
        if (searchQuery.trim() === "") {
            // Close modal and reset events if search query is empty
            setIsModalOpen(false);
            setEvents([]);
            return;
        }

        // Fetch search results
        fetch(`http://localhost:5000/events?q=${searchQuery}`)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setIsModalOpen(true); // Open modal if search query is not empty
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        // <div className="navbar bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg p-4 mb-9 ">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-6 w-6 text-white"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                 >
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         d="M4 6h16M4 12h8m-8 6h16"
        //                     />
        //                 </svg>
        //             </label>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
        //             >
        //                 <li>
        //                     <Link to="/" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/about" className="text-lg text-gray-800 hover:text-blue-600 font-medium">About</Link>
        //                 </li>
        //                 {!user && (
        //                     <>
        //                         <li>
        //                             <Link to="/login" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Login</Link>
        //                         </li>
        //                         <li>
        //                             <Link to="/register" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Register</Link>
        //                         </li>
        //                     </>
        //                 )}
        //                 {user && (
        //                     <>
        //                         <li>
        //                             <Link to="/dashboard" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Dashboard</Link>
        //                         </li>
        //                         <li>
        //                             <button
        //                                 // onClick={handleLogout}
        //                                 className="btn btn-error text-white"
        //                             >
        //                                 Logout
        //                             </button>
        //                         </li>
        //                     </>
        //                 )}
        //             </ul>
        //         </div>
        //         <Link to="/" className="flex items-center space-x-2 text-white text-lg">
        //             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        //             <span className="text-xl font-semibold">Eventify</span>
        //         </Link>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1 space-x-4">
        //             <li>
        //                 <Link to="/" className="text-lg text-white hover:text-blue-600 font-medium">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about" className="text-lg text-white hover:text-blue-600 font-medium">About</Link>
        //             </li>
        //             {!user && (
        //                 <>
        //                     <li>
        //                         <Link to="/login" className="text-lg text-white hover:text-blue-600 font-medium">Login</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/register" className="text-lg text-white hover:text-blue-600 font-medium">Register</Link>
        //                     </li>
        //                 </>
        //             )}
        //             {user && (
        //                 <li>
        //                     <Link to="/dashboard" className="text-lg text-white hover:text-blue-600 font-medium">Dashboard</Link>
        //                 </li>
        //             )}
        //         </ul>
        //     </div>
        //     <div className="navbar-end space-x-4">
        //         {user && (
        //             <button
        //                 onClick={handleLogout}
        //                 className="btn btn-primary btn-lg transform transition-transform hover:scale-105"
        //             >
        //                 Logout
        //             </button>
        //         )}
        //         <div className="avatar">
        //             <div className="w-12 rounded-full border-2 border-white">
        //                 <img src={user?.photoURL || userpic} alt="User Avatar" />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="navbar bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg p-4 mb-9">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-6 w-6 text-white"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                 >
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         d="M4 6h16M4 12h8m-8 6h16"
        //                     />
        //                 </svg>
        //             </label>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
        //             >
        //                 <li>
        //                     <Link to="/" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/about" className="text-lg text-gray-800 hover:text-blue-600 font-medium">About</Link>
        //                 </li>
        //                 {!user && (
        //                     <>
        //                         <li>
        //                             <Link to="/login" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Login</Link>
        //                         </li>
        //                         <li>
        //                             <Link to="/register" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Register</Link>
        //                         </li>
        //                     </>
        //                 )}
        //                 {user && (
        //                     <>
        //                         <li>
        //                             <Link to="/dashboard" className="text-lg text-gray-800 hover:text-blue-600 font-medium">Dashboard</Link>
        //                         </li>
        //                         <li>
        //                             <button className="btn btn-error text-white">
        //                                 Logout
        //                             </button>
        //                         </li>
        //                     </>
        //                 )}
        //             </ul>
        //         </div>
        //         <Link to="/" className="flex items-center space-x-2 text-white text-lg">
        //             <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        //             <span className="text-xl font-semibold">Eventify</span>
        //         </Link>
        //     </div>

        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1 space-x-4">
        //             <li>
        //                 <Link to="/" className="text-lg text-white hover:text-blue-600 font-medium">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about" className="text-lg text-white hover:text-blue-600 font-medium">About</Link>
        //             </li>
        //             {!user && (
        //                 <>
        //                     <li>
        //                         <Link to="/login" className="text-lg text-white hover:text-blue-600 font-medium">Login</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/register" className="text-lg text-white hover:text-blue-600 font-medium">Register</Link>
        //                     </li>
        //                 </>
        //             )}
        //             {user && (
        //                 <li>
        //                     <Link to="/dashboard" className="text-lg text-white hover:text-blue-600 font-medium">Dashboard</Link>
        //                 </li>
        //             )}
        //         </ul>
        //     </div>

        //     {/* Search Bar */}
        //     <div className="navbar-end space-x-4">
        //         <div className="form-control">
        //             <input
        //                 type="text"
        //                 placeholder="Search"
        //                 className="input input-bordered w-full lg:w-64 focus:outline-none focus:ring focus:ring-blue-300"
        //                 onChange={(e) => setSearchQuery(e.target.value)}
        //             />
        //             <button
        //                 onClick={() => handleSearch(searchQuery)}
        //                 className="btn btn-primary"
        //             >
        //                 Search
        //             </button>
        //         </div>
        //         {user && (
        //             <button
        //                 onClick={handleLogout}
        //                 className="btn btn-primary btn-lg transform transition-transform hover:scale-105"
        //             >
        //                 Logout
        //             </button>
        //         )}
        //         <div className="avatar">
        //             <div className="w-12 rounded-full border-2 border-white">
        //                 <img src={user?.photoURL || userpic} alt="User Avatar" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="navbar bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg p-4 mb-9">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                        >
                            <li>
                                <Link to="/" className="text-lg text-gray-800 hover:text-blue-600 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-lg text-gray-800 hover:text-blue-600 font-medium">
                                    About
                                </Link>
                            </li>
                            {!user && (
                                <>
                                    <li>
                                        <Link to="/login" className="text-lg text-gray-800 hover:text-blue-600 font-medium">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className="text-lg text-gray-800 hover:text-blue-600 font-medium">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                            {user && (
                                <>
                                    <li>
                                        <Link to="/dashboard" className="text-lg text-gray-800 hover:text-blue-600 font-medium">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="btn btn-error text-white" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center space-x-2 text-white text-lg">
                        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                        <span className="text-xl font-semibold">Eventify</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <li>
                            <Link to="/" className="text-lg text-white hover:text-blue-600 font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-lg text-white hover:text-blue-600 font-medium">
                                About
                            </Link>
                        </li>
                        {!user && (
                            <>
                                <li>
                                    <Link to="/login" className="text-lg text-white hover:text-blue-600 font-medium">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="text-lg text-white hover:text-blue-600 font-medium">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                        {user && (
                            <li>
                                <Link to="/dashboard" className="text-lg text-white hover:text-blue-600 font-medium">
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="navbar-end space-x-4">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-full lg:w-64 focus:outline-none focus:ring focus:ring-blue-300"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                handleSearch(e.target.value); // Automatically handle search on input change
                            }}
                        />
                    </div>
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="btn btn-primary btn-lg transform transition-transform hover:scale-105"
                        >
                            Logout
                        </button>
                    )}
                    <div className="avatar">
                        <div className="w-12 rounded-full border-2 border-white">
                            <img src={user?.photoURL || userpic} alt="User Avatar" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-3/4 lg:w-1/2 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Search Results</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="space-y-4">
                            {events.length > 0 ? (
                                events.map((event) => (
                                    <div key={event.id} className="p-4 border rounded shadow">
                                        <h3 className="text-lg font-semibold">{event.title}</h3>
                                        <p>{event.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No events found</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default Navbar;