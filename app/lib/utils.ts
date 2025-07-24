import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Theme = "light" | "dark" | "system";

export function getThemePreference(): Theme {
  if (typeof window === "undefined") return "system";

  const storedTheme = localStorage.getItem("theme") as Theme;
  if (storedTheme && ["light", "dark", "system"].includes(storedTheme)) {
    return storedTheme;
  }
  return "system";
}

export function setThemePreference(theme: Theme) {
  if (theme === "system") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", theme);
  }
}

export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === "system") {
    const systemTheme = getSystemTheme();
    root.classList.toggle("dark", systemTheme === "dark");
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
}

export function useTheme() {
  // Start with a safe initial state that matches what the server would render
  const [theme, setTheme] = useState<Theme>("system");
  const [isHydrated, setIsHydrated] = useState(false);

  // Sync with actual theme after hydration
  useEffect(() => {
    setIsHydrated(true);
    // Get the actual theme preference from localStorage
    const actualTheme = getThemePreference();
    setTheme(actualTheme);

    // Ensure DOM matches the stored preference
    applyTheme(actualTheme);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (getThemePreference() === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isHydrated]);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemePreference(newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const currentEffectiveTheme = theme === "system" ? getSystemTheme() : theme;
    const newTheme = currentEffectiveTheme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  };

  return { theme, setTheme: updateTheme, toggleTheme };
}
