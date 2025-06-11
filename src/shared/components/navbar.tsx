import { Link, useLocation } from "react-router-dom";

const featureRoutes = [
  {
    name: "Find a Home",
    path: "/",
    icon: <i className="bx  bx-building-house"></i>,
  },
  {
    name: "Market Trends",
    path: "/market",
    icon: <i className="bx  bx-chart-trend"></i>,
  },
];

const additionalRoutes = [
  {
    name: "Our Story",
    path: "/about",
    icon: "",
  },
  {
    name: "Get In Touch",
    path: "/contact",
    icon: "",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className=" bg-slate-100 flex justify-between items-center px-20 py-4">
      <Link to="/home" className="tan-pearl  text-slate-500 font-bold text-xs">
        Realestica
      </Link>

      <ul className="rounded-full flex py-2 px-4 gap-4 ">
        {featureRoutes.map((route) => {
          const isActive =
            route.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(route.path);

          return (
            <li key={route.name}>
              <Link
                to={route.path}
                className={`${
                  isActive
                    ? "text-blue-500 border-b border-b-blue-300"
                    : "text-gray-500"
                } flex items-center gap-1 hover:text-blue-300 transition-colors`}
              >
                {route.icon}
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-4">
        {additionalRoutes.map((route) => {
          const isActive = location.pathname.startsWith(route.path);
          return (
            <li key={route.name}>
              <Link
                to={route.path}
                className={`${
                  isActive ? "text-slate-800" : "text-slate-400"
                } flex items-center gap-1 hover:text-blue-300 transition-colors`}
              >
                {route.icon}
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
