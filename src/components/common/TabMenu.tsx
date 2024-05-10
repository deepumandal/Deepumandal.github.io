import React from "react";
import ThemeMode from "./ThemeMode";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { IgeneralState } from "../../redux/initialState/general";
import { TabsEnum } from "../../utils/global.enum";
import { switchTabReducer } from "../../redux/Slices/general.slice";

const TabMenu: React.FC = () => {
  const { TabLists } = useSelector<RootState>(
    (store) => store.generalSlice
  ) as IgeneralState;
  const dispatch = useDispatch<AppDispatch>();

  const handleTabChange = (tabTitle: TabsEnum) => {
    dispatch(switchTabReducer(tabTitle));
  };
  return (
    <div className="hidden tabView:flex tabView:flex-row-reverse laptop:h-fit laptop:flex-col laptop:items-center tabView: items-center tabView:gap-4  tabView:mb-4 p-2">
      <ThemeMode />
      <div className="bg-primary-l dark:bg-primary-d tabView:p-3 tabView:flex tabView:gap-4 laptop:flex laptop:flex-col rounded-2xl laptop:my-10 laptop:gap-5 laptop:py-8">
        {" "}
        {TabLists.map((tab) => {
          return (
            <div
              className="bg-secondary-l dark:bg-secondary-d p-3 cursor-pointer rounded-xl border "
              onClick={() => handleTabChange(tab.title)}
            >
              <img
                src={tab.icon}
                className={`tabView:w-4 laptop:w-8`}
                key={tab.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabMenu;
