
import AwesomeSlider from 'react-awesome-slider';
import { Link } from 'react-router-dom';
import img1 from "../../../src/assets/birthday.jpg"
import img2 from "../../../src/assets/concerts.jpg"
import img3 from "../../../src/assets/wedding.jpg"

import 'react-awesome-slider/dist/styles.css';



const Banner = () => {
    return (

        <AwesomeSlider className='h-[500px] mt-11 bg-cover' >
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img3} />
        </AwesomeSlider>
    );
};

export default Banner;