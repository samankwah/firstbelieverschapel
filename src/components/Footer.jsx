import { BsFacebook, BsTwitterX, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: About and Address */}
        <div className="flex flex-col items- md:items-start text-left md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-300">Our Church</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bringing people together through faith, love, and community. Join us
            every Sunday for a life-changing experience.
          </p>
          <p className="mt-4 flex items-start space-x-2">
            <FaMapMarkerAlt className="text-blue-400 mt-1" />
            <span>
              <span className="block">123 Church Street City, Country</span>
            </span>
          </p>

          <p className="mt-2 flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-400" />
            <a
              href="tel:+11234567890"
              className="hover:text-blue-400 transition-colors"
            >
              (123) 456-7890
            </a>
          </p>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex flex-col items-left text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-300">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors text-gray-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/sermons"
                className="hover:text-blue-400 transition-colors text-gray-400"
              >
                Sermon
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-blue-400 transition-colors text-gray-400"
              >
                Upcoming Events
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors text-gray-400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex flex-col items-start md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-300">
            Connect With Us
          </h2>
          <div className="flex space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <BsTwitterX size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-transform transform hover:scale-110"
            >
              <BsYoutube size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Follow us on social media for the latest updates.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Ahavah Church. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-blue-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
