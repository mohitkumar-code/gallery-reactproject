import React from "react";
import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";
import Pagination from "../components/Pagination"

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 py-8">
        <GalleryGrid />
        <Pagination />
      </main>
    </div>
  );
};

export default Gallery;