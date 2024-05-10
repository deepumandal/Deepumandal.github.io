import React from "react";

interface IAboutDescription {
  description: string[];
}
const AboutDescription: React.FC<IAboutDescription> = ({ description }) => {
  return (
    <div className="flex flex-col gap-2 w-full rounded-lg p-1 border ">
      {description.map((item, index) => {
        return (
          <p
            key={index}
            className="text-center font-inter text-text-l dark:text-text-d tabView:text-left text-base tabView:text-base laptop:text-lg p-2 laptop:p-3"
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default AboutDescription;
