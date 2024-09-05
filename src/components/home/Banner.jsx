
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';







const Banner = () => {
    return (

        <Carousel >
            <div >
                <img src="https://i.ibb.co/BZ5FNqS/jordan-arnold-Ul07-QK2-AR-0-unsplash-1.jpg" />

            </div>
            <div>
                <img src='https://i.ibb.co/qrCW7nj/diane-picchiottino-x-X21-Sxqzb2c-unsplash-1.jpg' />

            </div>
            <div>
                <img src="https://i.ibb.co/Drk9zbK/patricia-prudente-THc-Xu1-Lgl-G8-unsplash-1.jpg
"  />

            </div>
        </Carousel>
    );
};

export default Banner;