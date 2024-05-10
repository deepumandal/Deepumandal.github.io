import React from "react";

interface IHeading {
  title: string;
  sx?: string;
}
const Heading: React.FC<IHeading> = ({ title, sx }) => {
  return (
    <h1
      className={`font-epilogue text-heading-l dark:text-heading-d font-semibold text-2xl ${sx}`}
    >
      {title}
    </h1>
  );
};

export default Heading;
