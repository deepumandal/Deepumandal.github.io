import React from "react";

interface ISocialIcons {
  icon: string;
  title: string;
}
const SocialIcons: React.FC<ISocialIcons> = ({ icon, title }) => {
  return (
    <div className="flex items-center">
      <img
        src={icon}
        alt={title}
        className="w-[24px] aspect-square rounded-full"
        title={title}
      />
    </div>
  );
};

export default SocialIcons;
