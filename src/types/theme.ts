export enum Theme {
  Light = "light",
  Dark = "dark",
}

export type TiUseTheme = {
  theme: Theme;
  toggleTheme: () => void;
};
