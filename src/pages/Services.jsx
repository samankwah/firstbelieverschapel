import React, { useState } from "react";
import { Calendar, Clock, MapPin, User, X } from "lucide-react";
import EventOne from "../assets/hero.jpg";
import Drummer from "../assets/drummer.png";
import Guitar from "../assets/guitar.png";
import Pastor from "../assets/pastor.png";
import Worship from "../assets/worship.png";
import Event from "../assets/event.png";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  type,
  eventImage,
  speakers,
  schedule,
  onDetailsClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img
          src={eventImage}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {type || "Upcoming"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
          {title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="mr-2 text-red-600" size={20} />
            <span>{date}</span>
          </div>
          {time && (
            <div className="flex items-center text-gray-600">
              <Clock className="mr-2 text-red-600" size={20} />
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center text-gray-600">
              <MapPin className="mr-2 text-red-600" size={20} />
              <span>{location}</span>
            </div>
          )}
        </div>
        {description && (
          <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        )}
        <button
          onClick={onDetailsClick}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Event Details
        </button>
      </div>
    </div>
  );
};

const EventDetailModal = ({ isOpen, onClose, event }) => {
  if (!event) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-2xl font-serif font-bold mb-4">{event.title}</h2>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Calendar className="text-red-600" size={20} />
            <span>{event.date}</span>
            {event.time && (
              <>
                <Clock className="text-red-600" size={20} />
                <span>{event.time}</span>
              </>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="text-red-600" size={20} />
            <span>{event.location}</span>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-lg mb-2">Event Description</h4>
            <p className="text-gray-700">{event.description}</p>
          </div>

          {event.speakers && (
            <div className="border-t pt-4">
              <h4 className="font-semibold text-lg mb-2">Speakers</h4>
              <div className="space-y-2">
                {event.speakers.map((speaker, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <User className="text-red-600" size={16} />
                    <span>{speaker}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.schedule && (
            <div className="border-t pt-4">
              <h4 className="font-semibold text-lg mb-2">Program Schedule</h4>
              <div className="space-y-3">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="flex">
                    <span className="text-red-600 font-medium w-24">
                      {item.time}
                    </span>
                    <span>{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      title: "2025 Peaceful Year Convention Opening",
      date: "January 1, 2025",
      time: "6:30 PM",
      location: "Main Sanctuary",
      description:
        "Opening ceremony with Dist. Pastor Samuel Essuman featuring songs of praise, sermons, and prayers.",
      type: "Convention",
      eventImage: Event,
      speakers: [
        "Dist. Pastor Samuel Essuman",
        "Overseer Jerry Arthur",
        "Overseer Oscar Brenya",
        "Elder Thomas Nti",
      ],
      schedule: [
        {
          time: "6:30 PM",
          activity: "Opening of Convention",
          leader: "Dist. Pastor Samuel Essuman",
        },
        { time: "6:40 PM", activity: "Song of Praise", leader: "Congregation" },
        { time: "6:50 PM", activity: "Solo", leader: "Sister Janet Arthur" },
        {
          time: "7:10 PM",
          activity: "Sermon",
          leader: "Overseer Jerry Arthur",
        },
        {
          time: "7:50 PM",
          activity: "General Prayers",
          leader: "Overseer Oscar Brenya",
        },
        { time: "8:10 PM", activity: "Offering Time", leader: "" },
        {
          time: "8:20 PM",
          activity: "Blessing of Offering",
          leader: "Elder Thomas Nti",
        },
        {
          time: "8:30 PM",
          activity: "Announcements",
          leader: "Gabriel Yeboah (Dep Gen. Secretary)",
        },
        {
          time: "9:00 PM",
          activity: "Closing Prayer",
          leader: "Dist. Ps. Samuel Essuman",
        },
      ],
    },
    {
      title: "General Fasting Day - 1st Service",
      date: "January 2, 2025",
      time: "5:30 AM",
      location: "Holy Sanctuary",
      description:
        "Special fasting service led by Overseer Philip Otu with worship, prayers, and sermon.",
      type: "Convention",
      eventImage: Worship,
      speakers: [
        "Overseer Philip Otu",
        "Overseer Enoch Arhinful",
        "Dist. Ps. Anane Ababio",
        "Pastor Felix Owusu",
      ],
      schedule: [
        {
          time: "5:30 AM",
          activity: "Opening of Service",
          leader: "Overseer Philip Otu",
        },
        {
          time: "6:00 AM",
          activity: "General Worship & Prayers",
          leader: "Overseer Enoch Arhinful",
        },
        { time: "6:30 AM", activity: "Praises", leader: "Congregation" },
        {
          time: "7:00 AM",
          activity: "Solo",
          leader: "Brother Justify Asiedu Antwi",
        },
        {
          time: "7:30 AM",
          activity: "Sermon",
          leader: "Dist. Ps. Anane Ababio",
        },
        { time: "8:00 AM", activity: "Offering Time", leader: "" },
        {
          time: "8:10 AM",
          activity: "Blessing of Offering",
          leader: "Deaconess Grace Afari",
        },
        {
          time: "8:30 AM",
          activity: "Announcement",
          leader: "Dep. General Secretary",
        },
        {
          time: "9:00 AM",
          activity: "Closing Prayer",
          leader: "Elder Sampson Oduro",
        },
      ],
    },
    {
      title: "General Fasting Day - 2nd Service",
      date: "January 2, 2025",
      time: "5:30 PM",
      location: "Main Sanctuary",
      description:
        "Second service for the general fasting day with different speakers and activities.",
      type: "Convention",
      eventImage: Worship,
      speakers: [
        "District Pastor George Owusu Gyamfi",
        "Pastor Felix Owusu",
        "Sister Ida Tetteh",
        "Dist. Ps. George Owusu Gyamfi",
      ],
      schedule: [
        {
          time: "5:30 PM",
          activity: "Opening of Service",
          leader: "District Pastor George Owusu Gyamfi",
        },
        {
          time: "6:00 PM",
          activity: "General Worship & Thanksgiving Prayers",
          leader: "Pastor Felix Owusu",
        },
        { time: "6:30 PM", activity: "Solo", leader: "Sister Ida Tetteh" },
        {
          time: "7:00 PM",
          activity: "Sermon",
          leader: "Dist. Ps. George Owusu Gyamfi",
        },
        { time: "7:30 PM", activity: "Offering Time", leader: "" },
        {
          time: "7:40 PM",
          activity: "Blessing of Offering",
          leader: "Deaconess Rosina Frimpong",
        },
        {
          time: "8:00 PM",
          activity: "General Prayers led by",
          leader: "Dist. Ps. Owusu Gyamfi",
        },
        { time: "8:30 PM", activity: "Announcement", leader: "Secretary" },
        {
          time: "9:00 PM",
          activity: "Closing Prayer",
          leader: "Pastor Eric Sam",
        },
      ],
    },
    {
      title: "Leaders to receive Confession",
      date: "January 3, 2025",
      time: "9:30 AM",
      location: "Holy Sanctuary",
      description:
        "Leaders to receive confession and be posted to the Holy Sanctuary.",
      type: "Special Session",
      eventImage: Pastor,
      speakers: [
        "Pastor George Okyere",
        "Overseer Barak Anim",
        "Brother Festus",
        "Pastor Eric Sam",
      ],
      schedule: [
        {
          time: "9:30 AM",
          activity: "Opening of Service",
          leader: "Pastor George Okyere",
        },
        {
          time: "10:00 AM",
          activity: "General Prayers",
          leader: "Overseer Barak Anim",
        },
        { time: "10:30 AM", activity: "Solo", leader: "Brother Festus" },
        { time: "11:00 AM", activity: "Sermon", leader: "Pastor Eric Sam" },
        { time: "11:30 AM", activity: "Offering Time", leader: "" },
        {
          time: "11:40 AM",
          activity: "Blessing of Offering",
          leader: "Mrs. Margaret Gyamfi",
        },
        { time: "12:00 PM", activity: "Confession", leader: "Members" },
        { time: "12:30 PM", activity: "Announcements", leader: "" },
        {
          time: "1:00 PM",
          activity: "Closing Prayer",
          leader: "Dep. Snr. Ps. Joseph Mireku",
        },
      ],
    },
    {
      title: "Women's Fellowship Meeting",
      date: "January 4, 2025",
      time: "2:00 PM",
      location: "Fellowship Hall",
      description:
        "Special gathering for women with teachings, prayers, and fellowship.",
      type: "Fellowship",
      eventImage: Guitar,
      speakers: ["Women's Leader Mrs. Elizabeth Ampofo", "Sister Grace Tetteh"],
      schedule: [
        {
          time: "2:00 PM",
          activity: "Opening Prayer",
          leader: "Women's Leader Mrs. Elizabeth Ampofo",
        },
        {
          time: "2:30 PM",
          activity: "Worship & Praise",
          leader: "Sister Grace Tetteh",
        },
        {
          time: "3:00 PM",
          activity: "Bible Study",
          leader: "Women's Leader Mrs. Elizabeth Ampofo",
        },
        {
          time: "4:00 PM",
          activity: "Group Discussion",
          leader: "Sister Grace Tetteh",
        },
        {
          time: "5:00 PM",
          activity: "Closing Prayer",
          leader: "Women's Leader Mrs. Elizabeth Ampofo",
        },
      ],
    },
    {
      title: "Candle Night Service",
      date: "January 4, 2025",
      time: "9:30 PM",
      location: "Main Assembly",
      description:
        "Special candle night activities led by National Healer with prayers and worship.",
      type: "Special Service",
      eventImage: Drummer,
      speakers: ["National Healer Rev. Dr. Mensah", "Prophet Emmanuel Asante"],
      schedule: [
        {
          time: "9:30 PM",
          activity: "Opening Prayer",
          leader: "National Healer Rev. Dr. Mensah",
        },
        {
          time: "10:00 PM",
          activity: "Worship Session",
          leader: "Prophet Emmanuel Asante",
        },
        {
          time: "11:00 PM",
          activity: "Candlelight Procession",
          leader: "National Healer Rev. Dr. Mensah",
        },
        {
          time: "11:30 PM",
          activity: "Special Prayers",
          leader: "Prophet Emmanuel Asante",
        },
        {
          time: "12:00 AM",
          activity: "Prophetic Declaration",
          leader: "National Healer Rev. Dr. Mensah",
        },
      ],
    },
    {
      title: "Convention Closing & Holy Communion",
      date: "January 6, 2025",
      time: "5:00 AM",
      location: "Main Sanctuary",
      description:
        "Final convention service with Holy Communion and ordination of Pastors and Overseers.",
      type: "Convention",
      eventImage: EventOne,
      speakers: [
        "Snr. Pastor Richard Arhin",
        "Dep. Nat. Snr. Pastor Joseph Mireku",
        "National Healer Pastor Anthony Ponful",
        "Elder Yaw Owusu",
      ],
      schedule: [
        {
          time: "5:00 AM",
          activity: "Opening of Service",
          leader: "Snr. Pastor Richard Arhin",
        },
        {
          time: "5:30 AM",
          activity: "General Prayers",
          leader: "Snr. Pastor Richard Arhin",
        },
        {
          time: "6:00 AM",
          activity: "Sermon",
          leader: "Snr. Pastor Richard Arhin",
        },
        {
          time: "7:00 AM",
          activity: "Holy Communion Service",
          leader: "Snr. Pastor Richard Arhin",
        },
        {
          time: "8:00 AM",
          activity: "Ordination of Pastors and Overseers",
          leader: "Snr. Pastor Richard Arhin",
        },
        { time: "9:00 AM", activity: "Announcements", leader: "" },
        {
          time: "9:30 AM",
          activity: "Benediction for end of Convention",
          leader: "Snr. Ps. Richard Arhin",
        },
        { time: "10:00 AM", activity: "Departure of members", leader: "" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-200 to-red-600 text-white py-10 pt-24">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
            2025 Convention & Upcoming Events
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Join us for the 2025 Peaceful Year Convention and other inspiring
            gatherings for spiritual growth and fellowship.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              onDetailsClick={() => {
                setSelectedEvent(event);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <EventDetailModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
      />

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-700 mb-8">
            Want to receive updates about the convention and upcoming events?
            Subscribe to our newsletter!
          </p>
          <div className="max-w-xl mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
