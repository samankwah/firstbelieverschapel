import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Toggle for mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link to="/" className="text-4xl font-bold text-blue-700">
            Ahavah
            <span className="text-yellow-600">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/events"
              className="hover:text-blue-600 transition duration-300"
            >
              Events
            </Link>
            <Link
              to="/sermons"
              className="hover:text-blue-600 transition duration-300"
            >
              Sermon
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>

            {/* Donate Button */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {/* <DollarSign size={20} /> */}
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-4xl text-blue-700 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40"
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4 }}
                className="absolute left-0 top-16 bottom-0 w-3/4 h-3/4 bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                  <X size={24} />
                </button>

                <ul className="flex flex-col items-start space-y-6 py-10 px-6">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/events", label: "Events" },
                    { to: "/sermons", label: "Sermons" },
                    { to: "/contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg text-gray-700 hover:text-blue-600 font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {/* Mobile Donate Button */}
                  <li className="pt-4">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      <DollarSign size={20} />
                      <span>Donate</span>
                    </button>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Donation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
            <h2 className="text-xl font-semibold mb-4">Support Our Church</h2>
            <p className="text-gray-600 mb-4">
              Your generosity makes a difference! Click below to donate.
            </p>
            <a
              href="https://www.paypal.com" // Replace with your payment gateway
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
