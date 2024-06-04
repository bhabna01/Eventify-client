
import { useLoaderData } from 'react-router-dom';
import Accordian from '../components/home/Accordian';
import Banner from '../components/home/Banner';
import Events from '../components/home/Events';
import UpcomingEvents from '../components/UpcomingEvents';
import FeaturedEvents from '../components/FeaturedEvents';
import SearchEvents from '../components/home/SearchEvents';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <SearchEvents></SearchEvents>
            <Events data={data}></Events>
            <UpcomingEvents></UpcomingEvents>
            <FeaturedEvents></FeaturedEvents>
            <Accordian></Accordian>

        </div>
    );
};

export default Home;