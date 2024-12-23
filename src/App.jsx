import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TeachingSeries from "./pages/TeachingSeries";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Chatbot from "./components/Chatbot";
import ChurchService from "./components/ChurchServices";
import PaymentForm from "./components/PaymentForm";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teachings" element={<TeachingSeries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/church" element={<ChurchService />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
