// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";

export default function Book_Btn () {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: [{ firstName: "", lastName: "", age: "", passport: "" }],
    flightClass: "economy",
    paymentMethod: "credit",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const totalSteps = 6;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTravelerChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    const updatedTravelers = [...formData.travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    setFormData({ ...formData, travelers: updatedTravelers });
  };

  const addTraveler = () => {
    setFormData({
      ...formData,
      travelers: [
        ...formData.travelers,
        { firstName: "", lastName: "", age: "", passport: "" },
      ],
    });
  };

  const removeTraveler = (index: number) => {
    if (formData.travelers.length > 1) {
      const updatedTravelers = formData.travelers.filter((_, i) => i !== index);
      setFormData({ ...formData, travelers: updatedTravelers });
    }
  };

  const setFlightClass = (flightClass: string) => {
    setFormData({ ...formData, flightClass });
  };

  const setPaymentMethod = (paymentMethod: string) => {
    setFormData({ ...formData, paymentMethod });
  };

  const popularDestinations = [
    {
      id: 1,
      name: "Paris, France",
      image:
        "https://readdy.ai/api/search-image?query=Iconic%2520Paris%2520cityscape%2520with%2520Eiffel%2520Tower%2520during%2520golden%2520hour%252C%2520beautiful%2520sunset%2520sky%2520with%2520soft%2520clouds%252C%2520Seine%2520river%2520reflecting%2520city%2520lights%252C%2520historic%2520architecture%2520and%2520landmarks%2520visible%252C%2520romantic%2520atmosphere%2520with%2520warm%2520lighting%2520and%2520vibrant%2520colors%252C%2520perfect%2520travel%2520destination%2520photography&width=300&height=200&seq=10&orientation=landscape",
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      image:
        "https://readdy.ai/api/search-image?query=Modern%2520Tokyo%2520skyline%2520at%2520night%2520with%2520illuminated%2520skyscrapers%2520and%2520Tokyo%2520Tower%252C%2520busy%2520streets%2520with%2520neon%2520lights%252C%2520blend%2520of%2520traditional%2520and%2520futuristic%2520architecture%252C%2520vibrant%2520urban%2520scene%2520with%2520city%2520lights%2520reflecting%2520on%2520wet%2520streets%2520after%2520rain%252C%2520cinematic%2520photography&width=300&height=200&seq=11&orientation=landscape",
    },
    {
      id: 3,
      name: "New York, USA",
      image:
        "https://readdy.ai/api/search-image?query=Manhattan%2520skyline%2520with%2520iconic%2520skyscrapers%2520and%2520Empire%2520State%2520Building%252C%2520aerial%2520view%2520of%2520New%2520York%2520City%2520with%2520Central%2520Park%2520visible%252C%2520dramatic%2520clouds%2520and%2520blue%2520sky%252C%2520urban%2520landscape%2520with%2520Hudson%2520River%252C%2520modern%2520architecture%2520and%2520city%2520grid%2520layout%252C%2520professional%2520cityscape%2520photography&width=300&height=200&seq=12&orientation=landscape",
    },
    {
      id: 4,
      name: "Sydney, Australia",
      image:
        "https://readdy.ai/api/search-image?query=Sydney%2520Harbor%2520with%2520Opera%2520House%2520and%2520Harbor%2520Bridge%2520during%2520beautiful%2520sunset%252C%2520boats%2520in%2520the%2520harbor%252C%2520clear%2520blue%2520water%2520reflecting%2520city%2520lights%252C%2520iconic%2520Australian%2520landmarks%2520with%2520perfect%2520lighting%252C%2520vibrant%2520colors%2520and%2520dramatic%2520sky%252C%2520professional%2520travel%2520photography&width=300&height=200&seq=13&orientation=landscape",
    },
    {
      id: 5,
      name: "Dubai, UAE",
      image:
        "https://readdy.ai/api/search-image?query=Futuristic%2520Dubai%2520skyline%2520with%2520Burj%2520Khalifa%2520and%2520modern%2520skyscrapers%252C%2520luxury%2520city%2520in%2520the%2520desert%252C%2520aerial%2520view%2520showing%2520architectural%2520marvels%2520and%2520palm%2520islands%252C%2520dramatic%2520lighting%2520with%2520golden%2520sunset%252C%2520clear%2520sky%2520with%2520slight%2520desert%2520haze%252C%2520high-end%2520travel%2520destination&width=300&height=200&seq=14&orientation=landscape",
    },
    {
      id: 6,
      name: "Rome, Italy",
      image:
        "https://readdy.ai/api/search-image?query=Ancient%2520Rome%2520cityscape%2520with%2520Colosseum%2520and%2520Roman%2520Forum%2520ruins%252C%2520historic%2520architecture%2520under%2520beautiful%2520Mediterranean%2520sunset%252C%2520Italian%2520cypress%2520trees%2520and%2520terracotta%2520rooftops%252C%2520classic%2520European%2520city%2520with%2520rich%2520history%252C%2520warm%2520golden%2520light%2520and%2520dramatic%2520shadows%252C%2520professional%2520travel%2520photography&width=300&height=200&seq=15&orientation=landscape",
    },
  ];

  const renderProgressBar = () => {
    const steps = [
      { number: 1, name: "Destination" },
      { number: 2, name: "Dates" },
      { number: 3, name: "Travelers" },
      { number: 4, name: "Class" },
      { number: 5, name: "Payment" },
      { number: 6, name: "Confirmation" },
    ];

    return (
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center"
              onClick={() =>
                currentStep > step.number && setCurrentStep(step.number)
              }
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep === step.number
                    ? "bg-blue-500 text-white"
                    : currentStep > step.number
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                } ${currentStep > step.number ? "cursor-pointer" : ""}`}
              >
                {currentStep > step.number ? (
                  <i className="fas fa-check"></i>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`text-xs ${
                  currentStep === step.number
                    ? "text-blue-500 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-1 bg-gray-200 rounded">
          <div
            className="h-1 bg-blue-500 rounded transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  const renderDestinationStep = () => {
    return (
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Where would you like to go?
        </h2>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              placeholder="Search for a destination"
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() =>
                  setFormData({ ...formData, destination: destination.name })
                }
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">
                      {destination.name}
                    </h4>
                    <button
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        formData.destination === destination.name
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      } !rounded-button whitespace-nowrap cursor-pointer`}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          destination: destination.name,
                        })
                      }
                    >
                      {formData.destination === destination.name
                        ? "Selected"
                        : "Select"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderDatesStep = () => {
    // Simple calendar component
    const renderCalendar = () => {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      // Get days in current month
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Get first day of month
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
      const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start

      const calendarDays = [];

      // Add empty cells for days before the first day of month
      for (let i = 0; i < adjustedFirstDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="h-10"></div>);
      }

      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const isSelected =
          formData.departureDate === dateString ||
          formData.returnDate === dateString;
        const isInRange =
          formData.departureDate &&
          formData.returnDate &&
          dateString > formData.departureDate &&
          dateString < formData.returnDate;

        calendarDays.push(
          <div
            key={day}
            className={`h-10 flex items-center justify-center rounded-full cursor-pointer ${
              isSelected
                ? "bg-blue-500 text-white"
                : isInRange
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
            }`}
            onClick={() => {
              if (
                !formData.departureDate ||
                (formData.departureDate && formData.returnDate)
              ) {
                setFormData({
                  ...formData,
                  departureDate: dateString,
                  returnDate: "",
                });
              } else if (dateString > formData.departureDate) {
                setFormData({
                  ...formData,
                  returnDate: dateString,
                });
              }
            }}
          >
            {day}
          </div>,
        );
      }

      return (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })}{" "}
              {currentYear}
            </h3>
            <div className="flex space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div
                key={day}
                className="h-8 flex items-center justify-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
            {calendarDays}
          </div>
        </div>
      );
    };

    return (
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Select Your Travel Dates
        </h2>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Date
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              min={formData.departureDate}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Calendar View
          </h3>
          {renderCalendar()}
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Your Selection
          </h3>
          <div className="flex items-center text-gray-600 mb-1">
            <i className="fas fa-plane-departure mr-2 text-blue-500"></i>
            <span>
              Departure:{" "}
              {formData.departureDate
                ? new Date(formData.departureDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Not selected"}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <i className="fas fa-plane-arrival mr-2 text-blue-500"></i>
            <span>
              Return:{" "}
              {formData.returnDate
                ? new Date(formData.returnDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Not selected"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderTravelersStep = () => {
    return (
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Traveler Information
        </h2>

        {formData.travelers.map((traveler, index) => (
          <div
            key={index}
            className="mb-8 bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                Traveler {index + 1}
              </h3>
              {formData.travelers.length > 1 && (
                <button
                  onClick={() => removeTraveler(index)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <i className="fas fa-times"></i> Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={traveler.firstName}
                  onChange={(e) =>
                    handleTravelerChange(index, "firstName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={traveler.lastName}
                  onChange={(e) =>
                    handleTravelerChange(index, "lastName", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  value={traveler.age}
                  onChange={(e) =>
                    handleTravelerChange(index, "age", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter age"
                  min="0"
                  max="120"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Number
                </label>
                <input
                  type="text"
                  value={traveler.passport}
                  onChange={(e) =>
                    handleTravelerChange(index, "passport", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter passport number"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addTraveler}
          className="w-full p-3 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fas fa-plus mr-2"></i> Add Another Traveler
        </button>
      </div>
    );
  };

  const renderClassStep = () => {
    const flightClasses = [
      {
        id: "economy",
        name: "Economy",
        price: "$599",
        features: [
          "Standard legroom",
          "One meal included",
          "One carry-on bag",
          "In-flight entertainment",
        ],
      },
      {
        id: "business",
        name: "Business",
        price: "$1,499",
        features: [
          "Extra legroom",
          "Premium meals and drinks",
          "Two checked bags",
          "Priority boarding",
          "Lounge access",
        ],
      },
      {
        id: "first",
        name: "First Class",
        price: "$2,999",
        features: [
          "Luxury seating and bed",
          "Gourmet dining experience",
          "Three checked bags",
          "Personal cabin attendant",
          "Exclusive lounge access",
          "Chauffeur service",
        ],
      },
    ];

    return (
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Select Flight Class
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {flightClasses.map((flightClass) => (
            <div
              key={flightClass.id}
              className={`border rounded-lg overflow-hidden transition-all cursor-pointer ${
                formData.flightClass === flightClass.id
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200 hover:shadow-sm"
              }`}
              onClick={() => setFlightClass(flightClass.id)}
            >
              <div
                className={`p-4 ${formData.flightClass === flightClass.id ? "bg-blue-500 text-white" : "bg-gray-50"}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{flightClass.name}</h3>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      formData.flightClass === flightClass.id
                        ? "bg-white text-blue-500"
                        : "border border-gray-300"
                    }`}
                  >
                    {formData.flightClass === flightClass.id && (
                      <i className="fas fa-check text-xs"></i>
                    )}
                  </div>
                </div>
                <div className="text-xl font-bold mt-1">
                  {flightClass.price}
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {flightClass.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Your Selection
          </h3>
          <div className="flex items-center text-gray-600">
            <i className="fas fa-ticket-alt mr-2 text-blue-500"></i>
            <span>
              You've selected:{" "}
              <span className="font-medium">
                {formData.flightClass.charAt(0).toUpperCase() +
                  formData.flightClass.slice(1)}{" "}
                Class
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderPaymentStep = () => {
    const paymentMethods = [
      { id: "credit", name: "Credit Card", icon: "fa-credit-card" },
      { id: "paypal", name: "PayPal", icon: "fa-paypal" },
      { id: "apple", name: "Apple Pay", icon: "fa-apple-pay" },
    ];

    return (
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Payment Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`border rounded-lg p-4 flex items-center cursor-pointer transition-all ${
                formData.paymentMethod === method.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setPaymentMethod(method.id)}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  formData.paymentMethod === method.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <i className={`fab ${method.icon}`}></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{method.name}</h3>
              </div>
              <div className="ml-auto">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    formData.paymentMethod === method.id
                      ? "bg-blue-500 text-white border border-blue-500"
                      : "border border-gray-300"
                  }`}
                >
                  {formData.paymentMethod === method.id && (
                    <i className="fas fa-check text-xs"></i>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {formData.paymentMethod === "credit" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Credit Card Details
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={19}
                />
                <i className="fas fa-credit-card absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={4}
                  />
                  <i
                    className="fas fa-question-circle absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    title="3 or 4 digit security code"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        )}

        {formData.paymentMethod === "paypal" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 text-center">
            <i className="fab fa-paypal text-blue-600 text-4xl mb-4"></i>
            <p className="text-gray-600 mb-4">
              You will be redirected to PayPal to complete your payment
              securely.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
              Continue to PayPal
            </button>
          </div>
        )}

        {formData.paymentMethod === "apple" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 text-center">
            <i className="fab fa-apple text-black text-4xl mb-4"></i>
            <p className="text-gray-600 mb-4">
              You will be redirected to Apple Pay to complete your payment
              securely.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
              Continue with Apple Pay
            </button>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Order Summary
          </h3>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Destination:</span>
              <span className="font-medium">
                {formData.destination || "Not selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Departure:</span>
              <span className="font-medium">
                {formData.departureDate
                  ? new Date(formData.departureDate).toLocaleDateString()
                  : "Not selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Return:</span>
              <span className="font-medium">
                {formData.returnDate
                  ? new Date(formData.returnDate).toLocaleDateString()
                  : "Not selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Travelers:</span>
              <span className="font-medium">{formData.travelers.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Class:</span>
              <span className="font-medium">
                {formData.flightClass.charAt(0).toUpperCase() +
                  formData.flightClass.slice(1)}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-blue-500">
                {formData.flightClass === "economy"
                  ? `$${599 * formData.travelers.length}`
                  : formData.flightClass === "business"
                    ? `$${1499 * formData.travelers.length}`
                    : `$${2999 * formData.travelers.length}`}
              </span>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            <p>
              By proceeding with payment, you agree to our Terms & Conditions
              and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderConfirmationStep = () => {
    const bookingNumber = Math.floor(100000000 + Math.random() * 900000000);

    return (
      <div className="animate-fadeIn text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-green-500 text-3xl"></i>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 mb-6">
          Your booking has been successfully processed.
        </p>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 text-left">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Booking Details
            </h3>
            <span className="text-sm text-gray-500">April 30, 2025</span>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-ticket-alt text-blue-500"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">Booking Number</div>
                <div className="font-medium">{bookingNumber}</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-map-marker-alt text-blue-500"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">Destination</div>
                <div className="font-medium">
                  {formData.destination || "Not specified"}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-calendar-alt text-blue-500"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">Travel Dates</div>
                <div className="font-medium">
                  {formData.departureDate
                    ? new Date(formData.departureDate).toLocaleDateString()
                    : "Not specified"}{" "}
                  -{" "}
                  {formData.returnDate
                    ? new Date(formData.returnDate).toLocaleDateString()
                    : "Not specified"}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-users text-blue-500"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">Travelers</div>
                <div className="font-medium">
                  {formData.travelers.length}{" "}
                  {formData.travelers.length === 1 ? "person" : "people"}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-chair text-blue-500"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">Class</div>
                <div className="font-medium">
                  {formData.flightClass.charAt(0).toUpperCase() +
                    formData.flightClass.slice(1)}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Paid:</span>
              <span className="text-blue-500">
                {formData.flightClass === "economy"
                  ? `$${599 * formData.travelers.length}`
                  : formData.flightClass === "business"
                    ? `$${1499 * formData.travelers.length}`
                    : `$${2999 * formData.travelers.length}`}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="flex-1 bg-blue-50 text-blue-500 px-6 py-3 rounded-lg font-medium flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-download mr-2"></i> Download Itinerary
          </button>
          <button className="flex-1 bg-blue-50 text-blue-500 px-6 py-3 rounded-lg font-medium flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-envelope mr-2"></i> Email Confirmation
          </button>
          <button className="flex-1 bg-blue-50 text-blue-500 px-6 py-3 rounded-lg font-medium flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-share-alt mr-2"></i> Share Itinerary
          </button>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderDestinationStep();
      case 2:
        return renderDatesStep();
      case 3:
        return renderTravelersStep();
      case 4:
        return renderClassStep();
      case 5:
        return renderPaymentStep();
      case 6:
        return renderConfirmationStep();
      default:
        return renderDestinationStep();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/edb710e0-b463-4cf4-8423-1b2efa45dff4"
              data-readdy="true"
              className="cursor-pointer"
            >
              <div className="text-2xl font-bold text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-plane text-white text-sm"></i>
                </div>
                SKYWINGS
              </div>
            </a>
          </div>
          <a
            href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/edb710e0-b463-4cf4-8423-1b2efa45dff4"
            data-readdy="true"
            className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 min-h-[800px]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Book Your Trip
            </h1>
            {renderProgressBar()}
            {renderCurrentStep()}
          </div>

          {currentStep < totalSteps && (
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevStep}
                className={`px-6 py-3 rounded-lg font-medium flex items-center ${
                  currentStep === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 cursor-pointer"
                } !rounded-button whitespace-nowrap`}
                disabled={currentStep === 1}
              >
                <i className="fas fa-arrow-left mr-2"></i> Previous
              </button>

              <div className="flex space-x-4">
                <button className="text-gray-500 hover:text-gray-700 px-6 py-3 rounded-lg font-medium cursor-pointer !rounded-button whitespace-nowrap">
                  Save Draft
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium flex items-center cursor-pointer !rounded-button whitespace-nowrap"
                >
                  {currentStep === totalSteps - 1 ? "Confirm & Pay" : "Next"}
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {currentStep === totalSteps && (
            <div className="flex justify-center">
              <a
                href="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/edb710e0-b463-4cf4-8423-1b2efa45dff4"
                data-readdy="true"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium cursor-pointer !rounded-button whitespace-nowrap"
              >
                Return to Home
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}