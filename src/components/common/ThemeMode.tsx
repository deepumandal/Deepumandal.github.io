import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { IgeneralState } from "../../redux/initialState/general";
import { switchThemeModeReducer } from "../../redux/Slices/general.slice";

const ThemeMode: React.FC = () => {
  const { activeTheme } = useSelector<RootState>(
    (store) => store.generalSlice
  ) as IgeneralState;
  const dispatch = useDispatch<AppDispatch>();

  const switchMode = () => {
    dispatch(switchThemeModeReducer());
  };
  return (
    <div
      className="aspect-square laptop:w-fit laptop:h-fit  tabView:h-full bg-white rounded-full p-2 cursor-pointer"
      onClick={switchMode}
    >
      {activeTheme === "light" ? (
        <img
          src="dark-mode.png"
          className="w-10 aspect-square m-auto"
          alt="dark icon"
        />
      ) : (
        <img
          src="light-mode.png"
          className="w-10 aspect-square m-auto"
          alt="light icon"
        />
      )}
    </div>
  );
};

export default ThemeMode;
