import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <div className="container flex flex-col justify-center items-center h-screen text-center py-32 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/background-image.jpg)' }}>
            <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
                <h1 className="text-7xl font-extrabold text-white mb-8">Error {status || 404}</h1>
                <p className="lg:text-3xl text-white mb-4">{error?.message || "Page not found"}</p>
                <button className="btn bg-red-500 hover:bg-red-600 text-white mt-8 px-6 py-3 rounded-lg text-lg transform transition-transform hover:scale-105">
                    <Link to="/" className="text-white no-underline">HomePage</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;