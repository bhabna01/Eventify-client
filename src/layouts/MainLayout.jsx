
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { ClockLoader } from 'react-spinners';

const MainLayout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate a loading delay (e.g., fetch data or load assets)
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the delay as needed
    }, []);
    return (
        <>
            {loading ? (
                <div className="flex justify-center mt-11">
                    <ClockLoader color="#c084fc" size={100} />
                </div>
            ) : (
                <div >
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            )}
        </>
    );
};

export default MainLayout;