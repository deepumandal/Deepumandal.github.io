import { Image } from "@chakra-ui/react";
import React from "react";

const Appicon = ({ skillName, fontAwesomeClassname, style }) => {
//   console.log(style);
  return (
    <div >
      <Image
        width={"70px"}
        margin={"5px"}
        src={`./images/${fontAwesomeClassname}`}
      />
    </div>
  );
};

export default Appicon;
