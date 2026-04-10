import { useState } from "react";
import gg from "../assets/gg.webp";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-white flex items-center justify-between px-4 lg:px-10 w-full fixed top-0 z-50 shadow-md">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-500 m-4">Softix Solution</h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        {["Home", "About", "Service", "Contact"].map((item) => (
          <button
            key={item}
            className="text-lg font-semibold text-blue-500 hover:text-red-500 transform hover:scale-110 transition duration-300"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <i className="ri-notification-line text-xl text-gray-700 hover:text-red-500"></i>

        <button className="hidden lg:block bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
          Start Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 lg:hidden">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <button
              key={item}
              className="text-lg font-semibold text-blue-500 hover:text-red-500 transition"
            >
              {item}
            </button>
          ))}

          <button className="bg-blue-400 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Start Now
          </button>
        </div>
      )}
    </section>
  );
}

export default Navbar;