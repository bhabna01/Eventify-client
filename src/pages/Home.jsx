
import { useLoaderData } from 'react-router-dom';
import Accordian from '../components/home/Accordian';
import Banner from '../components/home/Banner';
import Events from '../components/home/Events';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Events data={data}></Events>
            <Accordian></Accordian>

        </div>
    );
};

export default Home;