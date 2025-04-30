import React, { useState } from "react";

export default function Home() {
    const [activeDestination, setActiveDestination] = useState(0);

    const destinations = [
        {
        id: 1,
        title: "Tropical Paradise",
        location: "Bali, Indonesia",
        rating: 4.8,
        visits: "10K+ Visitors",
        image:
            "https://readdy.ai/api/search-image?query=Beautiful%20tropical%20island%20with%20crystal%20clear%20turquoise%20water%2C%20white%20sandy%20beaches%2C%20and%20lush%20green%20vegetation.%20Aerial%20view%20of%20a%20small%20island%20resort%20surrounded%20by%20coral%20reefs%20in%20Bali%2C%20Indonesia.%20Pristine%20beach%20paradise%20with%20bright%20sunny%20sky%20and%20calm%20ocean.&width=400&height=250&seq=1&orientation=landscape",
        },
        {
        id: 2,
        title: "Coastal Serenity",
        location: "Santorini, Greece",
        rating: 4.9,
        visits: "15K+ Visitors",
        image:
            "https://readdy.ai/api/search-image?query=Stunning%20view%20of%20Santorini%20with%20white%20buildings%20and%20blue%20domes%20overlooking%20the%20clear%20blue%20Aegean%20Sea.%20Beautiful%20coastal%20town%20built%20on%20cliffs%20with%20pastel%20colored%20houses%20and%20amazing%20ocean%20view.%20Bright%20sunny%20day%20with%20perfect%20blue%20sky.&width=400&height=250&seq=2&orientation=landscape",
        },
        {
        id: 3,
        title: "Island Getaway",
        location: "Maldives",
        rating: 4.7,
        visits: "8K+ Visitors",
        image:
            "https://readdy.ai/api/search-image?query=Luxurious%20overwater%20bungalows%20in%20the%20Maldives%20with%20pristine%20turquoise%20lagoon%20water.%20Wooden%20walkways%20connecting%20water%20villas%20over%20crystal%20clear%20ocean.%20Perfect%20tropical%20vacation%20destination%20with%20palm%20trees%20and%20white%20sand%20beaches%20visible%20in%20background.&width=400&height=250&seq=3&orientation=landscape",
        },
    ];

    const nextDestination = () => {
        setActiveDestination((prev) =>
        prev === destinations.length - 1 ? 0 : prev + 1,
        );
    };

    const prevDestination = () => {
        setActiveDestination((prev) =>
        prev === 0 ? destinations.length - 1 : prev - 1,
        );
    };

    return (
        <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl mx-4 mt-4">
            <div className="relative bg-blue-50 rounded-3xl overflow-hidden">
                <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 z-10">
                        <p className="text-blue-500 mb-2 uppercase tracking-wider">
                            ELEVATE YOUR TRAVEL JOURNEY
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Experience The
                            <br />
                            Magic Of Flight!
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Discover seamless travel experiences and unforgettable
                            adventures with our premium flight services.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                            Book A Trip Now
                            </button>
                            <button className="flex items-center text-gray-700 cursor-pointer">
                            Know More
                            <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>

                        <div className="mt-8 flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-full shadow-md">
                            <img
                                src="https://readdy.ai/api/search-image?query=Airplane%20icon%20with%20blue%20background%2C%20minimalist%20design%2C%20clean%20lines%2C%20professional%20looking%2C%20suitable%20for%20travel%20website%2C%20high%20quality%20render%20with%20soft%20shadows%20and%20smooth%20edges%2C%20modern%20aviation%20symbol&width=40&height=40&seq=4&orientation=squarish"
                                alt="Airplane"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            </div>
                            <div>
                            <p className="text-sm font-medium">Awesome Planes</p>
                            <p className="text-xs text-gray-500">
                                Modern fleet selection
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 absolute right-0 top-0 h-full">
                        <img
                            src="https://readdy.ai/api/search-image?query=Commercial%20passenger%20airplane%20taking%20off%20against%20blue%20sky%20with%20soft%20clouds%2C%20dramatic%20perspective%20shot%20from%20below%2C%20modern%20jet%20aircraft%20ascending%20into%20bright%20sky%2C%20wings%20and%20engines%20visible%2C%20professional%20aviation%20photography%20with%20perfect%20lighting&width=800&height=600&seq=5&orientation=landscape"
                            alt="Airplane in flight"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Partners */}
        <div className="container mx-auto px-4 py-8 border-b">
            <div className="flex flex-wrap items-center justify-between">
                <div className="text-sm text-gray-500 mr-4">Follow</div>
                <div className="flex space-x-4 text-gray-400">
                    <i className="fab fa-twitter cursor-pointer hover:text-blue-400"></i>
                    <i className="fab fa-facebook cursor-pointer hover:text-blue-600"></i>
                    <i className="fab fa-instagram cursor-pointer hover:text-pink-500"></i>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-end space-x-8 mt-4 md:mt-0">
                    <div className="text-gray-500 flex items-center">
                        <i className="fab fa-airbnb text-xl mr-2"></i>
                        <span>Airbnb</span>
                    </div>
                    <div className="text-gray-500 flex items-center">
                        <i className="fas fa-bed text-xl mr-2"></i>
                        <span>Booking.com</span>
                    </div>
                    <div className="text-gray-500 flex items-center">
                        <i className="fas fa-suitcase text-xl mr-2"></i>
                        <span>Trivago</span>
                    </div>
                    <div className="text-gray-500 flex items-center">
                        <i className="fas fa-globe text-xl mr-2"></i>
                        <span>Expedia</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Popular Destinations */}
        <section className="container mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                    Popular Destinations
                    </h2>
                    <p className="text-gray-500">
                    Unleash Your Wanderlust With Skywings
                    </p>
                </div>

                <div className="flex space-x-2">
                    <button
                    onClick={prevDestination}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 !rounded-button whitespace-nowrap"
                    >
                    <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                    onClick={nextDestination}
                    className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
                    >
                    <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
                <div
                key={destination.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${index === activeDestination ? "scale-105" : "scale-100"}`}
                >
                <div className="relative h-48 overflow-hidden">
                    <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                    {destination.title}
                    </h3>
                    <div className="flex items-center mt-2">
                    <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
                    <span className="text-sm text-gray-500">
                        {destination.location}
                    </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <i className="fas fa-user text-gray-500 mr-1"></i>
                        <span className="text-xs text-gray-500">
                        {destination.visits}
                        </span>
                    </div>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs !rounded-button whitespace-nowrap">
                        <i className="fas fa-star mr-1"></i>
                        {destination.rating}
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>

        {/* Journey Features */}
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Journey To The Skies Made Simple!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Traveling is a wonderful way to explore new places, learn about
                different cultures, and gain unique experiences.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-map-marked-alt text-blue-500"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Find Your Destination
                </h3>
                <p className="text-gray-600">
                Browse through our curated selection of amazing destinations
                around the world.
                </p>
                <button className="mt-4 text-blue-500 font-medium flex items-center cursor-pointer">
                LEARN MORE
                <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>

            <div className="bg-blue-500 p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <img
                    src="https://readdy.ai/api/search-image?query=Abstract%20circular%20pattern%20with%20dots%20and%20lines%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20tech%20feel%2C%20suitable%20for%20background%20element%2C%20digital%20network%20concept%2C%20minimalist%20design%20with%20geometric%20shapes&width=100&height=100&seq=6&orientation=squarish"
                    alt="Pattern"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-ticket-alt text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book A Ticket</h3>
                <p className="text-blue-100">
                Traveling is a wonderful way to explore new places, learn about
                different cultures, and gain unique experiences.
                </p>
                <button className="mt-4 text-white font-medium flex items-center cursor-pointer">
                LEARN MORE
                <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-credit-card text-blue-500"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pay & Start Journey
                </h3>
                <p className="text-gray-600">
                Secure payment options and instant confirmation to start your
                adventure right away.
                </p>
                <button className="mt-4 text-blue-500 font-medium flex items-center cursor-pointer">
                LEARN MORE
                <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
            </div>
        </section>

        {/* Promotional Section */}
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="md:w-1/3 relative">
                <img
                src="https://readdy.ai/api/search-image?query=Happy%20traveler%20on%20a%20tropical%20beach%20with%20clear%20blue%20water%2C%20person%20holding%20colorful%20fruits%2C%20joyful%20vacation%20moment%2C%20sunny%20day%20at%20exotic%20destination%2C%20vibrant%20colors%2C%20summer%20holiday%20atmosphere%2C%20travel%20lifestyle%20photography&width=400&height=500&seq=7&orientation=portrait"
                alt="Travel lifestyle"
                className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-6 left-6 bg-white py-2 px-4 rounded-lg shadow-md">
                <p className="font-bold text-blue-500 text-xl">20% OFF</p>
                <p className="text-xs text-gray-500">Till September 2025</p>
                </div>
            </div>

            <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    UNLEASH WANDERLUST WITH SKYWINGS
                </h2>
                <p className="text-gray-600 mb-6">
                    Traveling is a wonderful way to explore new places, learn about
                    different cultures, and gain unique experiences. Our premium
                    services ensure you get the most out of every journey.
                </p>
                <button className="bg-blue-50 text-blue-500 px-6 py-3 rounded-full font-medium flex items-center justify-center w-full md:w-auto !rounded-button whitespace-nowrap cursor-pointer">
                    Book A Flight Now
                    <i className="fas fa-arrow-right ml-2"></i>
                </button>
                </div>
            </div>
            </div>
        </section>
    </div>
    )
}
