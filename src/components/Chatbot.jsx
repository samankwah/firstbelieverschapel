import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Replace with your chatbot's embed code
    const script = document.createElement("script");
    script.src = "https://code.tidio.co/t5vus8m8qvnc5jatzhd1trinuhtehnbs.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on component unmount
    };
  }, []);

  return (
    <div>
      {/* Optional: You can add a container for the chatbot */}
      {/* <h2>Chat with us!</h2> */}
    </div>
  );
};

export default Chatbot;
