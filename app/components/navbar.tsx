"use client";

import {
  IconBrightness,
  IconBrightnessFilled,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react";
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
          <IconBrightness className="h-5 w-5 text-white-sky-foreground" />
        ) : (
          <IconBrightnessFilled className="h-5 w-5 text-dark-sky-foreground" />
        )}
      </button>
    </nav>
  );
}
