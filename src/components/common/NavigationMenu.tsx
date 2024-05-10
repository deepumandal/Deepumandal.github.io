import React, { useState } from "react";

interface Iprops {
  lists: string[];
  onclick: (payload: string) => void;
}

const NavigationMenu: React.FC<Iprops> = ({ lists, onclick }) => {
  const [toggleDots, settoggleDots] = useState<boolean>(false);

  const OpenThreeDots = () => {
    settoggleDots((prev) => !prev);
  };
  const handleSelect = (payload: string) => {
    toggleDots && OpenThreeDots();
    onclick(payload);
  };

  const firstThreeItems = lists.slice(0, 3);
  const remainingItems = lists.slice(3);

  return (
    <div className="flex items-center justify-end gap-1 relative">
      <div className="flex gap-3 justify-end py-2 items-center ">
        {firstThreeItems.map((list, key) => (
          <div
            key={key}
            className={`dark:text-text-d cursor-pointer ${
              key === 0
                ? "text-blue-400 font-bold border-b-[3px] border-b-blue-400 leading-9"
                : "text-text-l font-semibold"
            }`}
            onClick={() => handleSelect(list)}
          >
            {list}
          </div>
        ))}
      </div>
      {lists.length >= 3 && (
        <div>
          <img
            src="three-dots.png"
            className="w-5 cursor-pointer"
            alt="three-dots"
            onClick={OpenThreeDots}
          />
        </div>
      )}
      {toggleDots && (
        <div className="absolute top-8 right-8 bg-primary-l dark:bg-primary-d shadow-customShadow px-3 py-2 rounded-md">
          {remainingItems.map((list, key) => (
            <div
              key={key}
              className={`dark:text-text-d text-text-l  py-2 px-3 cursor-pointer`}
              onClick={() => handleSelect(list)}
            >
              {list}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
