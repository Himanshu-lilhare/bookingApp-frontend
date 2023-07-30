import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="h-7  text-sm lg:text-lg w-full border-black  border-solid border">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default Navbar;
