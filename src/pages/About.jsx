import { BookOpenText, Cross, Heart, Users, HandHeart } from "lucide-react";
import SeniorPastor from "../assets/founder-img.png.webp";
import WorshipLead from "../assets/user.png.webp";
import Hero from "../assets/hero.jpg";
import Youth from "../assets/founder-img.png.webp";
import videoSource from "../assets/videos/How To Pray.mp4";

const ChurchAboutPage = () => {
  const ministryLeaders = [
    {
      name: "Dennis Bamfo",
      role: "Chairman",
      image: SeniorPastor,
    },
    {
      name: "Benjamin Nartey",
      role: "Vice Chairman",
      image: WorshipLead,
    },
    {
      name: "Beatrice Bamfo",
      role: "Treasurer",
      image: Youth,
    },
    {
      name: "Pastor Richard Arhin",
      role: "Senior Pastor",
      image: Youth,
    },
    {
      name: "Pastor Anthony Ponful",
      role: "National Healer",
      image: SeniorPastor,
    },
    {
      name: "Fred Addo",
      role: "Publicity Officer",
      image: WorshipLead,
    },
    {
      name: "Pastor Essuman",
      role: "Music Director",
      image: Youth,
    },
    {
      name: "Nana Asare Bediako",
      role: "Patron",
      image: SeniorPastor,
    },
    {
      name: "Yaw Owusu",
      role: "General Secretary",
      image: WorshipLead,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-200 to-red-600 text-white py-10 pt-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <Cross
            className="mx-auto mb-6 text-white"
            size={64}
            strokeWidth={1.5}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            First Believers Anointed Chapel International
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Sharing God's love, building community, and transforming lives
            through faith, hope, and compassion.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-6 flex items-center">
            <Heart className="mr-2 text-red-600" size={40} />
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            The established offices of the General Headquarters of the Church
            are located at <strong>Akim Oda</strong>, in the Eastern Region of
            Ghana. This location serves as the central hub for all government
            and doctrinal matters, where they are received and addressed.
            However, the home of the Prophet or the General overseer is situated
            at <strong>Assin Nyankomasi, near Assin Fosu</strong> in Ghana. This
            arrangement will continue until such time as God directs the
            establishment of permanent location for the headquarters.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            <strong>First Believers Anointed Chapel International</strong>{" "}
            (FBPC), a non-profit Christian organization, stands as a global
            ministry dedicated to propagating the Gospel of Jesus Christ
            worldwide, addressing the needs of humanity. It is a sanctuary where
            Christ reigns as King, and individuals gather to worship Him as
            their personal Lord and Savior. Aspire to be a Church of significant
            magnitude, capable of receiving, serving, ministering, and
            intimately knowing each member in all congregational gatherings. Our
            focus lies in being a Holy Spirit-filled church, extending Christ's
            love to the lost and broken within our community, nation, and the
            world.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <BookOpenText className="mx-auto text-[#DA0037] mb-4" size={64} />
          <blockquote className="text-center italic text-gray-600">
            "For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life." -
            John 3:16
          </blockquote>
        </div>
      </div>

      {/* Core Beliefs Section */}
      <div className="bg-white py-16">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-12 flex justify-center items-center">
            <HandHeart className="mr-2 text-[#DA0037]" size={40} />
            Statement of Faith & Doctrinal Statement
          </h2>
          <span className="text-lg lg:text-lg mb-12 flex justify-start items-center">
            We affirm the following beliefs:
          </span>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Scripture</h3>
              <p className="text-gray-700 text-start">
                We believe All Scripture, encompassing the Old and New
                Testaments, is divinely inspired, infallible, and the ultimate
                authority in matters of faith and practice (
                <strong>2 Timothy 3:16,17</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">God</h3>
              <p className="text-gray-700 text-start">
                We believe in one true and eternal God, existing in three
                distinct persons: Father, Son, and Holy Spirit (
                <strong>1 John 5:7</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Jesus Christ</h3>
              <p className="text-gray-700 text-start">
                We affirm the deity of the Lord Jesus Christ, His virgin birth,
                sinless life, shed blood for the forgiveness of sins, bodily
                resurrection, and ascension to the Father's right hand. We
                acknowledge Him as the exclusive means of salvation (
                <strong>1 Corinthians 1:30-31</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Man</h3>
              <p className="text-gray-700 text-start">
                Man is created in the image of God, designed for fellowship but
                separated by sinful disobedience. Every individual possesses
                dignity and is worthy of respect and Christian love (
                <strong>Genesis 1:26-30</strong>, <strong>2:7</strong>,{" "}
                <strong>Psalm 8:3-6</strong>, <strong>32:1-5</strong>,{" "}
                <strong>51:5</strong>, <strong>Isaiah 6:5</strong>,{" "}
                <strong>Jeremiah 17:5</strong>, <strong>Acts 17:26-31</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Salvation</h3>
              <p className="text-gray-700 text-start">
                Repentance, faith in the finished work of Christ, and
                regeneration by the Holy Spirit are essential for salvation.
                Salvation is offered by God's grace and effective for those who
                believe (<strong>Acts 20:20-21</strong>,{" "}
                <strong>Romans 10:9-13</strong>, <strong>John 3:5-6</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Holy Spirit</h3>
              <p className="text-gray-700 text-justify">
                The Holy Spirit, coequal with the Father and the Son, continues
                the work initiated at Pentecost. We believe in the baptism with
                the Holy Spirit and the ongoing relevance of spiritual gifts and
                manifestations (<strong>Matthew 28:19</strong>,{" "}
                <strong>Acts 5:3-4</strong>, <strong>28:25-26</strong>,{" "}
                <strong>1 Corinthians 12:4-6</strong>,{" "}
                <strong>Galatians 3:2</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">The Church</h3>
              <p className="text-gray-700 text-justify">
                The universal church comprises all true believers, commissioned
                to proclaim the Gospel globally. We endorse fellowship with a
                local church (<strong>Ephesians 1:22-23</strong>,{" "}
                <strong>Matthew 28:16-20</strong>,{" "}
                <strong>Hebrews 10:25</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Healing</h3>
              <p className="text-gray-700 text-justify">
                The redemptive work of Christ provides healing for the human
                body. We affirm that bodily healing is God's will for the sick
                or diseased (<strong>Matthew 8:16-17</strong>,{" "}
                <strong>Isaiah 53:4</strong>, <strong>1 Peter 2:24</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">
                Second Coming of Christ and the Resurrection
              </h3>
              <p className="text-gray-700 text-start">
                We anticipate a literal, physical return of the Lord Jesus
                Christ, followed by the resurrection of believers to heavenly
                dwelling. Unbelievers will face everlasting punishment (
                <strong>1 Thessalonians 1:10</strong>, <strong>4:16-17</strong>,{" "}
                <strong>Revelation 1:7</strong>, <strong>Matthew 24:30</strong>,{" "}
                <strong>Acts 1:11</strong>, <strong>Matthew 25:46</strong>,{" "}
                <strong>1 Corinthians 15</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">
                Marriage, Gender Identity, and Sexual Relations
              </h3>
              <p className="text-gray-700 text-start">
                We uphold marriage between one man and one woman as biologically
                designed, established by God as the foundation of the family.
                Sexual activities are sanctioned solely within the context of
                marriage (<strong>Genesis 2:24</strong>,{" "}
                <strong>Genesis 19:5</strong>, <strong>26:8-11</strong>,{" "}
                <strong>Leviticus 18:1-30</strong>,{" "}
                <strong>Romans 1:26-29</strong>,{" "}
                <strong>1 Corinthians 5:1</strong>, <strong>6:9</strong>,{" "}
                <strong>1 Thessalonians 4:1-8</strong>,{" "}
                <strong>Hebrews 13:4</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Sanctity of Life</h3>
              <p className="text-gray-700 text-justify">
                Human life, bearing the image of God, commences at conception.
                All human life is sacred, possessing inherent value, worth, and
                dignity. The Church is committed to defending, protecting, and
                valuing every individual from conception to natural death (
                <strong>Psalm 39:4</strong>, <strong>127:3</strong>,{" "}
                <strong>71:6</strong>, <strong>139:14-16</strong>,{" "}
                <strong>Jeremiah 1:5</strong>, <strong>Luke 1:44</strong>,{" "}
                <strong>1 Corinthians 11:12</strong>,{" "}
                <strong>Job 14:5-7</strong>, <strong>Galatians 1:5</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Eternity</h3>
              <p className="text-gray-700 text-justify">
                After death, eternal life continues in either heaven or hell
                based on one's acceptance of Jesus Christ as Lord and Savior.
                The Rapture is anticipated, involving the resurrection of
                believers (<strong>Matthew 25:46</strong>,{" "}
                <strong>1 Corinthians 15</strong>).
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Baptism</h3>
              <p className="text-gray-700 text-justify">
                The Church practices baptism by immersion, administered by the
                Prophet, Senior Pastor, or a District Pastor, for individuals
                aged 12 and above. Proper instruction on the significance of
                baptism is provided.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md transition hover:shadow-xl hover:text-[#DA0037]">
              <h3 className="text-xl font-semibold mb-4">Burial of the Dead</h3>
              <p className="text-gray-700 text-start">
                In adherence to the directive by the Holy Spirit to the late
                Prophet J.O Amissah I, members shall not be buried in a
                traditional coffin. This practice aligns with the biblical
                concept of returning to the earth in a natural way, reflecting
                humility and simplicity in death (<strong>Luke 23:53</strong>,{" "}
                <strong>Ecclesiastes 3:20</strong>).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gray-50 py-16">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-12 flex justify-center items-center">
            <Users className="mr-2 text-[#DA0037]" size={40} />
            Board of Trustees
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

      <div className="relative min-h-[40vh] md:min-h-[50vh] bg-cover bg-center bg-fixed text-white">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover" // Ensures video covers the container while maintaining its aspect ratio
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10, // Ensures the video is in the background
          }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Background overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

        {/* Content Section */}
        <div className="container relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center h-full text-center p-6 pt-24 md:pt-36">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6">
            Join Our Community
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            We welcome you to worship with us, grow in faith, and be part of
            something greater.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#DA0037] hover:bg-blue-100 px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChurchAboutPage;
