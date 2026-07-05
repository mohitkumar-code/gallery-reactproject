import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Gallery
        </h1>

        <button className="bg-black text-white px-5 py-2 rounded-lg active:scale-95">
          Refresh
        </button>
      </div>
    </nav>
  );
};

export default Navbar;