import React from "react";

interface IMyExpertiseCards {
  expertiseCards: {
    title: string;
    shortDescription: string;
    icon: string;
  }[];
}
const MyExpertiseCards: React.FC<IMyExpertiseCards> = ({ expertiseCards }) => {
  return (
    <div className="flex flex-col tabView:flex-row tabView:flex-wrap gap-2 w-full rounded-lg  ">
      {expertiseCards.map((expertiseCard) => {
        return (
          <div className="flex gap-2 border w-fit laptop:w-[48%] m-auto tabView:m-0 tabView:w-space-avialable  p-4 items-start rounded-xl">
            <img src={expertiseCard.icon} alt="" className="w-6 m-1" />
            <div className="flex flex-col w-fit">
              <h1 className="font-epilogue font-semibold text-heading-l dark:text-heading-d text-[18px] tabView:text-[20px] max-w-52">
                {expertiseCard.title}1
              </h1>
              <p className="font-inter text-[12px] text-text-l dark:text-text-d tabView:text-[14px] max-w-60 tabView:max-w-space-avialable">
                {expertiseCard.shortDescription}
              </p>
            </div>
            <p className="tabView:whitespace-nowrap font-inter text-link-l dark:text-link-d">know more</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyExpertiseCards;
