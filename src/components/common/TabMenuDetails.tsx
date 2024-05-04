import React from "react";
import Heading from "./Heading";
import AboutDescription from "../homePage/AboutMeTab/AboutDescription";
import MyExpertiseCards from "../homePage/AboutMeTab/MyExpertiseCards";
import ShowMore from "../homePage/AboutMeTab/ShowMore";

const TabMenuDetails: React.FC = () => {
  const expertiseCards = [
    {
      icon: "idea.svg",
      title: "Ui/Ux  Design",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      icon: "apple.svg",
      title: "App Development",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      icon: "apple.svg",
      title: "App Development",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      icon: "apple.svg",
      title: "App Development",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      icon: "apple.svg",
      title: "App Development",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      icon: "apple.svg",
      title: "App Development",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      icon: "apple.svg",
      title: "App Development",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
  ];
  const description = [
    "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple,beautifuland intuitive designs.",
    " My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
  ];
  return (
    <div className="bg-white h-fit w-full px-4 py-5 flex flex-col justify-center tabView:justify-start gap-2 tabView:gap-0 mb-14 tabView:m-0 rounded-2xl  overflow-hidden">
      <div className="gap-1  flex items-center tabView:items-start tabView:p-2 laptop:p-5 flex-col">
        <Heading title="About me" />
        <AboutDescription description={description} />
      </div>
      <div className="gap-1 flex items-center tabView:items-start tabView:p-2 laptop:p-5 flex-col">
        <Heading title="I am" />
        <MyExpertiseCards expertiseCards={expertiseCards.splice(0, 3)} />
        {/* ScreenWidth */}
      </div>
      {expertiseCards.length > 2 && <ShowMore />}
    </div>
  );
};

export default TabMenuDetails;
