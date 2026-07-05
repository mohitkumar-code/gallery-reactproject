import React from "react";
import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 py-8">
        <GalleryGrid />
      </main>
    </div>
  );
};

export default Gallery;