import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png"; // Dikkat: "assets" klasör ismi doğru olmalı

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + İsim */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="GD Logo"
            className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md p-1 ring-2 ring-pink-400 shadow-[0_0_15px_#ec4899] hover:shadow-[0_0_25px_#ec4899] transition-all duration-300"
          />
          <span className="text-2xl font-bold text-pink-400 hover:drop-shadow-[0_0_10px_#ec4899] transition duration-300">
            Gözde Döner
          </span>
        </div>

        {/* Hamburger butonu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-pink-400" />
            <div className="w-6 h-0.5 bg-pink-400" />
            <div className="w-6 h-0.5 bg-pink-400" />
          </div>
        </button>

        {/* Menü (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link
            to="/"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_10px_#ec4899] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_10px_#ec4899] transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_10px_#ec4899] transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Menü (Mobil) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 text-white bg-gray-900/80 backdrop-blur-md rounded-b-md shadow-md">
          <Link
            to="/"
            className="block py-2 hover:text-pink-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block py-2 hover:text-pink-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-pink-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
