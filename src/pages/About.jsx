import { BookOpenText, Cross, Heart, Users, HandHeart } from "lucide-react";
import SeniorPastor from "../assets/founder-img.png.webp";
import WorshipLead from "../assets/user.png.webp";
import Hero from "../assets/hero.jpg";
import Youth from "../assets/founder-img.png.webp";

const ChurchAboutPage = () => {
  const ministryLeaders = [
    {
      name: "Pastor John Thompson",
      role: "Senior Pastor",
      image: SeniorPastor,
    },
    {
      name: "Sarah Williams",
      role: "Worship Leader",
      image: WorshipLead,
    },
    {
      name: "Michael Rodriguez",
      role: "Youth Ministry Director",
      image: Youth,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-10 pt-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <Cross
            className="mx-auto mb-6 text-white"
            size={64}
            strokeWidth={1.5}
          />
          <h1 className="text-3xl lg:text-5xl font-serif font-semibold mb-6">
            Ahavah Community Church
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Sharing God's love, building community, and transforming lives
            through faith, hope, and compassion.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-6 flex items-center">
            <Heart className="mr-4 text-red-600" size={40} />
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2019, Ahavah Community Church began as a small gathering
            of believers committed to serving our local community. Over the
            decades, we've grown from a handful of members to a vibrant,
            multicultural congregation dedicated to spreading the Gospel.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our journey has been guided by a simple yet powerful mission: to
            love God, love people, and make disciples who transform the world.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <BookOpenText className="mx-auto text-blue-700 mb-4" size={64} />
          <blockquote className="text-center italic text-gray-600">
            "For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life." -
            John 3:16
          </blockquote>
        </div>
      </div>

      {/* Core Beliefs Section */}
      <div className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-12 flex justify-center items-center">
            <HandHeart className="mr-4 text-green-600" size={40} />
            Our Core Beliefs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Biblical Authority</h3>
              <p className="text-gray-700">
                We believe the Bible is the inspired Word of God, our ultimate
                guide for faith and life.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Salvation through Christ
              </h3>
              <p className="text-gray-700">
                We believe salvation is found through Jesus Christ alone, by
                grace through faith.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Community Service</h3>
              <p className="text-gray-700">
                We are committed to serving our local and global community with
                love and compassion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gray-50 py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-12 flex justify-center items-center">
            <Users className="mr-4 text-purple-600" size={40} />
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ministryLeaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="top-0 min-h-[40vh] md:min-h-[40vh] bg-cover bg-center bg-fixed text-white"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <div className="container relative z-10 max-w-7xl mx-auto px-4 flex flex-col justify-center items-center h-full text-center p-24">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6">
            Join Our Community
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            We welcome you to worship with us, grow in faith, and be part of
            something greater.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChurchAboutPage;
