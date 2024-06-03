

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                <p className="text-lg text-gray-700 mt-2">Learn more about our event management services</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Established in 2010, Eventify started as a small team of passionate event planners in New York City. Our mission was simple: to create memorable experiences that bring people together. Over the past decade, we have grown into a renowned event management company, known for our creativity, attention to detail, and unwavering commitment to excellence.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Eventify, our mission is to craft extraordinary events that leave a lasting impression. Whether it's a corporate gathering, a wedding, or a community festival, we strive to bring your vision to life with meticulous planning and execution. We are dedicated to providing personalized service, innovative solutions, and unforgettable experiences that exceed expectations.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Integrity, creativity, and excellence are at the core of everything we do. We believe in building strong relationships with our clients, understanding their unique needs, and delivering events that are not only successful but also meaningful. Our team is committed to continuous improvement, always seeking new ways to innovate and enhance the event experience.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Choosing Eventify means partnering with a team that cares deeply about your event's success. From concept to completion, we handle every detail with precision and care. Our extensive experience, industry expertise, and passion for events make us the perfect choice for any occasion. Let us turn your vision into reality and create an event that will be remembered for years to come.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default About;