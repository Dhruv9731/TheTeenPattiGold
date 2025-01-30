import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white p-4 mb-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left - Title */}
        <h1 className="text-2xl font-bold">The Teen Patti Gold</h1>

        {/* Center - Search Bar (hidden on small screens) */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none px-2 text-white"
          />
        </div>

        {/* Right - Social Icons + Button */}
        <div className="hidden md:flex items-center space-x-4">
          <FaTwitter size={24} className="cursor-pointer hover:text-blue-400" />
          <FaFacebook size={24} className="cursor-pointer hover:text-blue-600" />
          <FaInstagram size={24} className="cursor-pointer hover:text-pink-500" />
          <FaYoutube size={24} className="cursor-pointer hover:text-red-500" />
          <FaWhatsapp size={24} className="cursor-pointer hover:text-green-500" />
          <FaTelegram size={24} className="cursor-pointer hover:text-blue-500" />
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="md:hidden flex  align-middle justify-between mt-4 space-y-3">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 px-3 py-1 rounded-lg text-white focus:outline-none w-3/4"
            />
            <div>
            <button className="bg-blue-500 px-4 py-1 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          </div>
          <div className="flex justify-between align-middle mt-5 ">
            <FaTwitter size={24} className="cursor-pointer hover:text-blue-400" />
            <FaFacebook size={24} className="cursor-pointer hover:text-blue-600" />
            <FaInstagram size={24} className="cursor-pointer hover:text-pink-500" />
            <FaYoutube size={24} className="cursor-pointer hover:text-red-500" />
            <FaWhatsapp size={24} className="cursor-pointer hover:text-green-500" />
            <FaTelegram size={24} className="cursor-pointer hover:text-blue-500" />
          </div>    
        </>
      )}
    </nav>
  );
}

export default Navbar;
