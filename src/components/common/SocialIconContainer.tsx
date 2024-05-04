import React from "react";
import SocialIcons from "./SocialIcons";

const SocialIconContainer:React.FC = () => {
  const iconsArray = [
    {
      icon: "facebook.svg",
      title: "Facebook",
    },
    {
      icon: "twitter.svg",
      title: "Twitter",
    },
    {
      icon: "instagram.svg",
      title: "Instagram",
    },
    {
      icon: "github.svg",
      title: "Github",
    },
    {
      icon: "linkedin.svg",
      title: "Linkedin",
    },
    {
      icon: "youtube.svg",
      title: "YouTube",
    },
  ];
  return (
    <div className="flex items-center gap-4 py-4 tabView:py-2">
      {iconsArray.map((icon) => {
        return <SocialIcons key={icon.title} {...icon} />;
      })}
    </div>
  );
};

export default SocialIconContainer;
