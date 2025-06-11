import { Link, useLocation } from "react-router-dom";

const routes = [
  { name: "Find a Home", path: "/" },
  { name: "Market Trends", path: "/market" },
  { name: "Our Story", path: "/about" },
  { name: "Get In Touch", path: "/contact" },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-slate-100 px-6 md:px-20 py-10 min-h-[30vh] flex flex-col md:flex-row justify-between gap-8">
      {/* Company Info */}
      <div className="flex flex-col gap-2 max-w-md">
        <Link to="/" className="tan-pearl text-blue-500 font-bold text-3xl">
          Realestica
        </Link>
        <p className="text-gray-600">
          Smart real estate platform with ML-powered price predictions for land
          in Jakarta.
        </p>
        <span className="text-slate-400">realestica@inc.id</span>
        <span className="text-slate-400">
          Jakarta Selatan, Jakarta, Indonesia
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-4">
        {routes.map(({ name, path }) => {
          const isActive = location.pathname.startsWith(path);

          return (
            <li key={name}>
              <Link
                to={path}
                className={`flex items-center gap-2 transition-colors ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-500 hover:text-blue-300"
                }`}
              >
                {/* Future Icon Slot */}
                {/* <span>{icon}</span> */}
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
