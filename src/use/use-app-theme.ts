import { Theme, TiUseTheme } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useAppTheme(): TiUseTheme {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    return storedTheme || Theme.Light;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light
    );
  }, []);

  return { theme, toggleTheme };
}
