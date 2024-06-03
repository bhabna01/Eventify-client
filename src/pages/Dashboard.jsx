import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Eventify</h1>
                    {user && (
                        <div className="flex items-center">
                            <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full mr-2" />
                            <div>
                                <p className="text-sm font-medium">{user.displayName}</p>
                                <p className="text-xs text-gray-300">{user.email}</p>
                            </div>
                            {/* Add Logout button here if needed */}
                        </div>
                    )}
                </div>
            </nav>
            {/* Dashboard content */}
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4">Dashboard</h2>

            </div>
        </div>
    );
};

export default Dashboard;