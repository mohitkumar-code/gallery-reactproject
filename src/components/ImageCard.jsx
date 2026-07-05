import React from "react";

const ImageCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="h-64 bg-gray-300 animate-pulse"></div>

      <div className="p-4">
        <div className="h-5 w-32 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ImageCard;