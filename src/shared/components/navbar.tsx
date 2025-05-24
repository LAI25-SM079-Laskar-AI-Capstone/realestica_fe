import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex gap-2 p-2">
      <Link to="/">Realestica</Link>
      <ul className="flex gap-2 ml-auto"></ul>
    </nav>
  );
};

export default Navbar;
