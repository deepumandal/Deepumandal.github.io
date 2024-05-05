import React, { useEffect } from "react";
import SocialIcons from "./SocialIcons";
import { ActiveThemeMode } from "../../utils/CurrentScreenIntoPx";

const SocialIconContainer: React.FC = () => {
  const iconsArray = [
    {
      icon: "facebook.svg",
      title: "Facebook",
      darkIcon: "facebook-dark.svg",
    },
    {
      icon: "twitter.svg",
      title: "Twitter",
      darkIcon: "facebook-dark.svg",
    },
    {
      icon: "instagram.svg",
      title: "Instagram",
      darkIcon: "facebook-dark.svg",
    },
    {
      icon: "github.svg",
      title: "Github",
      darkIcon: "facebook-dark.svg",
    },
    {
      icon: "linkedin.svg",
      title: "Linkedin",
      darkIcon: "facebook-dark.svg",
    },
    {
      icon: "youtube.svg",
      title: "YouTube",
      darkIcon: "facebook-dark.svg",
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
