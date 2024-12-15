import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign } from "lucide-react";

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
              <DollarSign size={20} />
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-blue-700 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-40"
            >
              <ul className="flex flex-col items-center space-y-6 py-6">
                <li>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sermons"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600"
                  >
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-700 hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    <DollarSign size={20} />
                    <span>Donate</span>
                  </button>
                </li>
              </ul>
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
