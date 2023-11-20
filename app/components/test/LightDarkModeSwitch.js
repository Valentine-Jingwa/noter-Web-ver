import React, { useState, createContext } from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

export default function LightDarkModeSwitch() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(curr => curr === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex justify-center m-8">
        <div className="App w-1/4 rounded-xl p-4 flex flex-col justify-center" id={theme}>
          <h1 className="text-white font-bold text-center">Light / Dark Mode</h1>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/> 
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
