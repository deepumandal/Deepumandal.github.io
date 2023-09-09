import { Image } from "@chakra-ui/react";
import React from "react";
import { Tooltip } from '@chakra-ui/react'
type styleType = {
  color: string
}
interface AppiconProps {
  skillName: string,
  fontAwesomeClassname: string,
  imgurl: string,
  style: styleType

}

const Appicon: React.FC<AppiconProps> = ({ imgurl, skillName, fontAwesomeClassname, style }) => {
  //   console.log(style);
  return (
    <div >
      <Tooltip  label={skillName}>
        <Image
          width={{base : "35px", sm :"60px"}}
          margin={"5px"}
          sx={{ cursor: "pointer" }}
          src={`./imgurl/${imgurl}`}
        />
      </Tooltip>
    </div>
  );
};

export default Appicon;
