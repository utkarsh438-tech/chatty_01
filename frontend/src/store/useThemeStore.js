import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Blinko-theme") || "dim",
  setTheme: (theme) => {
    localStorage.setItem("Blinko-theme", theme);
    set({ theme });
  },
}));