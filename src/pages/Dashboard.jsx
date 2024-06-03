import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";


const Dashboard = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);

    console.log(userInfo);

    return (
        <div className="p-8 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-7">
                <h1 className="text-3xl font-semibold text-gray-800">Profile Information</h1>
                <Link
                    to={`/dashboard/profile/edit/${userInfo?._id}`}
                    className="btn btn-neutral btn-md px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Edit Profile
                </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{userInfo?.name}</h2>
                <p className="text-lg text-gray-600">{userInfo?.email}</p>
            </div>
        </div>
    );
};

export default Dashboard;