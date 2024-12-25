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
      </div>
    </div>
  );
};

export default ChurchServices;
