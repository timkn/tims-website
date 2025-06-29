import { IconMoonFilled } from "@tabler/icons-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-12">
      <NavLink to="/" className="dark:text-white-sky text-dark-sky font-mono">
        knothe.me
      </NavLink>

      <IconMoonFilled />
    </nav>
  );
}
