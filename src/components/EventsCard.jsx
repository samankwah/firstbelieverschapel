import React from "react";
import { useSpring, animated } from "@react-spring/web";

function EventCard({ title, date, image }) {
  const [hovered, setHovered] = React.useState(false);

  const cardAnimation = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={cardAnimation}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded-lg overflow-hidden shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
    </animated.div>
  );
}

export default EventCard;
