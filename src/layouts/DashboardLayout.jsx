
import { FiGrid, FiHome, FiPlus } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (

        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-12 lg:col-span-2 bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg text-white p-6">
                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-2xl font-bold">Eventify</h1>
                </div>
                <ul>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"home"} className="flex items-center text-white ">
                            <FiHome className="mr-2" />
                            Dashboard
                        </Link>
                    </li>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"all-events"} className="flex items-center text-white">
                            <FiGrid className="mr-2" />
                            All Events
                        </Link>
                    </li>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"add-events"} className="flex items-center text-white">
                            <FiPlus className="mr-2" />
                            Add Event
                        </Link>
                    </li>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"/"} className="flex items-center text-white">
                            <FiHome className="mr-2" />
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 lg:col-span-10 p-6 lg:p-20 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;