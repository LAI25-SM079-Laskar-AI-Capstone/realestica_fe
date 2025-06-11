import { Link, useLocation } from "react-router-dom";
import { allRoutes } from "../utils/constants";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-slate-100 px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
      {/* Company Info & Social Media */}
      <div className="flex flex-col gap-4 max-w-md md:w-1/3">
        {" "}
        {/* Added md:w-1/3 for better distribution */}
        <Link to="/" className="tan-pearl text-blue-500 font-bold text-3xl">
          Realestica
        </Link>
        <p className="text-gray-600 text-sm">
          {" "}
          {/* Reduced text size for better readability on smaller screens */}
          Smart real estate platform with ML-powered price predictions for land
          in Jakarta.
        </p>
        <div className="flex flex-col gap-1 text-slate-400 text-sm">
          {" "}
          {/* Grouped contact info */}
          <span>realestica@inc.id</span>
          <span>Jakarta Selatan, Jakarta, Indonesia</span>
        </div>
        <div className="flex gap-4 text-2xl mt-4">
          {" "}
          {/* Increased icon size for better tap target */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bxl bx-instagram-alt"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bxl bx-linkedin-square"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="bxl bx-twitter-x"></i>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-4 md:w-1/3">
        {" "}
        {/* Added md:w-1/3 for better distribution */}
        <h3 className="font-semibold text-gray-700 text-lg">
          Quick Links
        </h3>{" "}
        {/* Added a heading for clarity */}
        <ul className="flex flex-col gap-3">
          {" "}
          {/* Adjusted gap for better spacing */}
          {allRoutes.map(({ name, path }) => {
            const isActive = location.pathname.startsWith(path);
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`flex items-center gap-2 transition-colors text-base ${
                    // Adjusted text size
                    isActive
                      ? "text-blue-500 font-medium" // Added font-medium for active state
                      : "text-gray-500 hover:text-blue-500" // Changed hover color to primary blue
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Legal Links & Copyright */}
      <div className="flex flex-col gap-4 md:w-1/3 md:items-end">
        {" "}
        {/* Aligned to end on desktop */}
        <h3 className="font-semibold text-gray-700 text-lg">Legal</h3>{" "}
        {/* Added a heading for clarity */}
        <div className="flex flex-col gap-3 text-sm text-slate-400">
          {" "}
          {/* Changed to flex-col for better stacking on mobile */}
          <Link to="/terms" className="hover:text-blue-500 transition-colors">
            Terms of Use
          </Link>
          <Link to="/privacy" className="hover:text-blue-500 transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="text-sm text-slate-400 mt-auto md:mt-8">
          {" "}
          {/* Adjusted margin for spacing */}© {new Date().getFullYear()}{" "}
          Realestica. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
