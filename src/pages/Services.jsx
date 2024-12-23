import React from "react";
import PropTypes from "prop-types";
import { Calendar, Clock, MapPin } from "lucide-react";
import EventOne from "../assets/hero.jpg";

const EventCard = ({ title, date, image, time, location, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img src={EventOne} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Upcoming
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
          {title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="mr-2 text-blue-500" size={20} />
            <span>{date}</span>
          </div>
          {time && (
            <div className="flex items-center text-gray-600">
              <Clock className="mr-2 text-green-500" size={20} />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center text-gray-600">
              <MapPin className="mr-2 text-red-500" size={20} />
              <span>{location}</span>
            </div>
          )}
        </div>
        {description && (
          <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        )}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Event Details
        </button>
      </div>
    </div>
  );
};

// Add PropTypes validation for EventCard
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
};

function Services() {
  const events = [
    {
      title: "Sunday Service",
      date: "Dec 17, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      image: "/api/placeholder/400/300",
      description:
        "Join us for our weekly Sunday worship service. Experience inspiring messages, heartfelt worship, and community fellowship.",
    },
    {
      title: "Christmas Concert",
      date: "Dec 24, 2024",
      time: "7:00 PM",
      location: "Church Auditorium",
      image: "/api/placeholder/400/300",
      description:
        "Celebrate the joy of Christmas with our annual concert featuring choir performances, live music, and a special message of hope.",
    },
    {
      title: "Community Outreach",
      date: "Jan 5, 2025",
      time: "9:00 AM",
      location: "Community Center",
      image: "/api/placeholder/400/300",
      description:
        "Join our monthly community service initiative. We'll be providing meals, support, and spreading love in our local neighborhood.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-10 pt-24">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Join us for inspiring services, community gatherings, and spiritual
            growth opportunities.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-700 mb-8">
            Want to know about all our upcoming events? Subscribe to our
            newsletter!
          </p>
          <div className="max-w-xl mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
