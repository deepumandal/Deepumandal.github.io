import React from "react";

interface IHeading {
  title: string;
}
const Heading: React.FC<IHeading> = ({ title }) => {
  return (
    <h1 className="font-inter text-heading-l dark:text-heading-d font-semibold text-2xl laptop:text-3xl my-4">
      {title}
    </h1>
  );
};

export default Heading;
