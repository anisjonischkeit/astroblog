// store/users.ts
import { atom } from "nanostores";

type Theme = {
  backgroundColor: string;
};

const lightTheme: Theme = {
  backgroundColor: "#fff",
};
const darkTheme: Theme = {
  backgroundColor: "#111",
};

export const $theme = atom<Theme>(lightTheme);

export function switchThemeMode(dark: boolean) {
  if (dark) $theme.set(darkTheme);
  else $theme.set(lightTheme);
}
