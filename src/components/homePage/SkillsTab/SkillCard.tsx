import React from "react";

interface Iprops {
  title: string;
  performance: string;
}
const SkillCard: React.FC<Iprops> = ({ performance, title }) => {
  return (
    <div className="w-[31%] m-2 shadow-customShadow rounded-lg p-3 aspect-video flex items-center">
      <div className=" w-[60%] ">
        <p className="mx-4 font-epilogue">{title}</p>
        <p className="text-center m-4 text-4xl font-semibold text-blue-400 font-inter ">
          {performance}
        </p>
      </div>
      <div className="flex w-[40%] justify-center items-center">
        <img src="samplepiechart.png" className="w-20 h-20" alt="" />
      </div>
    </div>
  );
};

export default SkillCard;
