import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

import userpic from "../assets/user.png"
const Dashboard = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`https://eventify-server-amber.vercel.app/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);

    console.log(userInfo);

    return (
        <div className="p-8 bg-white shadow-xl rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full opacity-20 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-7">
                    <h1 className="text-4xl font-bold text-gray-900">Profile Information</h1>
                    <Link
                        to={`/dashboard/profile/edit/${userInfo?._id}`}
                        className="btn btn-neutral btn-md px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 transition duration-300 transform hover:scale-105"
                    >
                        Edit Profile
                    </Link>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <div className="flex items-center mb-4 space-x-4">
                        <img
                            src={userInfo?.photoURL || userpic}
                            alt="Profile"
                            className="w-24 h-24 rounded-full shadow-lg"
                        />
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800">
                                {userInfo?.name || "John Doe"}
                            </h2>
                            <p className="text-xl text-gray-600">{userInfo?.email || "johndoe@example.com"}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Dashboard;