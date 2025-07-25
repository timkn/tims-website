import { Button } from "~/components/ui/button";
import { NavLink } from "react-router";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="font-mono bg-dark-sky text-white-sky dark:bg-white-sky dark:text-dark-sky sticky mt-20 grid flex-wrap items-center justify-center gap-6 p-16 lg:flex lg:justify-between">
      <div className="flex flex-col items-center md:items-start order-2 lg:order-1">
        <p className="text-center">© 2025 Tim Knothe</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-center text-xs opacity-60 mt-1">v2.1.0</p>
          <p className="text-center text-xs opacity-60 mt-1">
            <a
              href="https://github.com/timkn/tims-website"
              target="_blank"
              className="flex flex-row items-center gap-1"
            >
              GitHub
              <IconArrowUpRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="grid flex-wrap items-center justify-center gap-6 lg:flex">
          <Button
            variant="link"
            className="text-white-sky dark:text-dark-sky"
            asChild
          >
            <NavLink className="text-center" to="/">
              Home
            </NavLink>
          </Button>
          <Button
            variant="link"
            className="text-white-sky dark:text-dark-sky"
            asChild
          >
            <NavLink className="text-center" to="/imprint">
              Imprint
            </NavLink>
          </Button>
          <Button
            variant="link"
            className="text-white-sky dark:text-dark-sky"
            asChild
          >
            <NavLink className="text-center" to="/privacy">
              Privacy Policy
            </NavLink>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://www.linkedin.com/in/timkn/" target="_blank">
              LinkedIn
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://github.com/timkn" target="_blank">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
