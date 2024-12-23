// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { DollarSign, X } from "lucide-react";
// import Momo from "../assets/momo.png";
// import Visa from "../assets/visa.png";
// import Guitar from "../assets/guitar.png";
// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Toggle for mobile menu
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-white shadow-md fixed w-full z-50">
//         <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
//           {/* Logo */}
//           <Link to="/" className="text-3xl font-bold text-blue-700">
//             FBACI
//             <span className="text-yellow-600">.</span>
//           </Link>

//           {/* Desktop Nav Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link
//               to="/"
//               className="hover:text-blue-600 transition duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-blue-600 transition duration-300"
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="hover:text-blue-600 transition duration-300"
//             >
//               Services
//             </Link>
//             <Link
//               to="/teachings"
//               className="hover:text-blue-600 transition duration-300"
//             >
//               Teaching Series
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-blue-600 transition duration-300"
//             >
//               Contact
//             </Link>

//             {/* Donate Button */}
//             <button
//               onClick={() => setShowModal(true)}
//               className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//               {/* <DollarSign size={20} /> */}
//               <span>Give</span>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-4xl text-blue-700 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40"
//               onClick={() => setMenuOpen(false)}
//             >
//               <motion.div
//                 initial={{ x: "-100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "-100%" }}
//                 transition={{ duration: 0.4 }}
//                 className="absolute left-0 top-16 bottom-0 w-3/4 h-3/4 bg-white shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setMenuOpen(false)}
//                   className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//                 >
//                   <X size={24} />
//                 </button>

//                 <ul className="flex flex-col items-start space-y-6 py-10 px-6">
//                   {[
//                     { to: "/", label: "Home" },
//                     { to: "/about", label: "About" },
//                     { to: "/services", label: "Services" },
//                     { to: "/teachings", label: "Teaching Series" },
//                     { to: "/contact", label: "Contact" },
//                   ].map((link) => (
//                     <li key={link.to}>
//                       <Link
//                         to={link.to}
//                         onClick={() => setMenuOpen(false)}
//                         className="text-lg text-gray-700 hover:text-blue-600 font-medium"
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}

//                   {/* Mobile Donate Button */}
//                   <li className="pt-4">
//                     <button
//                       onClick={() => {
//                         setShowModal(true);
//                         setMenuOpen(false);
//                       }}
//                       className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//                     >
//                       {/* <DollarSign size={20} /> */}
//                       <span>Give</span>
//                     </button>
//                   </li>
//                 </ul>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Donation Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-50 bg-opacity-40 flex justify-center items-center z-50">
//           <div
//             className="bg-cover bg-center relative w-full h-[50svh] max-w-3xl mx-4 md:mx-auto p-8 rounded-lg shadow-lg"
//             style={{
//               backgroundImage: `url(${Guitar})`, // Dynamically set the background image
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
//             <div className="relative z-10 text-center text-white">
//               {/* Heading */}
//               <h2 className="text-4xl font-bold mb-4">Online Giving</h2>
//               <p className="text-lg mb-6">
//                 Welcome to our online giving portal, where you can make payments
//                 using our local (GH) and international VISA & MasterCard
//                 systems, as well as Mobile Money (GH).
//               </p>

//               {/* Buttons for donation options */}
//               <div className="flex justify-center flex-wrap gap-4 mb-8">
//                 <Link
//                   to="/payment"
//                   className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg"
//                 >
//                   Christ Temple
//                 </Link>
//                 <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg">
//                   Annual Harvest
//                 </button>
//                 <Link
//                   to="/payment"
//                   className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg"
//                 >
//                   FBACI Special Events
//                 </Link>
//                 <Link
//                   to="/payment"
//                   className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg"
//                 >
//                   PayPal
//                 </Link>
//               </div>

//               {/* Payment Logos */}
//               <div className="flex justify-center flex-wrap gap-4">
//                 <img
//                   src={Visa}
//                   alt="Visa"
//                   className="h-12 w-auto object-contain"
//                 />
//                 {/* <img
//                   src={mastercardLogo}
//                   alt="MasterCard"
//                   className="h-12 w-auto object-contain"
//                 /> */}
//                 <img
//                   src={Momo}
//                   alt="MTN"
//                   className="h-12 w-auto object-contain"
//                 />
//                 {/* <img
//                   src={airtelLogo}
//                   alt="Airtel"
//                   className="h-12 w-auto object-contain"
//                 />
//                 <img
//                   src={vodafoneLogo}
//                   alt="Vodafone"
//                   className="h-12 w-auto object-contain"
//                 /> */}
//               </div>
//             </div>

//             {/* Close button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-gray-100 hover:text-white text-2xl"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Momo from "../assets/momo.png";
import Visa from "../assets/visa.png";
import Guitar from "../assets/guitar.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleDonationOptionClick = () => {
    setShowModal(false); // Close the modal
    setShowPaymentForm(true); // Show the payment form
  };
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-blue-700">
            FBACI<span className="text-yellow-600">.</span>
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
              to="/services"
              className="hover:text-blue-600 transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/teachings"
              className="hover:text-blue-600 transition duration-300"
            >
              Teaching Series
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
              <span>Give</span>
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
                    { to: "/services", label: "Services" },
                    { to: "/teachings", label: "Teaching Series" },
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
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  Christ Temple
                </Link>
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  Annual Harvest
                </Link>
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
                >
                  FBACI Special Events
                </Link>
                <Link
                  to="/payment"
                  onClick={handleDonationOptionClick}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:px-4 rounded-lg shadow-lg text-sm sm:text-base"
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
