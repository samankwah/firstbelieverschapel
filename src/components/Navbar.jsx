import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Momo from "../assets/momo.png";
import Visa from "../assets/visa.png";
import Guitar from "../assets/guitar.png";
import Logo from "../assets/FBACI-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleDonationOptionClick = () => {
    setShowModal(false);
    setShowPaymentForm(true);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="FBACI Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-[#DA0037] transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#DA0037] transition duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#DA0037] transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/teachings"
              className="hover:text-[#DA0037] transition duration-300"
            >
              Teaching Series
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#DA0037] transition duration-300"
            >
              Contact
            </Link>

            {/* Donate Button */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center space-x-2 bg-[#DA0037] text-white px-4 py-2 rounded-md hover:bg-[#C70039] transition duration-300"
            >
              <span>Give</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-4xl text-red-800 focus:outline-none"
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
                    { to: "/services", label: "Services" },
                    { to: "/teachings", label: "Teaching Series" },
                    { to: "/contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg text-gray-700 hover:text-red-800 font-medium"
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
                      className="flex items-center space-x-2 bg-[#DA0037] text-white px-6 py-3 rounded-lg hover:bg-[#EDEDED] transition duration-300"
                    >
                      <span>Give</span>
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
        <div className="fixed inset-0 bg-gray-50 bg-opacity-40 flex justify-center items-center z-30">
          <div
            className="bg-cover bg-center relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-4 md:mx-auto p-8 sm:p-16 md:p-32 lg:p-44 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${Guitar})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Online Giving
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6">
                Welcome to our online giving portal, where you can make payments
                using our local (GH) and international VISA & MasterCard
                systems, as well as Mobile Money (GH).
              </p>

              {/* Buttons for donation options */}
              <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-[#DA0037] hover:bg-[#C70039] text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  Christ Temple
                </Link>
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-[#DA0037] hover:bg-[#C70039] text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  Annual Harvest
                </Link>
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-[#DA0037] hover:bg-[#C70039] text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  FBACI Special Events
                </Link>
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-[#DA0037] hover:bg-[#C70039] text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  PayPal
                </Link>
              </div>

              {/* Payment Logos */}
              <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
                <img
                  src={Visa}
                  alt="Visa"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
                <img
                  src={Momo}
                  alt="MTN"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-100 hover:text-white text-lg sm:text-xl"
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
