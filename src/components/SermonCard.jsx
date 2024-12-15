import React from "react";

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

export default SermonCard;
