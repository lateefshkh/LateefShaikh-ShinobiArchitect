"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "day" | "night";

interface AppContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playSFX: (type?: "click" | "kunai" | "dodon" | "powerup") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("day");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("lateef_theme") as ThemeMode | null;
    if (savedTheme) {
      if (savedTheme === "night") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setTimeout(() => setTheme(savedTheme), 0);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "day" ? "night" : "day";
    setTheme(nextTheme);
    localStorage.setItem("lateef_theme", nextTheme);
    if (nextTheme === "night") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sound is fully disabled per configuration
  const soundEnabled = false;
  const toggleSound = () => {};
  const playSFX = () => {};

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        soundEnabled,
        toggleSound,
        playSFX,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
