// import { useState } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { PlayCircle, MapPin, Calendar, ChevronRight } from "lucide-react";
// import Drummer from "../assets/drummer.png";
// import Guitar from "../assets/guitar.png";
// import Worship from "../assets/worship.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Slider Settings
// const sliderSettings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
// };

// const Hero = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const images = [Guitar, Worship, Drummer];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//     },
//   },
// };

//   return (
//     <div className="hero-section">
//       <Slider {...sliderSettings}>
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative min-h-[65vh] bg-fit bg-center overflow-x-hidden items-center"
//             style={{
//               backgroundImage: `url(${image})`,
//             }}
//           >
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-700/20"></div>

//             {/* Content Container */}
// <motion.div
//   className="relative z-10 w-full px-4 md:px-8 lg:px-16"
//   variants={containerVariants}
//   initial="hidden"
//   animate="visible"
// >
//   <div className="max-w-4xl mx-auto text-center pt-36">
//     <motion.h1
//       className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-yellow-600 mb-4 tracking-tight"
//       variants={itemVariants}
//     >
//       Ahavah Church
//     </motion.h1>

//     <motion.p
//       className="text-base md:text-lg lg:text-2xl font-bold text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed"
//       variants={itemVariants}
//     >
//       A community of faith, hope, and love. Transforming lives
//       through meaningful connections and spiritual growth.
//     </motion.p>

//     {/* Action Buttons */}
//     <motion.div
//       className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
//       variants={itemVariants}
//     >
//       <Link
//         to="/sermons"
//         className="group flex items-center justify-center w-40 sm:w-auto bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <span className="text-sm md:text-base">New Here?</span>
//         <ChevronRight
//           className={`ml-2 transition-transform duration-300 ${
//             isHovered ? "translate-x-1" : ""
//           }`}
//           size={18}
//         />
//       </Link>

//       <a
//         href="/live-stream"
//         className="group flex items-center justify-center w-40 sm:w-auto bg-white text-blue-800 px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//       >
//         <PlayCircle className="mr-2" size={18} />
//         <span className="text-sm md:text-base">Live Stream</span>
//       </a>
//     </motion.div>

//     {/* Quick Info Section */}
//     <motion.div
//       className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 text-white/80"
//       variants={itemVariants}
//     >
//       <div className="flex items-center font-extrabold space-x-2">
//         <MapPin size={20} />
//         <span className="text-xs md:text-xl">
//           7 mboumu st, Lapaz
//         </span>
//       </div>
//       <div className="flex items-center font-extrabold space-x-2">
//         <Calendar size={20} />
//         <span className="text-xs md:text-xl">
//           Sundays @ 10:30am
//         </span>
//       </div>
//     </motion.div>
//   </div>
// </motion.div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;

// import { useState } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import { PlayCircle, MapPin, Calendar, ChevronRight } from "lucide-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Drummer from "../assets/drummer.png";
// import Pastor from "../assets/pastor.png";
// import Worship from "../assets/worship.png";

// // Slider Settings
// const sliderSettings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
// };

// const Hero = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Image paths
//   const images = [Drummer, Pastor, Worship];

//   return (
//     <div className="hero-section">
//       <Slider {...sliderSettings}>
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative min-h-[65vh] flex items-center overflow-x-hidden"
//           >
//             {/* Display Image */}
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="object-full w-full z-[-1] h-[65vh]"
//             />

//             {/* Content */}
//             <div className="absolute inset-0 z-10 w-full px-4 md:px-8 lg:px-16 flex items-center">
//               <div className="max-w-4xl mx-auto text-center pt-36">
//                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-yellow-600 mb-4 tracking-tight">
//                   Ahavah Church
//                 </h1>

//                 <p className="text-base md:text-lg lg:text-2xl font-bold text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
//                   A community of faith, hope, and love. Transforming lives
//                   through meaningful connections and spiritual growth.
//                 </p>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
//                   <Link
//                     to="/sermons"
//                     className="group flex items-center justify-center w-40 sm:w-auto bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                   >
//                     <span className="text-sm md:text-base">New Here?</span>
//                     <ChevronRight
//                       className={`ml-2 transition-transform duration-300 ${
//                         isHovered ? "translate-x-1" : ""
//                       }`}
//                       size={18}
//                     />
//                   </Link>

//                   <a
//                     href="/live-stream"
//                     className="group flex items-center justify-center w-40 sm:w-auto bg-white text-blue-800 px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//                   >
//                     <PlayCircle className="mr-2" size={18} />
//                     <span className="text-sm md:text-base">Live Stream</span>
//                   </a>
//                 </div>

//                 {/* Quick Info Section */}
//                 <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 text-white/80">
//                   <div className="flex items-center font-extrabold space-x-2">
//                     <MapPin size={20} />
//                     <span className="text-xs md:text-xl">
//                       7 mboumu st, Lapaz
//                     </span>
//                   </div>
//                   <div className="flex items-center font-extrabold space-x-2">
//                     <Calendar size={20} />
//                     <span className="text-xs md:text-xl">
//                       Sundays @ 10:30am
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;

import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, MapPin, Calendar, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Drummer from "../assets/drummer.png";
import Pastor from "../assets/pastor.png";
import Worship from "../assets/worship.png";

// Slider Settings
const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Image paths
  const images = [Drummer, Pastor, Worship];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <div className="hero-section">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative min-h-[70vh] lg:min-h-[70vh] flex items-center justify-center overflow-x-visible"
          >
            {/* Image Background */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute object-cover w-full h-[70vh] lg:h-[70vh] mb-2"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

            {/* Content */}
            <motion.div
              className="relative z-10 w-full px-4 md:px-8 lg:px-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="max-w-4xl mx-auto text-center pt-36">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-yellow-400 mb-12 tracking-tight lg:pt-16"
                  variants={itemVariants}
                >
                  Ahavah Church
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg lg:text-2xl font-bold text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  A community of faith, hope, and love. Transforming lives
                  through meaningful connections and spiritual growth.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                  variants={itemVariants}
                >
                  <Link
                    to="/sermons"
                    className="group flex items-center justify-center w-40 sm:w-auto bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="text-sm md:text-base">New Here?</span>
                    <ChevronRight
                      className={`ml-2 transition-transform duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                      size={18}
                    />
                  </Link>

                  <a
                    href="/live-stream"
                    className="group flex items-center justify-center w-40 sm:w-auto bg-white text-blue-800 px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <PlayCircle className="mr-2" size={18} />
                    <span className="text-sm md:text-base">Live Stream</span>
                  </a>
                </motion.div>

                {/* Quick Info Section */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 mb-6 text-white/80"
                  variants={itemVariants}
                >
                  <div className="flex items-center font-extrabold space-x-2">
                    <MapPin size={20} />
                    <span className="text-xs md:text-xl">
                      7 mboumu st, Lapaz
                    </span>
                  </div>
                  <div className="flex items-center font-extrabold space-x-2">
                    <Calendar size={20} />
                    <span className="text-xs md:text-xl">
                      Sundays @ 10:30am
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
