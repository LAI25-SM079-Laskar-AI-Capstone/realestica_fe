import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex gap-2 p-2">
      <Link to="/" className="tan-pearl">
        Realestica
      </Link>
      <ul className="flex gap-2 ml-auto">
        <Link to="/houses">Find a Home</Link>
        <Link to="/market">Market Trends</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
