import React, { useState, useEffect } from "react";

export default function Package() {
    const [priceRange, setPriceRange] = useState<[number, number]>([500, 5000]);
    const [durationFilter, setDurationFilter] = useState<string>("all");
    const [destinationFilter, setDestinationFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    
    const [bookingForm, setBookingForm] = useState({
        destination: "",
        startDate: "",
        endDate: "",
        travelers: 1,
        minBudget: 500,
        maxBudget: 5000,
    });

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const [timeLeft, setTimeLeft] = useState<number>(259200); // 3 days in seconds
    const formatTime = (seconds)=> {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${days}d ${hours}h ${minutes}m ${secs}s`;
    };

    const packages = [
        {
        id: 1,
        title: "Bali Paradise Escape",
        location: "Bali, Indonesia",
        duration: 7,
        price: 1899,
        discountedPrice: 1599,
        rating: 4.8,
        reviews: 256,
        amenities: ["flight", "hotel", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Beautiful%2520Bali%2520resort%2520with%2520infinity%2520pool%2520overlooking%2520lush%2520tropical%2520jungle%2520and%2520rice%2520terraces.%2520Luxury%2520villa%2520with%2520traditional%2520Balinese%2520architecture%2520elements%2520surrounded%2520by%2520palm%2520trees%2520and%2520exotic%2520flowers.%2520Serene%2520vacation%2520destination%2520with%2520mountain%2520views%2520and%2520peaceful%2520atmosphere.&width=400&height=300&seq=101&orientation=landscape",
        category: "beach",
        isSpecialOffer: true,
        discount: 15,
        description:
            "Experience the ultimate tropical getaway in Bali with our all-inclusive package. Stay at a luxury beachfront resort, enjoy daily spa treatments, and explore the island's cultural treasures with guided tours.",
        itinerary: [
            "Day 1: Arrival and welcome dinner",
            "Day 2: Ubud cultural tour and rice terraces",
            "Day 3: Uluwatu temple and beach day",
            "Day 4: Mount Batur sunrise trek",
            "Day 5: Spa day and shopping",
            "Day 6: Nusa Penida island tour",
            "Day 7: Departure",
        ],
        },
        {
        id: 2,
        title: "Greek Islands Cruise",
        location: "Santorini, Greece",
        duration: 10,
        price: 2899,
        discountedPrice: 2599,
        rating: 4.9,
        reviews: 189,
        amenities: ["flight", "cruise", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Stunning%2520Santorini%2520Greece%2520with%2520iconic%2520white%2520buildings%2520and%2520blue%2520domed%2520churches%2520overlooking%2520the%2520crystal%2520clear%2520Aegean%2520Sea.%2520Beautiful%2520sunset%2520view%2520of%2520the%2520caldera%2520with%2520luxury%2520hotels%2520built%2520into%2520the%2520cliff%2520side.%2520Idyllic%2520Mediterranean%2520vacation%2520destination.&width=400&height=300&seq=102&orientation=landscape",
        category: "luxury",
        description:
            "Sail through the stunning Greek islands on a luxury cruise ship. Visit Santorini, Mykonos, Crete, and Rhodes with expert guides, gourmet dining, and evening entertainment included.",
        itinerary: [
            "Day 1-2: Athens exploration and embarkation",
            "Day 3-4: Mykonos beaches and nightlife",
            "Day 5-6: Santorini caldera views and wine tasting",
            "Day 7: Crete historical sites",
            "Day 8: Rhodes medieval town",
            "Day 9: Patmos monastery visit",
            "Day 10: Return to Athens and departure",
        ],
        },
        {
        id: 3,
        title: "Maldives Overwater Villa",
        location: "Maldives",
        duration: 5,
        price: 3299,
        rating: 4.7,
        reviews: 142,
        amenities: ["flight", "hotel", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Luxurious%2520overwater%2520bungalows%2520in%2520the%2520Maldives%2520with%2520thatched%2520roofs%2520and%2520private%2520decks%2520extending%2520over%2520crystal%2520clear%2520turquoise%2520lagoon.%2520Wooden%2520walkways%2520connecting%2520water%2520villas%2520with%2520direct%2520ocean%2520access.%2520Pristine%2520white%2520sand%2520beaches%2520and%2520palm%2520trees%2520visible%2520in%2520background.&width=400&height=300&seq=103&orientation=landscape",
        category: "luxury",
        description:
            "Indulge in luxury at an exclusive overwater villa in the Maldives. Enjoy direct access to crystal-clear waters, private butler service, gourmet dining, and world-class snorkeling.",
        itinerary: [
            "Day 1: Arrival by seaplane and welcome reception",
            "Day 2: Snorkeling and marine life exploration",
            "Day 3: Spa treatments and sunset cruise",
            "Day 4: Private island picnic and water sports",
            "Day 5: Departure",
        ],
        },
        {
        id: 4,
        title: "Japan Cherry Blossom Tour",
        location: "Tokyo, Japan",
        duration: 8,
        price: 2499,
        rating: 4.6,
        reviews: 178,
        amenities: ["flight", "hotel", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Beautiful%2520Japanese%2520cherry%2520blossom%2520trees%2520in%2520full%2520bloom%2520around%2520a%2520traditional%2520temple%2520in%2520Kyoto.%2520Pink%2520sakura%2520flowers%2520framing%2520pagoda%2520architecture%2520with%2520Mount%2520Fuji%2520visible%2520in%2520background.%2520Peaceful%2520spring%2520scene%2520with%2520stone%2520lanterns%2520and%2520small%2520bridge%2520over%2520pond.&width=400&height=300&seq=104&orientation=landscape",
        category: "cultural",
        description:
            "Experience the magical cherry blossom season in Japan. Tour Tokyo, Kyoto, and Osaka with expert guides, stay in traditional ryokans, and enjoy authentic cultural experiences.",
        itinerary: [
            "Day 1-2: Tokyo exploration and Ueno Park cherry blossoms",
            "Day 3: Mt. Fuji and Hakone hot springs",
            "Day 4-5: Kyoto temples and gardens",
            "Day 6: Nara deer park and historic sites",
            "Day 7: Osaka castle and food tour",
            "Day 8: Departure",
        ],
        },
        {
        id: 5,
        title: "African Safari Adventure",
        location: "Serengeti, Tanzania",
        duration: 9,
        price: 4299,
        discountedPrice: 3799,
        rating: 4.9,
        reviews: 124,
        amenities: ["flight", "lodge", "meals", "safari"],
        image:
            "https://readdy.ai/api/search-image?query=Stunning%2520African%2520safari%2520scene%2520with%2520elephants%2520and%2520giraffes%2520against%2520sunset%2520in%2520Serengeti%2520National%2520Park.%2520Acacia%2520trees%2520silhouetted%2520against%2520orange%2520sky%2520with%2520vast%2520savanna%2520landscape.%2520Wildlife%2520photography%2520showing%2520natural%2520habitat%2520with%2520mountains%2520in%2520background.&width=400&height=300&seq=105&orientation=landscape",
        category: "adventure",
        isSpecialOffer: true,
        discount: 12,
        description:
            "Embark on the ultimate safari adventure in Tanzania's Serengeti National Park. Witness the Great Migration, spot the Big Five, and stay in luxury tented camps under the African stars.",
        itinerary: [
            "Day 1: Arrival in Arusha",
            "Day 2-3: Tarangire National Park",
            "Day 4-5: Ngorongoro Crater",
            "Day 6-8: Serengeti National Park and wildlife viewing",
            "Day 9: Departure",
        ],
        },
        {
        id: 6,
        title: "Costa Rica Eco Adventure",
        location: "San Jose, Costa Rica",
        duration: 6,
        price: 1799,
        rating: 4.5,
        reviews: 156,
        amenities: ["flight", "hotel", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Lush%2520Costa%2520Rican%2520rainforest%2520with%2520hanging%2520bridges%2520and%2520zip%2520lines%2520through%2520canopy.%2520Vibrant%2520green%2520jungle%2520with%2520waterfall%2520in%2520background%2520and%2520colorful%2520tropical%2520birds.%2520Eco-adventure%2520tourism%2520destination%2520with%2520volcano%2520view%2520and%2520rich%2520biodiversity.&width=400&height=300&seq=106&orientation=landscape",
        category: "adventure",
        description:
            "Discover Costa Rica's incredible biodiversity with this eco-adventure package. Zip-line through rainforests, hike active volcanoes, relax in hot springs, and spot exotic wildlife.",
        itinerary: [
            "Day 1: Arrival in San Jose",
            "Day 2: Arenal Volcano and hot springs",
            "Day 3: Zip-lining and hanging bridges",
            "Day 4: Manuel Antonio National Park",
            "Day 5: Beach day and sunset catamaran",
            "Day 6: Departure",
        ],
        },
        {
        id: 7,
        title: "Paris & French Riviera",
        location: "Paris, France",
        duration: 8,
        price: 2799,
        rating: 4.7,
        reviews: 203,
        amenities: ["flight", "hotel", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Beautiful%2520view%2520of%2520Paris%2520with%2520Eiffel%2520Tower%2520and%2520Seine%2520river%2520at%2520sunset.%2520Elegant%2520Parisian%2520architecture%2520with%2520charming%2520cafes%2520and%2520tree-lined%2520boulevards.%2520Romantic%2520French%2520cityscape%2520with%2520iconic%2520landmarks%2520and%2520golden%2520hour%2520lighting.&width=400&height=300&seq=107&orientation=landscape",
        category: "cultural",
        description:
            "Experience the romance of France with this dual-destination package. Explore the iconic sights of Paris before heading to the glamorous French Riviera for Mediterranean relaxation.",
        itinerary: [
            "Day 1-3: Paris exploration (Eiffel Tower, Louvre, Notre Dame)",
            "Day 4: Train to Nice",
            "Day 5: Nice and Promenade des Anglais",
            "Day 6: Monaco and Monte Carlo",
            "Day 7: Saint-Tropez and coastal villages",
            "Day 8: Departure",
        ],
        },
        {
        id: 8,
        title: "Family Disney Adventure",
        location: "Orlando, USA",
        duration: 7,
        price: 2199,
        discountedPrice: 1899,
        rating: 4.8,
        reviews: 312,
        amenities: ["flight", "hotel", "park passes", "meals"],
        image:
            "https://readdy.ai/api/search-image?query=Magical%2520Disney%2520castle%2520at%2520sunset%2520with%2520fireworks%2520display.%2520Enchanting%2520theme%2520park%2520scene%2520with%2520colorful%2520lights%2520and%2520festive%2520atmosphere.%2520Family%2520vacation%2520destination%2520with%2520iconic%2520fairy%2520tale%2520architecture%2520and%2520character%2520parade%2520visible%2520in%2520foreground.&width=400&height=300&seq=108&orientation=landscape",
        category: "family",
        isSpecialOffer: true,
        discount: 14,
        description:
            "Create magical memories with your family at Walt Disney World Resort. This package includes accommodation, park tickets, character dining, and VIP access to popular attractions.",
        itinerary: [
            "Day 1: Arrival and resort check-in",
            "Day 2: Magic Kingdom adventures",
            "Day 3: Epcot exploration",
            "Day 4: Disney's Animal Kingdom",
            "Day 5: Disney's Hollywood Studios",
            "Day 6: Water park and shopping",
            "Day 7: Departure",
        ],
        },
        {
        id: 9,
        title: "Romantic Venice & Tuscany",
        location: "Venice, Italy",
        duration: 6,
        price: 2399,
        rating: 4.6,
        reviews: 167,
        amenities: ["flight", "hotel", "meals", "activities"],
        image:
            "https://readdy.ai/api/search-image?query=Romantic%2520Venice%2520canal%2520with%2520gondolas%2520and%2520historic%2520buildings%2520at%2520sunset.%2520Beautiful%2520Italian%2520architecture%2520with%2520bridges%2520and%2520reflections%2520in%2520water.%2520Charming%2520European%2520cityscape%2520with%2520warm%2520golden%2520light%2520and%2520traditional%2520boats.&width=400&height=300&seq=109&orientation=landscape",
        category: "honeymoon",
        description:
            "Celebrate your love with this romantic Italian getaway. Glide through Venice's canals on a private gondola, then explore the rolling hills and vineyards of Tuscany with wine tastings and cooking classes.",
        itinerary: [
            "Day 1-2: Venice exploration and gondola ride",
            "Day 3: Transfer to Florence",
            "Day 4: Florence art and architecture",
            "Day 5: Tuscan countryside tour and wine tasting",
            "Day 6: Departure",
        ],
        },
    ]
    const packageCategories = [
        { id: "all", name: "All Packages", icon: "fa-globe" },
        { id: "family", name: "Family Vacations", icon: "fa-users" },
        { id: "honeymoon", name: "Honeymoon Specials", icon: "fa-heart" },
        { id: "adventure", name: "Adventure Tours", icon: "fa-mountain" },
        { id: "luxury", name: "Luxury Getaways", icon: "fa-gem" },
        { id: "beach", name: "Beach Holidays", icon: "fa-umbrella-beach" },
        { id: "cultural", name: "Cultural Experiences", icon: "fa-landmark" },
    ];
    const filteredPackages = packages
        .filter((pkg) => {
        // Apply search filter
        if (
            searchQuery &&
            !pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
            return false;
        }
        // Apply destination filter
        if (
            destinationFilter !== "all" &&
            pkg.location.toLowerCase() !== destinationFilter.toLowerCase()
        ) {
            return false;
        }
        // Apply price filter
        if (pkg.discountedPrice) {
            if (
            pkg.discountedPrice < priceRange[0] ||
            pkg.discountedPrice > priceRange[1]
            ) {
            return false;
            }
        } else if (pkg.price < priceRange[0] || pkg.price > priceRange[1]) {
            return false;
        }
        // Apply duration filter
        if (durationFilter !== "all") {
            const [min, max] = durationFilter.split("-").map(Number);
            if (pkg.duration < min || pkg.duration > max) {
            return false;
            }
        }
        // Apply category filter
        if (activeCategory !== "all" && pkg.category !== activeCategory) {
            return false;
        }
        return true;
        })
        .sort((a, b) => {
        switch (sortBy) {
            case "price-low":
            return (
                (a.discountedPrice || a.price) - (b.discountedPrice || b.price)
            );
            case "price-high":
            return (
                (b.discountedPrice || b.price) - (a.discountedPrice || a.price)
            );
            case "duration":
            return a.duration - b.duration;
            case "rating":
            return b.rating - a.rating;
            default: // popularity (by reviews count)
            return b.reviews - a.reviews;
        }
        });
    const specialOffers = packages.filter((pkg) => pkg.isSpecialOffer);
    const handlePackageClick = (Package) => {
        setSelectedPackage(pkg);
        setShowModal(true);
    };


    return (
        <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Travel Packages & Deals
                    </h1>

                    <p className="text-xl opacity-90 mb-6">
                    Discover our curated collection of all-inclusive travel packages
                    designed to create unforgettable experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                            View All Packages
                        </button>

                        <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                            Special Offers
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {/* Filter Section */}
        <section className="container mx-auto px-4 py-8 -mt-8 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                    <div className="relative">
                    <input
                        type="text"
                        placeholder="Search destinations, packages..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                    <select
                        className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                        <option value="all">All Destinations</option>
                        <option value="Bali, Indonesia">Bali, Indonesia</option>
                        <option value="Santorini, Greece">Santorini, Greece</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Tokyo, Japan">Tokyo, Japan</option>
                        <option value="Serengeti, Tanzania">Serengeti, Tanzania</option>
                        <option value="San Jose, Costa Rica">Costa Rica</option>
                        <option value="Paris, France">France</option>
                        <option value="Orlando, USA">Orlando, USA</option>
                        <option value="Venice, Italy">Italy</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <div className="relative">
                    <select
                        className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                        <option value="all">All Durations</option>
                        <option value="3-5">3-5 Days</option>
                        <option value="6-9">6-9 Days</option>
                        <option value="10-15">10-15 Days</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <div className="relative">
                    <select
                        className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                        <option value="popularity">Sort by: Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="duration">Duration</option>
                        <option value="rating">Rating</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Price Range:</span>
                            
                            <span className="text-sm font-medium">
                                ${priceRange[0]} - ${priceRange[1]}
                            </span>
                        </div>
                        <input
                            type="range"
                            min="500"
                            max="5000"
                            step="100"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            value={priceRange[1]}
                            onChange={(e) =>
                            setPriceRange([priceRange[0], parseInt(e.target.value)])
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
        {/* Package Categories */}
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Browse by Category
            </h2>

            <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
                {packageCategories.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex-shrink-0 flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all ${
                            activeCategory === category.id
                            ? "bg-blue-500 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`} 
                        >

                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                            activeCategory === category.id
                                ? "bg-white bg-opacity-20"
                                : "bg-blue-50"
                            }`}
                        >
                            <i
                                className={`fas ${category.icon} ${activeCategory === category.id ? "text-white" : "text-blue-500"}`}
                            ></i>
                        </div>

                        <span className="text-sm font-medium whitespace-nowrap">
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
        {/* Featured Packages */}
        <section className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Featured Travel Packages
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                <div
                    key={pkg.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <div className="relative">
                        <img
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-full h-56 object-cover object-top"
                        />

                        {pkg.discount && (
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {pkg.discount}% OFF
                            </div>
                        )}

                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100">
                            <i className="far fa-heart text-gray-600"></i>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs !rounded-button whitespace-nowrap">
                            {pkg.duration} Days
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                            {pkg.title}
                            </h3>
                            
                            <div className="flex items-center">
                                <i className="fas fa-star text-yellow-400 mr-1 text-sm"></i>
                                <span className="text-sm font-medium">{pkg.rating}</span>

                                <span className="text-xs text-gray-500 ml-1">
                                    ({pkg.reviews})
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <i className="fas fa-map-marker-alt text-red-500 mr-2 text-sm"></i>
                            <span className="text-sm text-gray-600">
                            {pkg.location}
                            </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {pkg.amenities.includes("flight") && (
                            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center">
                                <i className="fas fa-plane-departure mr-1"></i>
                                <span>Flight</span>
                            </div>
                            )}

                            {pkg.amenities.includes("hotel") && (
                            <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs flex items-center">
                                <i className="fas fa-hotel mr-1"></i>
                                <span>Hotel</span>
                            </div>
                            )}

                            {pkg.amenities.includes("meals") && (
                            <div className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full text-xs flex items-center">
                                <i className="fas fa-utensils mr-1"></i>
                                <span>Meals</span>
                            </div>
                            )}

                            {pkg.amenities.includes("activities") && (
                            <div className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs flex items-center">
                                <i className="fas fa-hiking mr-1"></i>
                                <span>Activities</span>
                            </div>
                            )}
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="text-sm text-gray-500">
                                    Starting from
                                </span>
                                <div className="flex items-center">
                                    {pkg.discountedPrice ? (
                                    <>
                                        <span className="text-xl font-bold text-gray-800">
                                        {pkg.discountedPrice}
                                        </span>
                                        <span className="text-sm text-gray-500 line-through ml-2">
                                        {pkg.price}
                                        </span>
                                    </>
                                    ) : (
                                    <span className="text-xl font-bold text-gray-800">
                                        {pkg.price}
                                    </span>
                                    )}
                                </div>
                                
                                <span className="text-xs text-gray-500">per person</span>
                            </div>
                            <button
                                onClick={() => handlePackageClick(pkg)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            : (
            <div className="bg-white rounded-xl p-8 text-center">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No packages found
                </h3>
                <p className="text-gray-600 mb-4">
                Try adjusting your filters or search criteria
                </p>
                <button
                onClick={() => {
                    setSearchQuery("");
                    setDestinationFilter("all");
                    setDurationFilter("all");
                    setPriceRange([500, 5000]);
                    setActiveCategory("all");
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
                >
                Reset Filters
                </button>
            </div>
            )
        </section>
        {/* Special Offers */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden">
                <div className="p-8 text-white">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">
                            Limited Time Special Offers
                            </h2>

                            <p className="opacity-90">
                            Exclusive deals that won't last long
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                            <i className="fas fa-clock mr-2"></i>
                            <span className="font-mono">{formatTime(timeLeft)}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {specialOffers.slice(0, 2).map((offer) => (
                            <div
                            key={offer.id}
                            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-5 hover:bg-opacity-15 transition-all duration-300"
                            >
                            <div className="flex">
                                <div className="w-1/3">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-32 object-cover object-top rounded-lg"
                                />
                                </div>
                                <div className="w-2/3 pl-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold">{offer.title}</h3>
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    SAVE {offer.discount}%
                                    </div>
                                </div>
                                <div className="flex items-center mb-3">
                                    <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
                                    <span className="text-sm opacity-90">
                                    {offer.location}
                                    </span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-calendar-alt mr-2 text-sm"></i>
                                    <span className="text-sm opacity-90">
                                    {offer.duration} Days
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                    <span className="text-sm opacity-75">From</span>
                                    <div className="flex items-center">
                                        <span className="text-xl font-bold">
                                        ${offer.discountedPrice}
                                        </span>
                                        <span className="text-sm opacity-75 line-through ml-2">
                                        ${offer.price}
                                        </span>
                                    </div>
                                    </div>
                                    <button
                                    onClick={() => handlePackageClick(offer)}
                                    className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer"
                                    >
                                    Book Now
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                        View All Special Offers
                    </button>
                    </div>
                </div>
            </div>
        </section>
        {/* Newsletter */}
        <section className="container mx-auto px-4 py-12">
            <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Get Exclusive Travel Deals
                    </h2>

                    <p className="text-gray-600 mb-8">
                    Subscribe to our newsletter and be the first to know about special
                    offers, new destinations, and travel tips.
                    </p>
                
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        By subscribing, you agree to our Privacy Policy and consent to
                        receive updates from our company.
                    </p>
                </div>
            </div>
        </section>
    
        {/* Booking Modal */}
        {showBookingModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full">
                <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                    Start Your Journey
                </h2>
                <button
                    id="closeBookingModalBtn"
                    onClick={() => setShowBookingModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <i className="fas fa-times"></i>
                </button>
                </div>
                <div className="p-6">
                <div className="space-y-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Destination
                    </label>
                    <select
                        id="destinationSelect"
                        value={bookingForm.destination}
                        onChange={(e) =>
                        setBookingForm({
                            ...bookingForm,
                            destination: e.target.value,
                        })
                        }
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select destination</option>
                        <option value="Bali, Indonesia">Bali, Indonesia</option>
                        <option value="Santorini, Greece">Santorini, Greece</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Tokyo, Japan">Tokyo, Japan</option>
                        <option value="Serengeti, Tanzania">
                        Serengeti, Tanzania
                        </option>
                        <option value="San Jose, Costa Rica">Costa Rica</option>
                        <option value="Paris, France">France</option>
                        <option value="Orlando, USA">Orlando, USA</option>
                        <option value="Venice, Italy">Italy</option>
                    </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                        </label>
                        <input
                        id="startDateInput"
                        type="date"
                        value={bookingForm.startDate}
                        onChange={(e) =>
                            setBookingForm({
                            ...bookingForm,
                            startDate: e.target.value,
                            })
                        }
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                        </label>
                        <input
                        id="endDateInput"
                        type="date"
                        value={bookingForm.endDate}
                        onChange={(e) =>
                            setBookingForm({
                            ...bookingForm,
                            endDate: e.target.value,
                            })
                        }
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Travelers
                    </label>
                    <input
                        id="travelersInput"
                        type="number"
                        min="1"
                        max="10"
                        value={bookingForm.travelers}
                        onChange={(e) =>
                        setBookingForm({
                            ...bookingForm,
                            travelers: parseInt(e.target.value),
                        })
                        }
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range (USD)
                    </label>
                    <div className="flex items-center space-x-4">
                        <input
                        id="minBudgetInput"
                        type="number"
                        min="500"
                        max="10000"
                        value={bookingForm.minBudget}
                        onChange={(e) =>
                            setBookingForm({
                            ...bookingForm,
                            minBudget: parseInt(e.target.value),
                            })
                        }
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Min"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                        id="maxBudgetInput"
                        type="number"
                        min="500"
                        max="10000"
                        value={bookingForm.maxBudget}
                        onChange={(e) =>
                            setBookingForm({
                            ...bookingForm,
                            maxBudget: parseInt(e.target.value),
                            })
                        }
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Max"
                        />
                    </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                    id="cancelBookingBtn"
                    onClick={() => setShowBookingModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium !rounded-button whitespace-nowrap"
                    >
                    Cancel
                    </button>
                    <button
                    id="findPackagesBtn"
                    onClick={() => {
                        setShowBookingModal(false);
                        setDestinationFilter(bookingForm.destination);
                        setPriceRange([
                        bookingForm.minBudget,
                        bookingForm.maxBudget,
                        ]);
                    }}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium !rounded-button whitespace-nowrap"
                    >
                    Find Packages
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}

        {/* Package Details Modal */}
        {showModal && selectedPackage && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="relative">
                        <img
                            src={selectedPackage.image}
                            alt={selectedPackage.title}
                            className="w-full h-64 object-cover object-top"
                        />
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg cursor-pointer"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        {selectedPackage.discount && (
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {selectedPackage.discount}% OFF
                            </div>
                        )}
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {selectedPackage.title}
                                </h2>
                                <div className="flex items-center mt-1">
                                    <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                                    <span className="text-gray-600">
                                    {selectedPackage.location}
                                    </span>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="flex items-center mb-1">
                                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                                    <span className="font-medium">
                                    {selectedPackage.rating}
                                    </span>
                                    <span className="text-gray-500 ml-1">
                                    ({selectedPackage.reviews} reviews)
                                    </span>
                                </div>

                                <div className="text-sm text-gray-600">
                                    {selectedPackage.duration} days
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-b py-4 my-4">
                            <h3 className="text-lg font-semibold mb-2">
                            Package Description
                            </h3>
                            <p className="text-gray-600">{selectedPackage.description}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Itinerary</h3>

                            <ul className="space-y-2">
                                {selectedPackage.itinerary.map((day, index) => (
                                    <li key={index} className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-blue-600 text-sm font-medium">
                                        {index + 1}
                                        </span>
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-gray-700">{day}</span>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">
                            Included Amenities
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {selectedPackage.amenities.includes("flight") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-plane-departure text-blue-500 mr-2"></i>
                                    <span className="text-gray-700">Flight</span>
                                </div>
                            )}
                            {selectedPackage.amenities.includes("hotel") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-hotel text-green-500 mr-2"></i>
                                    <span className="text-gray-700">Accommodation</span>
                                </div>
                            )}
                            {selectedPackage.amenities.includes("meals") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-utensils text-yellow-500 mr-2"></i>
                                    <span className="text-gray-700">Meals</span>
                                </div>
                            )}
                            {selectedPackage.amenities.includes("activities") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-hiking text-purple-500 mr-2"></i>
                                    <span className="text-gray-700">Activities</span>
                                </div>
                            )}
                            {selectedPackage.amenities.includes("safari") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-binoculars text-orange-500 mr-2"></i>
                                    <span className="text-gray-700">Safari</span>
                                </div>
                            )}
                            {selectedPackage.amenities.includes("cruise") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-ship text-blue-500 mr-2"></i>
                                    <span className="text-gray-700">Cruise</span>
                                </div>
                            )}
                            {selectedPackage.amenities.includes("park passes") && (
                                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                                    <i className="fas fa-ticket-alt text-pink-500 mr-2"></i>
                                    <span className="text-gray-700">Park Passes</span>
                                </div>
                            )}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-xl">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div>
                                    <span className="text-gray-600">Price per person</span>

                                    <div className="flex items-center">
                                        {selectedPackage.discountedPrice ? (
                                            <>
                                            <span className="text-3xl font-bold text-gray-800">
                                                {selectedPackage.discountedPrice}
                                            </span>
                                            <span className="text-lg text-gray-500 line-through ml-2">
                                                {selectedPackage.price}
                                            </span>
                                            </>
                                        ) : (
                                            <span className="text-3xl font-bold text-gray-800">
                                            {selectedPackage.price}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
  );
}