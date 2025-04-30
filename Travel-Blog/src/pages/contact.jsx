import React, { useState } from "react";

export default function Contact() {
    // Contact form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    // Form validation state
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    // Form submission state
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmitting, setFormSubmitting] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));

        // Clear error when user starts typing
        if (formErrors) {
        setFormErrors((prev) => ({
            ...prev,
            [name]: false,
        }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        const errors = {
        name: formData.name.trim() === "",
        email: !/^\S+@\S+\.\S+$/.test(formData.email),
        message: formData.message.trim() === "",
        };

        setFormErrors(errors);

        // If no errors, submit form
        if (!errors.name && !errors.email && !errors.message) {
        setFormSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setFormSubmitting(false);
            setFormSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: "",
                email: "",
                subject: "General Inquiry",
                message: "",
            });
            }, 3000);
        }, 1500);
        }
    };

    // Toggle live chat
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <i className="fas fa-plane text-white text-sm"></i>
                </div>
                SKYWINGS
            </div>
            </div>
            <nav className="hidden md:flex space-x-8">
            <a
                href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/799818ae-88ef-4703-b30e-6982d9149ddc"
                data-readdy="true"
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
            >
                ABOUT
            </a>
            <a
                href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/a5bc0dc3-e766-45eb-9400-675fbd0e716a"
                data-readdy="true"
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
            >
                TOUR
            </a>
            <a
                href="#"
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
            >
                PACKAGE
            </a>
            <a href="#" className="text-blue-500 font-medium cursor-pointer">
                CONTACT
            </a>
            </nav>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
            Book Trip
            </button>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
            <img
                src="https://readdy.ai/api/search-image?query=Modern%2520office%2520building%2520with%2520travel%2520agency%2520interior%2520visible%2520through%2520glass%2520windows%252C%2520professional%2520business%2520environment%2520with%2520blue%2520sky%2520and%2520cityscape%2520in%2520background%252C%2520gradient%2520fade%2520to%2520darker%2520blue%2520on%2520left%2520side%2520for%2520text%2520overlay%252C%2520clean%2520architectural%2520lines%252C%2520welcoming%2520entrance%2520with%2520subtle%2520travel%2520themed%2520elements&width=1440&height=500&seq=301&orientation=landscape"
                alt="SKYWINGS Office"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
            </div>
            <div className="container mx-auto px-8 py-24 relative z-10">
            <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-blue-300">Touch</span>
                </h1>
                <p className="text-lg text-blue-50 mb-8">
                We're here to answer any questions you may have about our travel
                services. Reach out to us and we'll respond as soon as we can.
                </p>
                <div className="flex flex-wrap gap-4">
                <a
                    href="#contact-form"
                    className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                    Contact Us Now
                </a>
                <a
                    href="#map"
                    className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                    <i className="fas fa-map-marker-alt mr-2"></i> Find Our Location
                </a>
                </div>
            </div>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-500">
                <a
                href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/a5bc0dc3-e766-45eb-9400-675fbd0e716a"
                data-readdy="true"
                className="hover:text-blue-500 cursor-pointer"
                >
                Home
                </a>
                <i className="fas fa-chevron-right mx-2 text-xs text-gray-400"></i>
                <span className="text-gray-700">Contact Us</span>
            </div>
            </div>
        </div>

        {/* Contact Information Section */}
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
                </h2>

                {/* Office Address */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-map-marker-alt text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Our Office
                </h3>
                <p className="text-gray-600 mb-2">
                    123 Aviation Way, Skyline Tower
                </p>
                <p className="text-gray-600">New York, NY 10001, USA</p>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-phone-alt text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Contact Details
                </h3>
                <p className="text-gray-600 mb-2">
                    <span className="font-medium">Phone:</span> +1 (555) 123-4567
                </p>
                <p className="text-gray-600 mb-2">
                    <span className="font-medium">Email:</span> info@skywings.com
                </p>
                <p className="text-gray-600">
                    <span className="font-medium">Fax:</span> +1 (555) 987-6543
                </p>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-clock text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Business Hours
                </h3>
                <ul className="text-gray-600 space-y-2">
                    <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                    </li>
                </ul>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-share-alt text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Connect With Us
                </h3>
                <div className="flex space-x-4">
                    <a
                    href="#"
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                    <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                    href="#"
                    className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors cursor-pointer"
                    >
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a
                    href="#"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors cursor-pointer"
                    >
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a
                    href="#"
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-1 lg:col-span-2" id="contact-form">
                <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Send Us a Message
                </h2>

                {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-check text-green-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                        Thank you for contacting us. We'll get back to you shortly.
                    </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                        <label className="text-gray-700 font-medium mb-2 block">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full bg-gray-50 border ${formErrors.name ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-700`}
                            placeholder="Enter your full name"
                        />
                        {formErrors.name && (
                            <p className="text-red-500 text-sm mt-1">
                            Please enter your name
                            </p>
                        )}
                        </div>

                        {/* Email Field */}
                        <div>
                        <label className="text-gray-700 font-medium mb-2 block">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full bg-gray-50 border ${formErrors.email ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-700`}
                            placeholder="Enter your email address"
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">
                            Please enter a valid email address
                            </p>
                        )}
                        </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label className="text-gray-700 font-medium mb-2 block">
                        Subject
                        </label>
                        <div className="relative">
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none text-gray-700"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Booking Question">
                            Booking Question
                            </option>
                            <option value="Tour Information">
                            Tour Information
                            </option>
                            <option value="Feedback">Feedback</option>
                            <option value="Partnership">Partnership</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="text-gray-700 font-medium mb-2 block">
                        Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-50 border ${formErrors.message ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-gray-700 h-32`}
                        placeholder="How can we help you?"
                        ></textarea>
                        {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">
                            Please enter your message
                        </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                        type="submit"
                        disabled={formSubmitting}
                        className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer disabled:bg-blue-300"
                        >
                        {formSubmitting ? (
                            <span className="flex items-center">
                            <i className="fas fa-circle-notch fa-spin mr-2"></i>{" "}
                            Sending...
                            </span>
                        ) : (
                            <span>Send Message</span>
                        )}
                        </button>
                    </div>
                    </form>
                )}
                </div>
            </div>
            </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Find Us on the Map
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our office in the heart of New York City. We're conveniently
                located near major transportation hubs.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 relative">
                {/* Map iframe - using Google Maps embed */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573814098!2d-73.98784492346304!3d40.75046597138789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682531529870!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SKYWINGS Office Location"
                ></iframe>

                {/* Map Controls */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 md:max-w-md">
                    <h3 className="font-semibold text-gray-800 mb-2">
                    SKYWINGS Travel Agency
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                    123 Aviation Way, Skyline Tower, New York, NY 10001
                    </p>
                    <div className="flex flex-wrap gap-2">
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                    >
                        <i className="fas fa-directions mr-1"></i> Get Directions
                    </a>
                    <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-parking mr-1"></i> Parking Info
                    </button>
                    <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        <i className="fas fa-subway mr-1"></i> Public Transit
                    </button>
                    </div>
                </div>
                </div>

                {/* Additional Location Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="p-6 flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-subway text-blue-500"></i>
                    </div>
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                        Public Transportation
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Accessible via subway lines A, C, E, 1, 2, 3 at 34th Street
                        Station
                    </p>
                    </div>
                </div>
                <div className="p-6 flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-parking text-blue-500"></i>
                    </div>
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Parking</h3>
                    <p className="text-gray-600 text-sm">
                        Public parking available at 35th Street Garage (2-minute
                        walk)
                    </p>
                    </div>
                </div>
                <div className="p-6 flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-utensils text-blue-500"></i>
                    </div>
                    <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                        Nearby Amenities
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Restaurants, cafes, and shops within walking distance
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                More Ways to Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the most convenient way to get in touch with our team of
                travel experts.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-whatsapp text-green-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                WhatsApp
                </h3>
                <p className="text-gray-600 mb-6">
                Chat with our team directly through WhatsApp for quick responses
                to your travel questions.
                </p>
                <a
                href="https://wa.me/15551234567"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                <i className="fab fa-whatsapp mr-2"></i> Message Us
                </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-question text-purple-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">FAQ</h3>
                <p className="text-gray-600 mb-6">
                Find answers to commonly asked questions about our tours, booking
                process, and travel policies.
                </p>
                <a
                href="#"
                className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                <i className="fas fa-book-open mr-2"></i> View FAQ
                </a>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone-alt text-red-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Emergency Contact
                </h3>
                <p className="text-gray-600 mb-6">
                For urgent matters or assistance during your trip, our emergency
                support line is available 24/7.
                </p>
                <a
                href="tel:+18889876543"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                <i className="fas fa-exclamation-circle mr-2"></i> +1 (888)
                987-6543
                </a>
            </div>
            </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-blue-50 py-16">
            <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 mb-8">
                Stay updated with our latest travel deals, new destinations, and
                travel tips delivered directly to your inbox.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700"
                />
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    Subscribe Now
                </button>
                </div>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                <div className="text-2xl font-bold flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                    <i className="fas fa-plane text-white text-sm"></i>
                    </div>
                    SKYWINGS
                </div>
                <p className="text-gray-400 mb-4">
                    Elevating your travel experience since 2010.
                </p>
                <div className="flex space-x-4">
                    <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                    >
                    <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                    >
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                    >
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                    >
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li>
                    <a
                        href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/799818ae-88ef-4703-b30e-6982d9149ddc"
                        data-readdy="true"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                        About Us
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/a5bc0dc3-e766-45eb-9400-675fbd0e716a"
                        data-readdy="true"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                        Tours
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                        Destinations
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                        Travel Guides
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 text-blue-400"></i>
                    <span className="text-gray-400">
                        123 Aviation Way, Skyline Tower, New York, NY 10001
                    </span>
                    </li>
                    <li className="flex items-center">
                    <i className="fas fa-phone mr-2 text-blue-400"></i>
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center">
                    <i className="fas fa-envelope mr-2 text-blue-400"></i>
                    <span className="text-gray-400">info@skywings.com</span>
                    </li>
                </ul>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">
                    Subscribe to receive updates on special offers and news.
                </p>
                <div className="flex">
                    <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-full w-full border-none text-sm"
                    />
                    <button className="bg-blue-500 px-4 py-2 rounded-r-full !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
                <div className="mt-4 flex space-x-3">
                    <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                    <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                    <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                    <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
                </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; 2025 SKYWINGS. All rights reserved.</p>
            </div>
            </div>
        </footer>

        {/* Live Chat Widget */}
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${chatOpen ? "scale-100" : "scale-0"}`}
        >
            <div className="bg-white rounded-xl shadow-2xl w-80">
            <div className="bg-blue-500 text-white p-4 rounded-t-xl flex justify-between items-center">
                <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                    <i className="fas fa-headset text-blue-500"></i>
                </div>
                <span className="font-medium">Live Chat Support</span>
                </div>
                <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200 cursor-pointer"
                >
                <i className="fas fa-times"></i>
                </button>
            </div>
            <div className="p-4 h-80 bg-gray-50 overflow-y-auto">
                <div className="flex flex-col space-y-3">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg rounded-tl-none max-w-xs ml-auto">
                    <p className="text-sm">Hello! How can we help you today?</p>
                    <span className="text-xs text-blue-600 block mt-1">
                    10:30 AM
                    </span>
                </div>
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-tr-none max-w-xs">
                    <p className="text-sm">
                    I'm interested in booking a tour to Japan.
                    </p>
                    <span className="text-xs text-gray-600 block mt-1">
                    10:32 AM
                    </span>
                </div>
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg rounded-tl-none max-w-xs ml-auto">
                    <p className="text-sm">
                    Great choice! We have several tours to Japan. What time of
                    year are you planning to visit?
                    </p>
                    <span className="text-xs text-blue-600 block mt-1">
                    10:33 AM
                    </span>
                </div>
                </div>
            </div>
            <div className="p-4 border-t border-gray-200">
                <div className="flex">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-l-lg px-4 py-2 text-gray-700 text-sm"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-paper-plane"></i>
                </button>
                </div>
            </div>
            </div>
        </div>

        {/* Chat Button */}
        <button
            onClick={() => setChatOpen(!chatOpen)}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 ${chatOpen ? "scale-0" : "scale-100"} !rounded-button whitespace-nowrap cursor-pointer`}
        >
            <i className="fas fa-comment-dots text-2xl"></i>
        </button>

        {/* WhatsApp Button */}
        <a
            href="https://wa.me/15551234567"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
        >
            <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        </div>  
  )
}
