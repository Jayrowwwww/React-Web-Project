// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
export default function Tour(){
  // Tour packages data
    const tourPackages = [
        {
        id: 1,
        name: "Mediterranean Cruise Adventure",
        destination: "Mediterranean",
        duration: "10 days",
        price: 2499,
        rating: 4.8,
        reviews: 124,
        type: "Cruise",
        highlights: [
            "Visit 5 countries",
            "Luxury ship accommodation",
            "All-inclusive meals",
            "Daily excursions",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Luxury%2520cruise%2520ship%2520sailing%2520through%2520the%2520Mediterranean%2520Sea%2520with%2520beautiful%2520blue%2520water%2520and%2520scenic%2520coastline%2520views%252C%2520white%2520ship%2520against%2520deep%2520blue%2520ocean%252C%2520sunny%2520day%2520with%2520clear%2520skies%252C%2520professional%2520travel%2520photography%2520with%2520vibrant%2520colors%2520and%2520perfect%2520lighting&width=600&height=400&seq=201&orientation=landscape",
        },
        {
        id: 2,
        name: "Japanese Cherry Blossom Tour",
        destination: "Japan",
        duration: "8 days",
        price: 1899,
        rating: 4.9,
        reviews: 87,
        type: "Cultural",
        highlights: [
            "Tokyo and Kyoto",
            "Cherry blossom viewing",
            "Traditional tea ceremony",
            "Temple visits",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Beautiful%2520Japanese%2520cherry%2520blossom%2520trees%2520in%2520full%2520bloom%2520with%2520pink%2520flowers%2520against%2520blue%2520sky%252C%2520traditional%2520Japanese%2520pagoda%2520in%2520background%252C%2520spring%2520season%2520in%2520Japan%252C%2520professional%2520travel%2520photography%2520with%2520perfect%2520lighting%2520and%2520composition&width=600&height=400&seq=202&orientation=landscape",
        },
        {
        id: 3,
        name: "African Safari Experience",
        destination: "Kenya & Tanzania",
        duration: "12 days",
        price: 3299,
        rating: 4.7,
        reviews: 156,
        type: "Adventure",
        highlights: [
            "Big Five wildlife viewing",
            "Luxury safari lodges",
            "Maasai village visit",
            "Hot air balloon ride",
        ],
        image:
            "https://readdy.ai/api/search-image?query=African%2520safari%2520landscape%2520with%2520elephants%2520and%2520giraffes%2520against%2520golden%2520sunset%252C%2520acacia%2520trees%2520silhouetted%2520on%2520horizon%252C%2520savanna%2520grasslands%2520stretching%2520into%2520distance%252C%2520professional%2520wildlife%2520photography%2520with%2520warm%2520lighting%2520and%2520perfect%2520composition&width=600&height=400&seq=203&orientation=landscape",
        },
        {
        id: 4,
        name: "Northern Lights Iceland Tour",
        destination: "Iceland",
        duration: "7 days",
        price: 2199,
        rating: 4.8,
        reviews: 92,
        type: "Adventure",
        highlights: [
            "Aurora viewing spots",
            "Glacier hiking",
            "Geothermal hot springs",
            "Reykjavik city tour",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Spectacular%2520northern%2520lights%2520aurora%2520borealis%2520dancing%2520across%2520night%2520sky%2520in%2520Iceland%252C%2520vibrant%2520green%2520and%2520purple%2520colors%2520reflected%2520in%2520still%2520lake%2520below%252C%2520silhouettes%2520of%2520mountains%2520in%2520background%252C%2520professional%2520night%2520photography%2520with%2520long%2520exposure&width=600&height=400&seq=204&orientation=landscape",
        },
        {
        id: 5,
        name: "Tropical Bali Retreat",
        destination: "Indonesia",
        duration: "9 days",
        price: 1699,
        rating: 4.6,
        reviews: 118,
        type: "Luxury",
        highlights: [
            "Private villa accommodation",
            "Ubud cultural tour",
            "Beachfront relaxation",
            "Spa treatments",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Luxurious%2520tropical%2520Bali%2520villa%2520with%2520private%2520infinity%2520pool%2520overlooking%2520lush%2520green%2520jungle%2520and%2520rice%2520terraces%252C%2520traditional%2520Balinese%2520architecture%2520with%2520open%2520air%2520design%252C%2520beautiful%2520sunny%2520day%2520with%2520perfect%2520blue%2520sky%252C%2520professional%2520resort%2520photography&width=600&height=400&seq=205&orientation=landscape",
        },
        {
        id: 6,
        name: "Patagonian Hiking Adventure",
        destination: "Argentina & Chile",
        duration: "14 days",
        price: 2899,
        rating: 4.9,
        reviews: 76,
        type: "Adventure",
        highlights: [
            "Torres del Paine",
            "Glacier trekking",
            "Wildlife spotting",
            "Mountain lodges",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Dramatic%2520Patagonian%2520landscape%2520with%2520towering%2520granite%2520peaks%2520of%2520Torres%2520del%2520Paine%252C%2520turquoise%2520glacial%2520lake%2520in%2520foreground%252C%2520hikers%2520on%2520trail%2520enjoying%2520spectacular%2520mountain%2520views%252C%2520dramatic%2520clouds%2520and%2520perfect%2520lighting%252C%2520professional%2520landscape%2520photography&width=600&height=400&seq=206&orientation=landscape",
        },
    ];
    // Tour categories data
    const tourCategories = [
        {
        id: 1,
        name: "Adventure Tours",
        description: "Thrilling experiences for the bold traveler",
        image:
            "https://readdy.ai/api/search-image?query=Adventure%2520travelers%2520hiking%2520on%2520mountain%2520trail%2520with%2520backpacks%252C%2520dramatic%2520mountain%2520landscape%2520with%2520snow-capped%2520peaks%2520in%2520background%252C%2520clear%2520blue%2520sky%252C%2520sense%2520of%2520exploration%2520and%2520discovery%252C%2520professional%2520adventure%2520photography%2520with%2520vibrant%2520colors&width=400&height=300&seq=207&orientation=landscape",
        },
        {
        id: 2,
        name: "Cultural Experiences",
        description: "Immerse yourself in local traditions and history",
        image:
            "https://readdy.ai/api/search-image?query=Travelers%2520participating%2520in%2520traditional%2520cultural%2520ceremony%2520with%2520local%2520people%2520in%2520colorful%2520traditional%2520clothing%252C%2520ancient%2520temple%2520or%2520historical%2520site%2520in%2520background%252C%2520warm%2520lighting%2520and%2520rich%2520cultural%2520details%252C%2520professional%2520cultural%2520photography&width=400&height=300&seq=208&orientation=landscape",
        },
        {
        id: 3,
        name: "Luxury Getaways",
        description: "Premium travel experiences with exclusive amenities",
        image:
            "https://readdy.ai/api/search-image?query=Luxury%2520overwater%2520bungalows%2520in%2520tropical%2520paradise%2520with%2520crystal%2520clear%2520turquoise%2520water%252C%2520private%2520infinity%2520pools%252C%2520palm%2520trees%2520and%2520perfect%2520white%2520sand%2520beach%252C%2520sunset%2520lighting%2520with%2520golden%2520hues%252C%2520professional%2520luxury%2520travel%2520photography&width=400&height=300&seq=209&orientation=landscape",
        },
        {
        id: 4,
        name: "Family Vacations",
        description: "Memorable journeys for travelers of all ages",
        image:
            "https://readdy.ai/api/search-image?query=Happy%2520family%2520enjoying%2520vacation%2520on%2520beautiful%2520beach%252C%2520parents%2520and%2520children%2520playing%2520in%2520sand%2520and%2520shallow%2520water%252C%2520tropical%2520setting%2520with%2520palm%2520trees%2520and%2520clear%2520blue%2520sky%252C%2520joyful%2520expressions%252C%2520professional%2520family%2520travel%2520photography&width=400&height=300&seq=210&orientation=landscape",
        },
    ];
    // Customer reviews data
    const customerReviews = [
        {
        id: 1,
        name: "Michael Roberts",
        tour: "Mediterranean Cruise Adventure",
        rating: 5,
        comment:
            "The Mediterranean cruise exceeded all our expectations. The ship was luxurious, the staff attentive, and the excursions perfectly organized. SKYWINGS handled every detail flawlessly!",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520smiling%2520middle-aged%2520man%2520with%2520short%2520brown%2520hair%2520and%2520casual%2520business%2520attire%252C%2520neutral%2520background%252C%2520warm%2520friendly%2520expression%252C%2520good%2520lighting%252C%2520high%2520quality%2520portrait%2520photograph&width=80&height=80&seq=211&orientation=squarish",
        },
        {
        id: 2,
        name: "Jennifer Chen",
        tour: "Japanese Cherry Blossom Tour",
        rating: 5,
        comment:
            "Our cherry blossom tour in Japan was magical! The timing was perfect, and we saw the blossoms at their peak. The cultural experiences arranged by SKYWINGS gave us authentic insights into Japanese traditions.",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520smiling%2520Asian%2520woman%2520in%2520her%252030s%2520with%2520shoulder%2520length%2520black%2520hair%2520and%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520friendly%2520expression%252C%2520good%2520lighting%252C%2520high%2520quality%2520portrait%2520photograph&width=80&height=80&seq=212&orientation=squarish",
        },
        {
        id: 3,
        name: "David Williams",
        tour: "African Safari Experience",
        rating: 5,
        comment:
            "The safari exceeded our wildest dreams! We saw all of the Big Five within the first three days. The guides were incredibly knowledgeable, and the accommodations were luxurious even in remote locations.",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520smiling%2520Black%2520man%2520in%2520his%252040s%2520with%2520short%2520hair%2520and%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520confident%2520friendly%2520expression%252C%2520good%2520lighting%252C%2520high%2520quality%2520portrait%2520photograph&width=80&height=80&seq=213&orientation=squarish",
        },
    ];
    // State for filter options
    const [destinationFilter, setDestinationFilter] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");
    const [durationFilter, setDurationFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");
    // State for active review
    const [activeReview, setActiveReview] = useState(0);
    // Filter destinations for dropdown
    const destinations = [
        "All",
        ...new Set(tourPackages.map((tour) => tour.destination)),
    ];
    const tourTypes = ["All", ...new Set(tourPackages.map((tour) => tour.type))];
    // Filter tours based on selected filters
    const filteredTours = tourPackages.filter((tour) => {
        return (
        (destinationFilter === "All" || tour.destination === destinationFilter) &&
        (priceFilter === "All" ||
            (priceFilter === "Under $2000" && tour.price < 2000) ||
            (priceFilter === "$2000-$3000" &&
            tour.price >= 2000 &&
            tour.price <= 3000) ||
            (priceFilter === "Over $3000" && tour.price > 3000)) &&
        (durationFilter === "All" ||
            (durationFilter === "Under 7 days" && parseInt(tour.duration) < 7) ||
            (durationFilter === "7-10 days" &&
            parseInt(tour.duration) >= 7 &&
            parseInt(tour.duration) <= 10) ||
            (durationFilter === "Over 10 days" && parseInt(tour.duration) > 10)) &&
        (typeFilter === "All" || tour.type === typeFilter)
        );
    });
    // Review navigation
    const nextReview = () => {
        setActiveReview((prev) =>
        prev === customerReviews.length - 1 ? 0 : prev + 1,
        );
    };
    const prevReview = () => {
        setActiveReview((prev) =>
        prev === 0 ? customerReviews.length - 1 : prev - 1,
        );
    };
    return (
        <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img
                src="https://readdy.ai/api/search-image?query=Stunning%2520panoramic%2520travel%2520destination%2520collage%2520with%2520beautiful%2520beaches%252C%2520mountains%252C%2520ancient%2520temples%2520and%2520city%2520skylines%252C%2520vibrant%2520colors%2520with%2520blue%2520sky%2520and%2520turquoise%2520waters%2520dominating%2520the%2520right%2520side%252C%2520gradient%2520fade%2520to%2520darker%2520blue%2520on%2520left%2520side%2520for%2520text%2520overlay%252C%2520professional%2520travel%2520photography&width=1440&height=600&seq=214&orientation=landscape"
                alt="Travel Destinations"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
            </div>
            <div className="container mx-auto px-8 py-24 relative z-10">
            <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our <span className="text-blue-300">Tours</span>
                </h1>
                <p className="text-lg text-blue-50 mb-8">
                Discover handcrafted journeys to the world's most captivating
                destinations. From cultural immersions to thrilling adventures,
                SKYWINGS offers premium tour experiences tailored to your travel
                aspirations.
                </p>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                    <label className="text-gray-600 text-sm mb-1 block">
                        Destination
                    </label>
                    <div className="relative">
                        <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                        value={destinationFilter}
                        onChange={(e) => setDestinationFilter(e.target.value)}
                        >
                        {destinations.map((destination, index) => (
                            <option key={index} value={destination}>
                            {destination}
                            </option>
                        ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                    </div>
                    <div className="flex-1">
                    <label className="text-gray-600 text-sm mb-1 block">
                        When
                    </label>
                    <input
                        type="date"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700"
                    />
                    </div>
                    <div className="md:self-end">
                    <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-search mr-2"></i> Search Tours
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Tour Categories */}
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore By Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our carefully curated tour categories designed to match every
                travel style and interest.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourCategories.map((category) => (
                <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                >
                <div className="h-48 overflow-hidden">
                    <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <button className="text-blue-500 font-medium flex items-center cursor-pointer !rounded-button whitespace-nowrap">
                    Explore <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
                </div>
            ))}
            </div>
        </section>
        {/* Featured Tour Packages */}
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Featured Tour Packages
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular and highly-rated travel experiences
                curated for unforgettable journeys.
                </p>
            </div>
            {/* Filter Options */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label className="text-gray-600 text-sm mb-1 block">
                    Destination
                    </label>
                    <div className="relative">
                    <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                        value={destinationFilter}
                        onChange={(e) => setDestinationFilter(e.target.value)}
                    >
                        {destinations.map((destination, index) => (
                        <option key={index} value={destination}>
                            {destination}
                        </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                    </div>
                </div>
                <div>
                    <label className="text-gray-600 text-sm mb-1 block">
                    Price Range
                    </label>
                    <div className="relative">
                    <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="All">All Prices</option>
                        <option value="Under $2000">Under $2,000</option>
                        <option value="$2000-$3000">$2,000 - $3,000</option>
                        <option value="Over $3000">Over $3,000</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                    </div>
                </div>
                <div>
                    <label className="text-gray-600 text-sm mb-1 block">
                    Duration
                    </label>
                    <div className="relative">
                    <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                        value={durationFilter}
                        onChange={(e) => setDurationFilter(e.target.value)}
                    >
                        <option value="All">Any Duration</option>
                        <option value="Under 7 days">Under 7 days</option>
                        <option value="7-10 days">7-10 days</option>
                        <option value="Over 10 days">Over 10 days</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                    </div>
                </div>
                <div>
                    <label className="text-gray-600 text-sm mb-1 block">
                    Tour Type
                    </label>
                    <div className="relative">
                    <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        {tourTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Tour Results */}
            <div className="mb-8 flex justify-between items-center">
                <p className="text-gray-600">
                Showing {filteredTours.length} tours
                </p>
                <div className="flex space-x-2">
                <button className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer !rounded-button whitespace-nowrap">
                    <i className="fas fa-th-large"></i>
                </button>
                <button className="bg-white text-gray-600 p-2 rounded-lg cursor-pointer !rounded-button whitespace-nowrap">
                    <i className="fas fa-list"></i>
                </button>
                </div>
            </div>
            {/* Tour Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                    <div
                    key={tour.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                    <div className="relative h-56 overflow-hidden">
                        <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-500">
                        {tour.duration}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {tour.name}
                        </h3>
                        <span className="text-blue-500 font-bold">
                            ${tour.price}
                        </span>
                        </div>
                        <p className="text-gray-500 mb-4">{tour.destination}</p>
                        <div className="mb-4">
                        <div className="flex items-center mb-1">
                            <div className="text-yellow-400 flex">
                            {[...Array(5)].map((_, i) => (
                                <i
                                key={i}
                                className={`fas fa-star ${i < Math.floor(tour.rating) ? "" : "text-gray-300"}`}
                                ></i>
                            ))}
                            </div>
                            <span className="text-gray-600 text-sm ml-2">
                            {tour.rating} ({tour.reviews} reviews)
                            </span>
                        </div>
                        </div>
                        <div className="mb-4">
                        <h4 className="text-gray-700 font-medium mb-2">
                            Highlights:
                        </h4>
                        <ul className="space-y-1">
                            {tour.highlights.map((highlight, index) => (
                            <li
                                key={index}
                                className="text-gray-600 text-sm flex items-start"
                            >
                                <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                                {highlight}
                            </li>
                            ))}
                        </ul>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium mt-2 !rounded-button whitespace-nowrap cursor-pointer">
                        Book Now
                        </button>
                    </div>
                    </div>
                ))
                ) : (
                <div className="col-span-3 text-center py-12">
                    <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No tours found
                    </h3>
                    <p className="text-gray-500">
                    Try adjusting your filters to find available tours.
                    </p>
                </div>
                )}
            </div>
            {filteredTours.length > 0 && (
                <div className="mt-12 text-center">
                <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    View All Tours
                </button>
                </div>
            )}
            </div>
        </section>
        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose SKYWINGS Tours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to providing exceptional travel experiences with
                attention to every detail.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-tie text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Guides
                </h3>
                <p className="text-gray-600">
                Our professional guides bring destinations to life with their
                in-depth knowledge and passion.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-gem text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Curated Experiences
                </h3>
                <p className="text-gray-600">
                Each itinerary is thoughtfully designed to include both iconic
                highlights and hidden gems.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-tag text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Best Price Guarantee
                </h3>
                <p className="text-gray-600">
                We offer competitive pricing without compromising on the quality
                of your travel experience.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-headset text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                24/7 Support
                </h3>
                <p className="text-gray-600">
                Our dedicated support team is available around the clock to assist
                with any questions or concerns.
                </p>
            </div>
            </div>
        </section>
        {/* Customer Reviews */}
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Our Travelers Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Real experiences from travelers who have explored the world with
                SKYWINGS Tours.
                </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                        <img
                        src={customerReviews[activeReview].image}
                        alt={customerReviews[activeReview].name}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    </div>
                    <div className="md:w-3/4 md:pl-8">
                    <div className="text-yellow-400 mb-4">
                        {[...Array(customerReviews[activeReview].rating)].map(
                        (_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ),
                        )}
                    </div>
                    <p className="text-gray-600 italic mb-4 text-lg">
                        "{customerReviews[activeReview].comment}"
                    </p>
                    <div>
                        <p className="font-semibold text-gray-800">
                        {customerReviews[activeReview].name}
                        </p>
                        <p className="text-blue-500 text-sm">
                        {customerReviews[activeReview].tour}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <button
                    onClick={prevReview}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 !rounded-button whitespace-nowrap"
                >
                    <i className="fas fa-chevron-left text-gray-600"></i>
                </button>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <button
                    onClick={nextReview}
                    className="w-10 h-10 rounded-full bg-blue-500 shadow-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
                >
                    <i className="fas fa-chevron-right text-white"></i>
                </button>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                {customerReviews.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-3 h-3 rounded-full ${activeReview === index ? "bg-blue-500" : "bg-gray-300"} cursor-pointer`}
                    aria-label={`Go to review ${index + 1}`}
                    ></button>
                ))}
                </div>
            </div>
            </div>
        </section>
        {/* Booking Form */}
        <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img
                src="https://readdy.ai/api/search-image?query=Travel%2520planning%2520concept%2520with%2520world%2520map%252C%2520passport%252C%2520airplane%2520tickets%2520and%2520travel%2520accessories%2520arranged%2520on%2520blue%2520background%252C%2520top%2520view%2520flat%2520lay%2520composition%252C%2520vacation%2520preparation%2520essentials%252C%2520professional%2520travel%2520photography%2520with%2520soft%2520lighting&width=1440&height=600&seq=215&orientation=landscape"
                alt="Travel Planning"
                className="w-full h-full object-cover opacity-20"
            />
            </div>
            <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-gray-600">
                    Fill out the form below to check availability and receive a
                    personalized quote for your next adventure.
                </p>
                </div>
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700"
                        placeholder="Enter your full name"
                    />
                    </div>
                    <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700"
                        placeholder="Enter your email"
                    />
                    </div>
                    <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                        Preferred Destination
                    </label>
                    <div className="relative">
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none text-gray-700">
                        <option value="">Select a destination</option>
                        {destinations
                            .filter((d) => d !== "All")
                            .map((destination, index) => (
                            <option key={index} value={destination}>
                                {destination}
                            </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                    </div>
                    <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                        Travel Dates
                    </label>
                    <input
                        type="date"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700"
                    />
                    </div>
                    <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                        Number of Travelers
                    </label>
                    <div className="relative">
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none text-gray-700">
                        <option value="1">1 Traveler</option>
                        <option value="2">2 Travelers</option>
                        <option value="3">3 Travelers</option>
                        <option value="4">4 Travelers</option>
                        <option value="5+">5+ Travelers</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                    </div>
                    <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                        Budget Range
                    </label>
                    <div className="relative">
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none text-gray-700">
                        <option value="">Select budget range</option>
                        <option value="economy">Economy ($1,000 - $2,000)</option>
                        <option value="standard">
                            Standard ($2,000 - $3,000)
                        </option>
                        <option value="luxury">Luxury ($3,000+)</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <label className="text-gray-700 font-medium mb-2 block">
                    Special Requirements or Questions
                    </label>
                    <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 h-32"
                    placeholder="Tell us about any special requirements, preferences, or questions you have..."
                    ></textarea>
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    Check Availability
                    </button>
                </div>
                </form>
            </div>
            </div>
        </section>
        </div>
    )
}