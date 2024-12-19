import React, { useState } from "react";
import {
  Video,
  BookOpen,
  Mic,
  Filter,
  PlayCircle,
  Download,
} from "lucide-react";

const SermonCard = ({
  title,
  speaker,
  link,
  date,
  series,
  duration,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative bg-blue-600 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-serif font-bold">{title}</h3>
          <Video className="text-white opacity-50" size={32} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium flex items-center">
              <Mic className="mr-2" size={16} />
              {speaker}
            </p>
            {series && (
              <p className="text-sm text-blue-100 mt-1">Series: {series}</p>
            )}
          </div>
          {duration && (
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {duration}
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow flex items-center justify-center bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition"
          >
            <PlayCircle className="mr-2" size={20} />
            Watch Sermon
          </a>
          <button className="bg-green-50 text-green-600 px-4 py-3 rounded-lg hover:bg-green-100 transition">
            <Download size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

function Sermons() {
  const [activeFilter, setActiveFilter] = useState("All");

  const sermons = [
    {
      title: "Faith Over Fear",
      speaker: "Pastor John",
      link: "https://youtu.be/video1",
      date: "Dec 10, 2024",
      series: "Courage Series",
      duration: "45 min",
      description:
        "A powerful message about overcoming life's challenges through unwavering faith and trust in God's plan.",
      category: "Inspirational",
    },
    {
      title: "Grace Abounds",
      speaker: "Pastor Jane",
      link: "https://youtu.be/video2",
      date: "Dec 3, 2024",
      series: "Hope Sermon Series",
      duration: "40 min",
      description:
        "Exploring the transformative power of God's grace in our daily lives and spiritual journey to heaven.",
      category: "Theological",
    },
    {
      title: "Love in Action",
      speaker: "Pastor Mike",
      link: "https://youtu.be/video3",
      date: "Nov 26, 2024",
      series: "Community Series",
      duration: "50 min",
      description:
        "A compelling sermon about putting Christian love into practice through service and compassion.",
      category: "Community",
    },
  ];

  const categories = [
    "All",
    ...new Set(sermons.map((sermon) => sermon.category)),
  ];

  const filteredSermons =
    activeFilter === "All"
      ? sermons
      : sermons.filter((sermon) => sermon.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-10 pt-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <BookOpen
            className="max-w-7xl mx-auto mb-6 text-white"
            size={64}
            strokeWidth={1.5}
          />
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
            Our Sermons
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Explore inspiring messages that bring hope, wisdom, and spiritual
            growth.
          </p>
        </div>
      </div>

      {/* Sermon Filters */}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-row justify-center align-middle gap-4 px-4 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                flex items-center px-4 py-2 rounded-full transition 
                ${
                  activeFilter === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              <Filter className="mr-2" size={16} />
              {category}
            </button>
          ))}
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <SermonCard key={index} {...sermon} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Never Miss a Sermon
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Subscribe to our sermon podcast and get weekly spiritual insights
            delivered directly to you.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Apple Podcasts
            </a>
            <a
              href="#"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sermons;
