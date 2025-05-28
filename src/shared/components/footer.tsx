import { Link } from "react-router-dom";

const Footer = () => {
  const routes = [
    {
      name: "Find a Home",
      path: "/",
      icon: "",
    },
    {
      name: "Market Trends",
      path: "/market",
      icon: "",
    },

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
  return (
    <footer className=" min-h-[30vh] bg-slate-100 flex justify-between items-baseline  px-20 py-10">
      <div id="company" className="flex flex-col gap-2">
        <Link to="/home" className="tan-pearl text-blue-500 font-bold text-3xl">
          Realestica
        </Link>
        <p className="w-[27ch]">
          Smart real estate platform with ML-powered price predictions for land
          in Jakarta.
        </p>
        <span className="text-slate-400">realestica@inc.id</span>
        <span className="text-slate-400">
          jakarta selatan, jakarta, indonesia
        </span>
      </div>
      <ul className=" flex flex-col  gap-4 ">
        {routes.map((route) => {
          const isActive = location.pathname.startsWith(route.path);
          return (
            <li key={route.name}>
              <Link
                to={route.path}
                className={`${
                  isActive ? "text-blue-500" : "text-gray-500"
                } flex items-center gap-1 hover:text-blue-300 transition-colors`}
              >
                {route.icon}
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
