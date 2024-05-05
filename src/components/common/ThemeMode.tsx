import React, { useEffect, useState } from "react";

const ThemeMode: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const switchMode = () => {
    setTheme((pre) => (pre === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div
      className="aspect-square laptop:w-fit laptop:h-fit  tabView:h-full bg-white rounded-full p-2 cursor-pointer"
      onClick={switchMode}
    >
      <img src="dark-mode.png" className="w-10 aspect-square" alt="dark icon" />
      {/* <img src="light-mode.png" className="w-10 aspect-square" alt="light icon" /> */}
    </div>
  );
};

export default ThemeMode;
