import { Button } from "~/components/ui/button";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="font-mono bg-dark-sky text-white-sky dark:bg-white-sky dark:text-dark-sky sticky mt-20 grid flex-wrap items-center justify-center gap-6 p-16 lg:flex lg:justify-between">
      <div className="flex flex-col items-start">
        <p className="text-center">© 2025 Tim Knothe</p>
        <p className="text-center text-xs opacity-60 mt-1">v2.0.0</p>
      </div>

      <div>
        <div className="grid flex-wrap items-center justify-center gap-6 lg:flex">
          <Button variant="link" className="text-white-sky" asChild>
            <NavLink className="text-center" to="/imprint">
              Imprint
            </NavLink>
          </Button>
          <Button variant="link" className="text-white-sky" asChild>
            <NavLink className="text-center" to="/privacy">
              Privacy Policy
            </NavLink>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://www.linkedin.com/in/timkn/">LinkedIn</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://github.com/timkn">GitHub</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
