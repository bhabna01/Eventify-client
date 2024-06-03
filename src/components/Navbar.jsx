import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-primary to-secondary shadow-lg p-4">
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/" className="text-lg hover:text-white font-medium">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-lg hover:text-white font-medium">About</Link>
                        </li>
                        {/* {!user && (
                            <>
                                <li>
                                    <Link to="/login" className="text-lg hover:text-white font-medium">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="text-lg hover:text-white font-medium">Register</Link>
                                </li>
                            </>
                        )} */}
                        {/* {user && (
                            <>
                                <li>
                                    <Link to="/dashboard" className="text-lg hover:text-white font-medium">Dashboard</Link>
                                </li>
                                <li>
                                    <button
                                        // onClick={handleLogout}
                                        className="btn btn-error text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )} */}
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
                        <Link to="/" className="text-lg hover:text-white font-medium">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg hover:text-white font-medium">About</Link>
                    </li>
                    {/* {!user && (
                        <>
                            <li>
                                <Link to="/login" className="text-lg hover:text-white font-medium">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-lg hover:text-white font-medium">Register</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <li>
                            <Link to="/dashboard" className="text-lg hover:text-white font-medium">Dashboard</Link>
                        </li>
                    )} */}
                </ul>
            </div>
            {/* <div className="navbar-end space-x-4">
                {user && (
                    <button
                        onClick={handleLogout}
                        className="btn btn-primary btn-lg transform transition-transform hover:scale-105"
                    >
                        Logout
                    </button>
                )} */}
            {/* <div className="avatar">
                    <div className="w-12 rounded-full border-2 border-white">
                        <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="User Avatar" />
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default Navbar;