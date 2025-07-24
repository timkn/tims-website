"use client";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { NavLink } from "react-router";
import { useTheme, getSystemTheme } from "../lib/utils";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  // Determine which icon to show based on current effective theme
  const currentEffectiveTheme = theme === "system" ? getSystemTheme() : theme;
  const isDark = currentEffectiveTheme === "dark";

  return (
    <nav className="flex justify-between items-center p-12">
      <NavLink to="/" className="dark:text-white-sky text-dark-sky font-mono">
        knothe.me
      </NavLink>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <IconSunFilled className="h-5 w-5 text-yellow-500" />
        ) : (
          <IconMoonFilled className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </nav>
  );
}
