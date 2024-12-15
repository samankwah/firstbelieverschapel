import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, User } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 5.6037,
  lng: -0.187,
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
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 pt-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <MessageCircle
            className="mx-auto mb-6 text-white"
            size={64}
            strokeWidth={1.5}
          />
          <h1 className="text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            We'd love to hear from you. Reach out with any questions, prayer
            requests, or just to say hello.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center">
              <Send className="mr-4 text-blue-600" size={32} />
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <User className="mr-2 text-blue-500" size={20} />
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
                  <Mail className="mr-2 text-green-500" size={20} />
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
                  <Phone className="mr-2 text-purple-500" size={20} />
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
                  <MessageCircle className="mr-2 text-red-500" size={20} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your message to us..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Our Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="mr-4 text-red-500" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    123 Grace Street, City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="mr-4 text-green-500" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="mr-4 text-blue-500" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@gracechurch.org</p>
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
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
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
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Request Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Need Prayer?</h2>
          <p className="text-xl mb-8">
            Our prayer team is here to support you. Submit your prayer request
            and we'll lift you up.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
            Submit Prayer Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
