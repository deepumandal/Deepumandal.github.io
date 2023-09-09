import React from "react";
import { Flex } from "@chakra-ui/react";
import "./this.css";
import { Link } from "react-router-dom"

interface NSwitchProps {
  name: string, id: string, path: string, active: Boolean, isActive: Boolean
}

const NSwitch: React.FC<NSwitchProps> = ({ path, name, isActive }) => {

  return (
    <Link to={path}>
      <Flex
        className="switch"
        fontSize={{ base: "10px", sm: "15px" }}
        padding={{ base : "5px", sm : "10px"}}
        ml={{base : "3px", md : "3px", lg : "10px"}}
        sx={{
          transform: isActive && "scale(1.1)",
          transistion: isActive && "5s"
        }}
      >
        {name}
      </Flex>
    </Link >
  );
};

export default NSwitch;
