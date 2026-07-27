import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/images/logo.png";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Library", link: "#library" },
    { name: "Experts", link: "#experts" },
    { name: "Contact", link: "#footer" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/90
      dark:bg-[#0B0815]/90
      backdrop-blur-2xl
      border-b
      border-white/10
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      transition-all
      duration-500
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-6
        md:px-10
        py-2
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="group"
        >
          <img
            src={logo}
            alt="MindCare Logo"
            className="
            h-14
            md:h-16
            lg:h-20
            w-auto
            object-contain
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:-rotate-2
            group-hover:drop-shadow-[0_0_18px_rgba(250,204,21,0.45)]
            "
          />
        </Link>

        {/* Desktop Navigation */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-10
          text-lg
          font-semibold
          "
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="
              relative
              text-gray-900
              dark:text-gray-100
              transition-all
              duration-300
              hover:text-yellow-400
              hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-0.5
              after:w-0
              after:bg-yellow-400
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Theme Toggle */}

          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className="
            w-12
            h-12
            rounded-full
            bg-white/10
            dark:bg-[#1A1528]
            backdrop-blur-md
            border
            border-yellow-400/20
            shadow-[0_0_18px_rgba(250,204,21,0.12)]
            hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]
            hover:scale-110
            hover:rotate-[360deg]
            transition-all
            duration-700
            flex
            items-center
            justify-center
            "
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-800 text-xl" />
            )}
          </button>

          {/* Desktop Buttons */}

          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/login"
              className="
              px-5
              py-2.5
              rounded-xl
              bg-[#1B1528]
              text-white
              dark:bg-white
              dark:text-black
              hover:bg-[#2A223A]
              dark:hover:bg-gray-200
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
              px-5
              py-2.5
              rounded-xl
              bg-gradient-to-r
              from-yellow-400
              to-yellow-500
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(250,204,21,0.45)]
              "
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            md:hidden
            w-12
            h-12
            rounded-xl
            bg-white/10
            dark:bg-[#1A1528]
            flex
            items-center
            justify-center
            transition-all
            duration-300
            "
          >
            {menuOpen ? (
              <FaTimes className="text-xl text-yellow-400" />
            ) : (
              <FaBars className="text-xl text-yellow-400" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
        md:hidden
        overflow-hidden
        transition-all
        duration-500
        ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }
        `}
      >

        <div
          className="
          px-6
          pb-6
          flex
          flex-col
          gap-5
          bg-white/95
          dark:bg-[#0B0815]/95
          backdrop-blur-xl
          border-t
          border-white/10
          "
        >

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="
              py-2
              text-lg
              font-semibold
              text-gray-900
              dark:text-white
              hover:text-yellow-400
              transition-all
              duration-300
              "
            >
              {item.name}
            </a>

          ))}

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="
            text-center
            py-3
            rounded-xl
            bg-[#1B1528]
            text-white
            dark:bg-white
            dark:text-black
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="
            text-center
            py-3
            rounded-xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            font-semibold
            text-black
            "
          >
            Sign Up
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;