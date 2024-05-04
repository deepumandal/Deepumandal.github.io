import React, { useEffect } from "react";

const ThemeMode: React.FC = () => {
  const switchMode = () => {
    // todo
  };
  useEffect(() => {
    switchMode();
  }, []);

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
