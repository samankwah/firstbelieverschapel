import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, User } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import backgroundImage from "../assets/undraw_community_fv55.png";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 5.9296,
  lng: -0.9725,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-200 to-[#DA0037] text-white py-10 pt-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <MessageCircle
            className="mx-auto mb-6 text-white"
            size={64}
            strokeWidth={1.5}
          />
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            We'd love to hear from you. Reach out with any questions, prayer
            requests, or just to say hello.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6 flex items-center">
              <Send className="mr-4 text-[#DA0037]" size={32} />
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <User className="mr-2 text-gray-700" size={20} />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <Mail className="mr-2 text-gray-700" size={20} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <Phone className="mr-2 text-gray-700" size={20} />
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <MessageCircle className="mr-2 text-gray-700" size={20} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C70039] transition"
                  placeholder="Your message to us..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DA0037] text-white py-3 rounded-lg hover:bg-[#C70039] transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-xl p-5 lg:p-6">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
              Our Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    National Headquaters, Akim Oda
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(+233) 508-410-4905</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">firstbelievers@yahoo.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 4:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed (Worship Day)
                </p>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            {/* <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Location Map Placeholder</p>
            </div> */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#DA0037] mb-4 text-center">
                Find Us on the Map
              </h2>
              <div className="bg-gray-300 rounded-lg h-64">
                {/* Google Maps Integration */}
                <LoadScript
                  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                >
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                  >
                    <Marker
                      position={center}
                      label={{
                        text: "We are here!",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        scaledSize: { width: 40, height: 60 }, // Adjust icon size
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Request Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white py-12 min-h-[40vh] md:min-h-[50vh] lg:min-h-28"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 max-w-7xl mx-auto px-4 text-center pt-10">
          <h2 className="text-4xl text-[#DA0037] font-serif font-bold mb-6">
            Need Prayer?
          </h2>
          <p className="text-xl mb-8">
            Our prayer team is here to support you. Submit your prayer request
            and we'll lift you up.
          </p>
          <Link
            to="/church"
            className="bg-white text-[#DA0037] px-8 py-3 rounded-full hover:bg-red-50 transition mb-20 text-center inline-block"
          >
            Submit Prayer Request
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
