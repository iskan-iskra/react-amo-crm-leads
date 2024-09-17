import { ThemeContext } from "@/context";
import { useAppTheme } from "@/use";
import { FC } from "react";

export const appThemeProvider = (WrappedComponent: FC) => {
  return function WithAppThemeProvider() {
    const { theme, toggleTheme } = useAppTheme();
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <WrappedComponent />
      </ThemeContext.Provider>
    );
  };
};
