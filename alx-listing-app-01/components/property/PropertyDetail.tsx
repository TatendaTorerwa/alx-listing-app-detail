import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const calculateTotalCost = (price: number, nights: number) => {
    return price * nights;
  };

  return (
    <div className="container mx-auto p-6 flex space-x-10">
      <div className="flex-1">
        {/* Property Info */}
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
          {/* Add more images */}
        </div>

        {/* Description Tabs */}
        <div className="mt-6">
          <div className="tabs">
            <button
              onClick={() => handleTabChange("offer")}
              className={`tab-btn ${activeTab === "offer" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              What We Offer
            </button>
            <button
              onClick={() => handleTabChange("reviews")}
              className={`tab-btn ${activeTab === "reviews" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              Reviews
            </button>
            <button
              onClick={() => handleTabChange("host")}
              className={`tab-btn ${activeTab === "host" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              About the Host
            </button>
          </div>
          <div className="tab-content mt-4">
            {activeTab === "offer" && (
              <div>
                <h2 className="text-2xl font-semibold">What this place offers</h2>
                <ul className="flex flex-wrap space-x-4">
                  {property.category.map((amenity, index) => (
                    <li key={index} className="bg-gray-200 p-2 rounded-md">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <p>No reviews yet.</p> {/* Replace with actual reviews */}
              </div>
            )}
            {activeTab === "host" && (
              <div>
                <h2 className="text-2xl font-semibold">About the Host</h2>
                <p>{property.hostDescription}</p> {/* Replace with actual host description */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="w-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Booking</h2>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold">${property.price}</span>
            <span className="text-sm text-gray-500">per night</span>
          </div>

          {/* Dates */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Check-in</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Check-out</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Total Cost */}
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-bold">${calculateTotalCost(property.price, 3)}</span> {/* Example for 3 nights */}
          </div>

          <button className="w-full bg-blue-500 text-white p-3 rounded-md">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
