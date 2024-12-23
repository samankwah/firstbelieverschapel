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
  autoplaySpeed: 3000,
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
            className="relative min-h-[75vh] lg:min-h-[75vh] flex items-center justify-center overflow-x-visible"
          >
            {/* Image Background */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute object-cover w-full h-[75vh] lg:h-[75vh] mb-2"
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
              <div className="max-w-4xl mx-auto text-center pt-28">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-yellow-400 mb-8 tracking-normal sm:pt-8 md:pt-20 lg:pt-20"
                  variants={itemVariants}
                >
                  First Believers Anointed Chapel International
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
                    to="/church"
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
                  className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 mb-2 text-white/80"
                  variants={itemVariants}
                >
                  <div className="flex items-center font-extrabold space-x-2">
                    <MapPin size={20} />
                    <span className="text-xs md:text-xl">
                      National Headquaters, Akim Oda
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
