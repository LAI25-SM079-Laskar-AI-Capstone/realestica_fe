import { Link, useLocation } from "react-router-dom";

const featureRoutes = [
  {
    name: "Cari Properti",
    path: "/",
    icon: <i className="bxr  bx-home-alt-3"></i>,
  },
  {
    name: "Tren Pasar",
    path: "/market",
    icon: <i className="bxr  bx-trending-up"></i>,
  },
];

const additionalRoutes = [
  {
    name: "tentang kami",
    path: "/about",
    icon: null,
  },
  {
    name: "hubungi kami",
    path: "/contact",
    icon: null,
  },
];

const Navbar = () => {
  const location = useLocation();

  const isRouteActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav className="relative z-50">
      {/* Hamburger checkbox */}
      <input type="checkbox" id="nav-toggle" className="peer hidden" />

      {/* Backdrop */}
      <label
        htmlFor="nav-toggle"
        className={`
          fixed inset-0 bg-black/40 z-30 opacity-0 pointer-events-none
          transition-opacity duration-300
          peer-checked:opacity-100 peer-checked:pointer-events-auto
          md:hidden
        `}
      ></label>

      {/* Top Navbar */}
      <div className=" flex justify-between items-center px-6 md:px-20 py-4">
        <Link
          to="/"
          className="tan-pearl text-slate-500 font-bold text-sm md:text-base"
        >
          Realestica
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {[...featureRoutes, ...additionalRoutes].map(
            ({ name, path, icon }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`flex items-center gap-1 transition-colors ${
                    isRouteActive(path)
                      ? "text-blue-500 border-b border-blue-300"
                      : "text-gray-500 hover:text-blue-300"
                  }`}
                >
                  {icon}
                  {name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Hamburger icon */}
        <label
          htmlFor="nav-toggle"
          className="md:hidden text-2xl text-gray-600 cursor-pointer z-50"
        >
          <span className="peer-checked:hidden">
            <i className="bx bx-menu" />
          </span>
          <span className="hidden peer-checked:inline">
            <i className="bx bx-x" />
          </span>
        </label>
      </div>

      {/* Slide-up Mobile Menu */}
      <div
        className={`
          fixed bottom-0 left-0 w-full bg-white z-40 pt-4 border-t border-gray-200
          h-[50vh] overflow-y-auto transition-transform duration-300
          translate-y-full peer-checked:translate-y-0
          md:hidden rounded-t-4xl
        `}
      >
        <ul className="flex flex-col gap-4 p-6">
          {[...featureRoutes, ...additionalRoutes].map(
            ({ name, path, icon }) => (
              <li key={name}>
                {/* Close menu when clicked */}
                <label htmlFor="nav-toggle" className="block w-full">
                  <Link
                    to={path}
                    className={`flex items-center gap-2 text-base ${
                      isRouteActive(path) ? "text-blue-500" : "text-slate-600"
                    } hover:text-blue-400`}
                  >
                    {icon}
                    {name}
                  </Link>
                </label>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
