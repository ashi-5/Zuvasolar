import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on home → just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Go to home and scroll to top
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };
  return (
    <footer className="relative overflow-hidden text-white">
      {/* ORANGE RADIAL GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 -z-20
        [background:radial-gradient(120%_120%_at_50%_10%,#FFE5D1_15%,#FFB07A_45%,#E66528_100%)]"
      ></div>

      {/* DARK ORANGE OVERLAY (NOT GRAY / NOT BLACK) */}
      <div className="absolute inset-0 -z-10 bg-[#9A3E12]/70"></div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: BRAND */}
          <div>
            <div className="mb-4">
              <Link
                to="/"
                onClick={handleClick}
                className="flex items-center text-3xl font-semibold"
              >
                <img
                  src="/images/solar_icon.png"
                  alt="Zuva Solar logo"
                  className="h-10 w-10 mr-3"
                />

                <span>
                  Zuva <span className="text-[#FFD2B8]">Solar</span>
                </span>
              </Link>
            </div>

            <p className="text-[#FFE6D6] max-w-md leading-relaxed">
              Delivering reliable solar solutions focused on long-term value,
              sustainability, and local impact.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-base mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#FFB98F]/60
                           flex items-center justify-center
                           text-[#FFE6D6]
                           hover:text-white hover:border-[#FFD2B8]
                           transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#FFB98F]/60
                           flex items-center justify-center
                           text-[#FFE6D6]
                           hover:text-white hover:border-[#FFD2B8]
                           transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://wa.me/917995500320"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-[#FFB98F]/60
                           flex items-center justify-center
                           text-[#FFE6D6]
                           hover:text-white hover:border-[#FFD2B8]
                           transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT: LINKS + CONTACT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base">
            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3 text-[#FFE6D6]">
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/work" className="hover:text-white transition">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div className="text-base">
              <h3 className="font-semibold  mb-4 text-white">Contact</h3>
              <ul className="space-y-3 text-[#FFE6D6]">
                <li>
                  <a
                    href="mailto:info@zuvasolar.com"
                    className="hover:text-white transition"
                  >
                    info@zuvasolar.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917995500320"
                    className="hover:text-white transition"
                  >
                    +91 79955 00320
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#FFB98F]/40 mt-12 pt-6 text-sm text-center text-[#FFD2B8]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Zuva Solar</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
