import About from "./About";
import Services from "./Services";
import TeachingSeries from "./TeachingSeries";
import Contact from "./Contact";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <TeachingSeries />
      <Contact />
    </div>
  );
};

export default Home;
