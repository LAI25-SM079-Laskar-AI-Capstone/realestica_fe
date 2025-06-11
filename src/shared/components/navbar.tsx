import { Link, useLocation } from "react-router-dom";
import { featureRoutes, additionalRoutes } from "../utils/constants";

const Navbar = () => {
  const location = useLocation();

  const isRouteActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav className="relative z-50">
      {/* Logo Centered for Mobile (non-sticky) */}
      <div className="md:hidden flex justify-center py-4">
        <Link
          to="/"
          className="bg-white pt-2 tan-pearl rounded-full  text-slate-600 font-bold text-sm"
        >
          Realestica
        </Link>
      </div>

      {/* Top Navbar for Desktop */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-20 py-4 bg-white/50 backdrop-blur-md border-b border-slate-100">
        <Link to="/" className="tan-pearl text-slate-500 font-bold text-base">
          Realestica
        </Link>

        <ul className="flex items-center gap-6">
          {[...featureRoutes, ...additionalRoutes].map(
            ({ name, path, iconClassName }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`flex items-center gap-1 transition-colors ${
                    isRouteActive(path)
                      ? "text-blue-500 border-b border-blue-300"
                      : "text-gray-500 hover:text-blue-300"
                  }`}
                >
                  {iconClassName && <i className={iconClassName} />}
                  {name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Bottom Floating Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/50 border border-gray-100 shadow-lg  p-4 z-40 backdrop-blur-sm">
        <ul className="flex justify-around items-center">
          {[...featureRoutes, ...additionalRoutes].map(
            ({ path, iconClassName, name }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`flex flex-col items-center text-sm ${
                    isRouteActive(path) ? "text-blue-500" : "text-slate-500"
                  } hover:text-blue-400`}
                >
                  {iconClassName && (
                    <i className={`${iconClassName} text-3xl`} />
                  )}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
