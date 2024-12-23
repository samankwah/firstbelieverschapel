// import React from "react";

// function SermonCard({ title, speaker, link }) {
//   return (
//     <div className="border rounded-lg shadow-lg p-4">
//       <h2 className="text-xl font-bold">{title}</h2>
//       <p className="text-gray-500">{speaker}</p>
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 underline"
//       >
//         Watch Now
//       </a>
//     </div>
//   );
// }

// export default SermonCard;

import React from "react";
import PropTypes from "prop-types";

function SermonCard({ title, speaker, link }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500">{speaker}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Watch Now
      </a>
    </div>
  );
}

// Add PropTypes validation
SermonCard.propTypes = {
  title: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired, // Validate 'speaker' prop
  link: PropTypes.string.isRequired,
};

export default SermonCard;
