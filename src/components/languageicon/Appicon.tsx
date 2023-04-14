import { Image } from "@chakra-ui/react";
import React from "react";

type styleType = {
  color: string
}
interface AppiconProps {
  skillName: string,
  fontAwesomeClassname: string,
  imgurl: string,
  style: styleType

}

const Appicon: React.FC<AppiconProps> = ({ skillName, fontAwesomeClassname, style }) => {
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
