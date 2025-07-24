// Theme initialization script to prevent FOUC
(function () {
  try {
    // Get stored theme preference
    const storedTheme = localStorage.getItem("theme");
    const hasStoredTheme =
      storedTheme && ["light", "dark", "system"].includes(storedTheme);

    // Determine if dark mode should be applied
    const shouldBeDark = hasStoredTheme
      ? storedTheme === "dark" ||
        (storedTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      : window.matchMedia("(prefers-color-scheme: dark)").matches; // Default to system preference

    // Apply dark class
    document.documentElement.classList.toggle("dark", shouldBeDark);
  } catch (error) {
    // Fallback to system preference if localStorage fails
    try {
      document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (fallbackError) {
      // Ultimate fallback - assume light mode
      document.documentElement.classList.remove("dark");
    }
  }
})();
