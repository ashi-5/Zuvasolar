import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-[#da5b27]"
          >
            <img
              src="/images/solar_icon.png"
              alt="Zuva Solar logo"
              className="h-10 w-10 object-contain"
            />
            <span>ZUVA SOLAR</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-[#da5b27]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#da5b27]">
              About Us
            </Link>
            <Link to="/work" className="hover:text-[#da5b27]">
              Work
            </Link>
            {/* <Link to="/investors" className="hover:text-red-600">
              Investor Relations
            </Link> */}
            <Link to="/contact" className="hover:text-[#da5b27]">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4 py-4 font-medium text-gray-700">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link to="/work" onClick={() => setOpen(false)}>
              Work
            </Link>
            {/* <Link to="/investors" onClick={() => setOpen(false)}>
              Investor Relations
            </Link> */}
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
