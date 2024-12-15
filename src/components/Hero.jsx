import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayCircle, MapPin, Calendar, ChevronRight } from "lucide-react";
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className="relative min-h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center overflow-hidden flex items-center pt-20"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-700/20"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute top-1/4 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-yellow-600 mb-4 tracking-tight"
            variants={itemVariants}
          >
            Ahavah Church
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-2xl font-bold text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A community of faith, hope, and love. Transforming lives through
            meaningful connections and spiritual growth.
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
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 text-white/80"
            variants={itemVariants}
          >
            <div className="flex items-center font-extrabold space-x-2">
              <MapPin size={20} />
              <span className="text-xs md:text-xl">7 mboumu st, Lapaz</span>
            </div>
            <div className="flex items-center font-extrabold space-x-2">
              <Calendar size={20} />
              <span className="text-xs md:text-xl">Sundays @ 10:30am</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
