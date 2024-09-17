import { TiUseTheme } from "@/types";
import { createContext } from "react";

export const ThemeContext = createContext<TiUseTheme | undefined>(undefined);
