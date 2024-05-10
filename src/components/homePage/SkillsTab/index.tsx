import React from "react";
import Heading from "../../common/Heading";
import NavigationMenu from "../../common/NavigationMenu";
import ShowMore from "../../common/ShowMore";
import SkillCard from "./SkillCard";

const SkillsTab: React.FC = () => {
  const handleSelect = (payload: string) => {};
  const lists = [
    "Programming Language",
    "Frameworks and libraries",
    "Database Technologies",
    "Developement Tools",
    "Web developement",
    "Testing & QA",
    "Communication",
  ];
  const skillsList = [
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
    {
      title: "JavaScript",
      performance: "72%",
    },
  ];
  return (
    <div className="tabView:p-2 laptop:p-5">
      <Heading title="Skills & Expertise" />
      <NavigationMenu lists={lists} onclick={handleSelect} />
      <div className="flex flex-wrap justify-center w-space-avialable ">
        {skillsList.slice(0, 9).map((item) => (
          <SkillCard {...item} />
        ))}
      </div>
      {skillsList.length > 9 && <ShowMore />}
    </div>
  );
};

export default SkillsTab;
