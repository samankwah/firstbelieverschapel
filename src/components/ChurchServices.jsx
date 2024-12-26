const ChurchServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Welcome to Our Church Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Matrix of Services */}
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <span className="text-4xl text-blue-600">☀️</span>
              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                Sunday Services
              </h2>
            </div>
            <p className="text-gray-700 text-left">
              Worship with us every Sunday:
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>
                  <strong>First Service:</strong> 7:30am - 9:30am
                </li>
                <li>
                  <strong>Second Service:</strong> 10:30am - 12:30pm
                </li>
              </ul>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <span className="text-4xl text-blue-600">🌟</span>
              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                Tuesday Services
              </h2>
            </div>
            <p className="text-gray-700 text-left">
              Join us every Tuesday for an evening of life-transforming
              encounters:
              <strong>6:00pm - 8:00pm</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <span className="text-4xl text-blue-600">🍷</span>
              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                Communion Service
              </h2>
            </div>
            <p className="text-gray-700 text-left">
              On the last Tuesday of each month, partake in the Communion (
              <strong>6:00pm - 8:00pm</strong>) and reflect on the sacrifice of
              Christ.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-2xl font-bold text-[#DA0037] text-center mb-4">
              Highlights of Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
              <div className="text-center">
                <span className="text-blue-600 text-3xl mb-2 inline-block">
                  🎶
                </span>
                <h3 className="font-semibold">Praise & Worship</h3>
                <p className="mt-2 text-left">
                  Join the congregation to exalt God and prepare your heart for
                  His Word.
                </p>
              </div>
              <div className="text-center">
                <span className="text-blue-600 text-3xl mb-2 inline-block">
                  🙏
                </span>
                <h3 className="font-semibold">Prayer Time</h3>
                <p className="mt-2 text-left">
                  Intercede for the nation, congregation, and personal needs
                  during this sacred time.
                </p>
              </div>
              <div className="text-center">
                <span className="text-blue-600 text-3xl mb-2 inline-block">
                  📖
                </span>
                <h3 className="font-semibold">Word Ministry</h3>
                <p className="mt-2 text-left">
                  Hear the life-changing Word of God to grow and thrive in your
                  faith.
                </p>
              </div>
              <div className="text-center">
                <span className="text-blue-600 text-3xl mb-2 inline-block">
                  ✝️
                </span>
                <h3 className="font-semibold">Altar Call</h3>
                <p className="mt-2 text-left">
                  Respond to the Pastor's invitation to receive Jesus as your
                  Lord and Saviour.
                </p>
              </div>
            </div>
          </div>

          {/* First Fruit Offering */}
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-2xl font-bold text-[#DA0037] text-center mb-4">
              First Fruit Offering
            </h2>
            <p className="text-gray-700 text-center">
              Honor God by bringing your tithe/first fruit to His house on the
              first Sunday of every month. (<em>Prov. 3:9-10</em>)
            </p>
            <div className="text-center mt-6">
              <button className="bg-[#DA0037] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Objectives Section */}
        <div className="mt-20 bg-gradient-to-r from-white to-gray-100 p-2 sm:p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#DA0037] mb-6 sm:mb-8">
            Objectives of Our Church
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <span className="text-4xl text-blue-600">🙏</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Worship Celebration
                </h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                To cultivate a Spirit-filled and Word-based community, offering
                genuine worship in celebration of redemption (
                <strong>Psalms 95:1-7</strong>, <strong>100:1-5</strong>,{" "}
                <strong>John 4:23-24</strong>,{" "}
                <strong>Revelation 5:9-14</strong>, <strong>Acts 1:14</strong>,{" "}
                <strong>2:42</strong>).
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <span className="text-4xl text-blue-600">📖</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Teach, Preach, Pray & Impact
                </h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                To nurture God's redeemed people through sound instruction in
                the Word and impactful demonstrations of the Spirit, fostering a
                knowledgeable, understandable, and practical lifestyle (
                <strong>Acts 20:28</strong>, <strong>Proverbs 27:23</strong>,{" "}
                <strong>Romans 1:11</strong>, <strong>Proverbs 25:2</strong>).
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <span className="text-4xl text-blue-600">🤝</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Communion (Fellowship)
                </h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                To promote love, unity, and peace through caring, sharing,
                giving, and communal fellowships, embracing all as one precious
                redeemed family (<strong>Acts 2:41-47</strong>,{" "}
                <strong>Psalms 133</strong>, <strong>Ephesians 4:1-6</strong>,{" "}
                <strong>Hebrews 10:23-25</strong>).
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <span className="text-4xl text-blue-600">🌍</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Evangelism/Mission
                </h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                To mobilize God's redeemed people for effective evangelism and
                mission endeavors, both personal and mass, with a fervent desire
                for the lost (<strong>Matthew 28:19-20</strong>,{" "}
                <strong>24:14</strong>; <strong>Mark 16:15-20</strong>;{" "}
                <strong>Luke 14:23</strong>).
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <span className="text-4xl text-blue-600">🧑‍🏫</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Discipleship (Stewardship)
                </h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                To cultivate an orderly, disciplined people with a heart for
                service, contributing to the maturation of the Body of Christ
                and leadership services through Spirit-inspired teaching and
                training (<strong>Luke 2:46</strong>, <strong>Acts 4:4</strong>,{" "}
                <strong>6:4</strong>, <strong>2:44</strong>;{" "}
                <strong>Romans 1:11-12</strong>).
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <span className="text-4xl text-blue-600">❤️</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Social Welfare
                </h3>
              </div>
              <p className="text-gray-700 text-justify leading-relaxed">
                To address the social needs of our environment/community through
                welfare strategies encompassing hospitals, prisons, orphanages,
                and ministries for the needy (<strong>James 2:14-17</strong>,{" "}
                <strong>Acts 4:32-35</strong>, <strong>Luke 14:21-23</strong>).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchServices;
