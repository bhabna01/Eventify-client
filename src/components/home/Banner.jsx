
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';







const Banner = () => {
    return (

        //         <Carousel >
        //             <div >
        //                 <img src="https://i.ibb.co/BZ5FNqS/jordan-arnold-Ul07-QK2-AR-0-unsplash-1.jpg" />

        //             </div>
        //             <div>
        //                 <img src='https://i.ibb.co/qrCW7nj/diane-picchiottino-x-X21-Sxqzb2c-unsplash-1.jpg' />

        //             </div>
        //             <div>
        //                 <img src="https://i.ibb.co/Drk9zbK/patricia-prudente-THc-Xu1-Lgl-G8-unsplash-1.jpg
        // "  />

        //             </div>
        //         </Carousel>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className="relative">
                <img src="https://i.ibb.co/BZ5FNqS/jordan-arnold-Ul07-QK2-AR-0-unsplash-1.jpg" alt="Event Management 1" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                        Plan Your Perfect Event
                    </h2>
                </div>
            </div>
            <div className="relative">
                <img src="https://i.ibb.co/qrCW7nj/diane-picchiottino-x-X21-Sxqzb2c-unsplash-1.jpg" alt="Event Management 2" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                        Create Unforgettable Experiences
                    </h2>
                </div>
            </div>
            <div className="relative">
                <img src="https://i.ibb.co/Drk9zbK/patricia-prudente-THc-Xu1-Lgl-G8-unsplash-1.jpg" alt="Event Management 3" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-md">
                        Manage Events with Ease
                    </h2>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;