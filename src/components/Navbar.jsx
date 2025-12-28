import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    setOpen(false); // close mobile menu always

    if (location.pathname === path) {
      // Same page → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page → navigate then scroll
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleClick("/");
            }}
            className="flex items-center gap-2 text-2xl font-bold text-[#da5b27]"
          >
            <img
              src="/images/solar_icon.png"
              alt="Zuva Solar logo"
              className="h-10 w-10 object-contain"
            />
            <span>ZUVA SOLAR</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/");
              }}
              className="hover:text-[#da5b27]"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/about");
              }}
              className="hover:text-[#da5b27]"
            >
              About Us
            </Link>

            <Link
              to="/work"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/work");
              }}
              className="hover:text-[#da5b27]"
            >
              Work
            </Link>

            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/contact");
              }}
              className="hover:text-[#da5b27]"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
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

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4 py-4 font-medium text-gray-700">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/");
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/about");
              }}
            >
              About Us
            </Link>

            <Link
              to="/work"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/work");
              }}
            >
              Work
            </Link>

            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("/contact");
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
