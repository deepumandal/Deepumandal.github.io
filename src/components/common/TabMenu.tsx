import React from "react";
import ThemeMode from "./ThemeMode";

const TabMenu: React.FC = () => {
  const tabs = [
    {
      title: "About Me",
      icon: "about-me.png",
    },
    {
      title: "Skills & Expertise",
      icon: "skills.png",
    },
    {
      title: "Projects & Experience",
      icon: "Projects.png",
    },
    {
      title: "Education",
      icon: "education.png",
    },
    {
      title: "Achievements & blogs",
      icon: "Achievements.png",
    },
    {
      title: "Contact Me",
      icon: "contact.png",
    },
  ];
  return (
    <div className="hidden tabView:flex tabView:flex-row-reverse laptop:h-fit laptop:flex-col laptop:items-center tabView: items-center tabView:gap-4  tabView:mb-4 p-2">
      <ThemeMode />
      <div className="bg-primary-l dark:bg-primary-d tabView:p-3 tabView:flex tabView:gap-4 laptop:flex laptop:flex-col rounded-2xl laptop:my-10 laptop:gap-5 laptop:py-8">
        {" "}
        {tabs.map((tab) => {
          return (
            <div className="bg-secondary-l dark:bg-secondary-d p-3 cursor-pointer rounded-xl border ">
              <img src={tab.icon} className=" tabView:w-4 laptop:w-7" key={tab.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabMenu;
