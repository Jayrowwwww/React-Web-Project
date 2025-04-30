import React, { useState } from "react";

export default function About() {
    // Team members data
    const teamMembers = [
        {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO & Founder",
        bio: "With over 20 years in the aviation industry, Sarah founded SKYWINGS with a vision to transform the travel experience.",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520confident%2520female%2520executive%2520in%2520her%252040s%2520with%2520shoulder%2520length%2520hair%2520and%2520business%2520attire%252C%2520neutral%2520background%252C%2520warm%2520smile%252C%2520looking%2520directly%2520at%2520camera%252C%2520high%2520quality%2520corporate%2520portrait%2520with%2520soft%2520professional%2520lighting&width=300&height=300&seq=101&orientation=squarish",
        },
        {
        id: 2,
        name: "Michael Chen",
        position: "Chief Operations Officer",
        bio: "Michael brings his expertise in global operations and logistics to ensure SKYWINGS delivers exceptional service worldwide.",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520an%2520Asian%2520male%2520executive%2520in%2520his%252030s%2520wearing%2520business%2520attire%252C%2520confident%2520expression%252C%2520neutral%2520background%252C%2520corporate%2520portrait%2520with%2520professional%2520lighting%252C%2520high%2520quality%2520professional%2520photograph%2520for%2520company%2520website&width=300&height=300&seq=102&orientation=squarish",
        },
        {
        id: 3,
        name: "Amara Okafor",
        position: "Customer Experience Director",
        bio: "Amara leads our customer satisfaction initiatives, ensuring every SKYWINGS journey exceeds expectations.",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520Black%2520female%2520executive%2520in%2520her%252030s%2520with%2520natural%2520hair%2520and%2520business%2520attire%252C%2520warm%2520smile%252C%2520neutral%2520background%252C%2520confident%2520pose%252C%2520high%2520quality%2520corporate%2520portrait%2520with%2520professional%2520lighting%2520for%2520company%2520website&width=300&height=300&seq=103&orientation=squarish",
        },
        {
        id: 4,
        name: "David Rodriguez",
        position: "Chief Technology Officer",
        bio: "David oversees our digital infrastructure, implementing cutting-edge solutions to enhance the booking experience.",
        image:
            "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520Latino%2520male%2520executive%2520in%2520his%252030s%2520with%2520short%2520dark%2520hair%2520and%2520business%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520neutral%2520background%252C%2520high%2520quality%2520corporate%2520portrait%2520with%2520professional%2520lighting%2520for%2520technology%2520company%2520website&width=300&height=300&seq=104&orientation=squarish",
        },
    ];
    // Testimonials data
    const testimonials = [
        {
        id: 1,
        name: "Emma Thompson",
        location: "London, UK",
        quote:
            "SKYWINGS made our family vacation to Greece absolutely seamless. From booking to landing, every detail was handled with care.",
        rating: 5,
        image:
            "https://readdy.ai/api/search-image?query=Portrait%2520of%2520a%2520smiling%2520woman%2520in%2520her%252030s%2520with%2520blonde%2520hair%2520against%2520neutral%2520background%252C%2520natural%2520lighting%252C%2520casual%2520smart%2520attire%252C%2520friendly%2520expression%252C%2520high%2520quality%2520professional%2520photograph%2520with%2520soft%2520focus&width=100&height=100&seq=105&orientation=squarish",
        },
        {
        id: 2,
        name: "James Wilson",
        location: "Sydney, Australia",
        quote:
            "As a frequent business traveler, I appreciate SKYWINGS' efficiency and attention to detail. Their premium service has made travel enjoyable again.",
        rating: 5,
        image:
            "https://readdy.ai/api/search-image?query=Portrait%2520of%2520a%2520professional%2520man%2520in%2520his%252040s%2520with%2520short%2520hair%2520and%2520business%2520casual%2520attire%252C%2520confident%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photograph%2520with%2520soft%2520lighting&width=100&height=100&seq=106&orientation=squarish",
        },
        {
        id: 3,
        name: "Priya Sharma",
        location: "Mumbai, India",
        quote:
            "The personalized service from SKYWINGS made our honeymoon trip unforgettable. Their attention to special occasions is truly remarkable.",
        rating: 5,
        image:
            "https://readdy.ai/api/search-image?query=Portrait%2520of%2520an%2520Indian%2520woman%2520in%2520her%252020s%2520with%2520long%2520dark%2520hair%2520and%2520casual%2520smart%2520attire%252C%2520warm%2520smile%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photograph%2520with%2520soft%2520lighting&width=100&height=100&seq=107&orientation=squarish",
        },
    ];
    // Company Timeline data
    const timelineEvents = [
        {
        year: "2010",
        title: "Company Founded",
        description:
            "SKYWINGS was established with a mission to revolutionize air travel experiences.",
        },
        {
        year: "2013",
        title: "International Expansion",
        description:
            "Expanded services to cover 50+ international destinations across 4 continents.",
        },
        {
        year: "2017",
        title: "Premium Partnership Program",
        description:
            "Launched exclusive partnerships with luxury resorts and travel services worldwide.",
        },
        {
        year: "2021",
        title: "Digital Transformation",
        description:
            "Introduced AI-powered booking platform for personalized travel recommendations.",
        },
        {
        year: "2024",
        title: "Sustainability Initiative",
        description:
            "Committed to carbon-neutral operations with our Green Skies program.",
        },
    ];
    // State for active testimonial
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    // Testimonial navigation
    const nextTestimonial = () => {
        setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
        );
    };
    const prevTestimonial = () => {
        setActiveTestimonial((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1,
        );
    };
    return (
        <div className="min-h-screen bg-white">
        {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                <img
                    src="https://readdy.ai/api/search-image?query=Modern%2520corporate%2520office%2520interior%2520with%2520blue%2520accent%2520lighting%252C%2520large%2520windows%2520with%2520city%2520view%252C%2520sleek%2520furniture%2520and%2520aviation%2520themed%2520elements%252C%2520professional%2520workspace%2520with%2520subtle%2520airplane%2520motifs%252C%2520elegant%2520reception%2520area%2520with%2520company%2520logo%252C%2520bright%2520airy%2520atmosphere&width=1440&height=600&seq=108&orientation=landscape"
                    alt="SKYWINGS Office"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-8 py-24 relative z-10">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Our <span className="text-blue-300">Story</span>
                    </h1>
                    <p className="text-lg text-blue-50 mb-8">
                    Since 2010, SKYWINGS has been dedicated to transforming the way
                    people experience air travel. What began as a small charter
                    service has grown into a global aviation company committed to
                    excellence, innovation, and unforgettable journeys.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                    Our Services
                    </button>
                </div>
                </div>
            </section>
            {/* Company History Timeline */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Journey Through The Years
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    From our humble beginnings to becoming a leader in the aviation
                    industry, our path has been defined by innovation, dedication, and a
                    passion for exceptional travel experiences.
                </p>
                </div>
                <div className="relative">
                {/* Timeline center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
                {/* Timeline events */}
                <div className="space-y-12">
                    {timelineEvents.map((event, index) => (
                    <div
                        key={index}
                        className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >
                        <div className="w-1/2"></div>
                        <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                        <i className="fas fa-plane text-white"></i>
                        </div>
                        <div
                        className={`w-1/2 p-6 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                        >
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <span className="text-blue-500 text-2xl font-bold">
                            {event.year}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-800 mt-2">
                            {event.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{event.description}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            {/* Mission & Values */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Mission & Values
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    At SKYWINGS, we're guided by a clear mission and core values that
                    shape every aspect of our service.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i className="fas fa-compass text-blue-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Our Mission
                    </h3>
                    <p className="text-gray-600">
                        To connect people with extraordinary destinations through safe,
                        comfortable, and memorable flight experiences that exceed
                        expectations at every altitude.
                    </p>
                    </div>
                    {/* Vision */}
                    <div className="bg-blue-500 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                        <i className="fas fa-eye text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-blue-50">
                        To be the world's most trusted aviation company, setting new
                        standards for customer-centric travel experiences while leading
                        the industry in innovation and sustainability.
                    </p>
                    </div>
                    {/* Values */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i className="fas fa-heart text-blue-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Our Values
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                        <li className="flex items-center">
                        <i className="fas fa-check text-blue-500 mr-2"></i> Safety
                        Above All
                        </li>
                        <li className="flex items-center">
                        <i className="fas fa-check text-blue-500 mr-2"></i> Customer
                        Excellence
                        </li>
                        <li className="flex items-center">
                        <i className="fas fa-check text-blue-500 mr-2"></i> Innovation
                        & Adaptability
                        </li>
                        <li className="flex items-center">
                        <i className="fas fa-check text-blue-500 mr-2"></i>{" "}
                        Environmental Responsibility
                        </li>
                        <li className="flex items-center">
                        <i className="fas fa-check text-blue-500 mr-2"></i> Integrity
                        & Transparency
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            {/* Achievement Showcase */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Achievements
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Numbers that reflect our commitment to excellence and customer
                    satisfaction.
                </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                    <div className="text-4xl font-bold text-blue-500 mb-2">15</div>
                    <p className="text-gray-600">Years in Business</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                    <div className="text-4xl font-bold text-blue-500 mb-2">250K+</div>
                    <p className="text-gray-600">Flights Completed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                    <div className="text-4xl font-bold text-blue-500 mb-2">120+</div>
                    <p className="text-gray-600">Destinations Served</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                    <div className="text-4xl font-bold text-blue-500 mb-2">1.5M+</div>
                    <p className="text-gray-600">Happy Customers</p>
                </div>
                </div>
            </section>
            {/* Team Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Meet Our Leadership Team
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    The passionate professionals behind SKYWINGS who work tirelessly
                    to ensure your journey is extraordinary.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                        <div className="h-64 overflow-hidden">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        </div>
                        <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {member.name}
                        </h3>
                        <p className="text-blue-500 mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                        <div className="mt-4 flex space-x-3">
                            <a
                            href="#"
                            className="text-gray-400 hover:text-blue-500 cursor-pointer"
                            >
                            <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                            href="#"
                            className="text-gray-400 hover:text-blue-500 cursor-pointer"
                            >
                            <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            {/* Customer Testimonials */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it – hear from travelers who have
                        experienced the SKYWINGS difference.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
                                    <img
                                        src={testimonials[activeTestimonial].image}
                                        alt={testimonials[activeTestimonial].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="md:w-3/4 md:pl-8">
                                <div className="text-blue-500 mb-4">
                                    {[...Array(testimonials[activeTestimonial].rating)].map(
                                        (_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                        ),
                                    )}
                                    </div>

                                    <p className="text-gray-600 italic mb-4 text-lg">
                                    "{testimonials[activeTestimonial].quote}"
                                    </p>
                                <div>

                                    <p className="font-semibold text-gray-800">
                                        {testimonials[activeTestimonial].name}
                                    </p>

                                    <p className="text-gray-500 text-sm">
                                        {testimonials[activeTestimonial].location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 !rounded-button whitespace-nowrap"
                            >
                            <i className="fas fa-chevron-left text-gray-600"></i>
                        </button>
                    </div>

                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full bg-blue-500 shadow-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
                            >
                            <i className="fas fa-chevron-right text-white"></i>
                        </button>
                    </div>
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-3 h-3 rounded-full ${activeTestimonial === index ? "bg-blue-500" : "bg-gray-300"} cursor-pointer`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                        ))}
                    </div>
                </div>
            </section>
            {/* Awards & Recognition */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Awards & Recognition
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                        Our commitment to excellence has been recognized by industry
                        leaders and organizations worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fas fa-award"></i>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Best Airline Service
                            </h3>

                            <p className="text-gray-500 text-sm">Global Travel Awards 2024</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Customer Satisfaction
                            </h3>
                            <p className="text-gray-500 text-sm">
                                International Service Excellence
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Green Initiative
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Sustainable Aviation Council
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fas fa-star"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                5-Star Rating
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Skytrax World Airline Rating
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call-to-Action */}
            <section className="relative py-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=Commercial%2520passenger%2520airplane%2520flying%2520through%2520beautiful%2520sunset%2520sky%2520with%2520golden%2520and%2520pink%2520clouds%252C%2520view%2520from%2520window%2520seat%252C%2520dramatic%2520aerial%2520perspective%2520of%2520aircraft%2520wing%2520against%2520colorful%2520horizon%252C%2520peaceful%2520travel%2520moment%2520captured%2520in%2520high%2520resolution&width=1440&height=400&seq=109&orientation=landscape"
                        alt="Airplane flying through sunset"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gray-900/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-2xl mx-auto text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Experience the SKYWINGS Difference?
                        </h2>
                        
                        <p className="text-lg mb-8">
                        Join thousands of satisfied travelers who have discovered the
                        perfect blend of comfort, convenience, and exceptional service
                        that defines the SKYWINGS experience.
                        </p>

                        <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
                        Book Your Journey Today
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}