import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F2F23] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand + Address */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Zuva<span className="text-[#D84A0E]">Solar</span>
            </h2>

            <p className="text-sm">
              Clean energy solutions for a sustainable future.
            </p>

            <div className="text-sm space-y-2">
              <p>📍 Bangalore, India</p>
              <p>📞 +91 9XXXXXXXXX</p>
              <p>✉️ info@zuvasolar.com</p>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-[#D84A0E] font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/investors" className="hover:text-white">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-[#D84A0E] font-semibold mb-4">Quick Actions</h3>

            <div className="space-y-4">
              <button className="w-full border border-gray-500 px-4 py-3 rounded hover:border-[#D84A0E] hover:text-white transition">
                📞 Call Us
              </button>

              <button className="w-full border border-gray-500 px-4 py-3 rounded hover:border-[#D84A0E] hover:text-white transition">
                ✉️ Request a Quote
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#D84A0E] font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-4 text-xl">
              <span className="hover:text-white cursor-pointer">🔗</span>
              <span className="hover:text-white cursor-pointer">📸</span>
              <span className="hover:text-white cursor-pointer">📘</span>
              <span className="hover:text-white cursor-pointer">▶️</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 ZuvaSolar. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
