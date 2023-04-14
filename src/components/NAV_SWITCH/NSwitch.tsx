import React from "react";
import { Link } from "react-scroll";
import { Flex } from "@chakra-ui/react";
import "./this.css";

interface NSwitchProps {
  name: string;
  id: string;
}

const NSwitch: React.FC<NSwitchProps> = ({ id, name }) => {
  // const [select, setselect] = useState("Home");
  // const setcolor = (name: string) => {
  //   setselect(name);
  // };

  return (
    <Link to={id} smooth={true} duration={1000}>
      <Flex
        className="switch"
        fontSize={{ base: "10px", sm: "15px" }}
        padding={"10px"}
        ml={"10px"}
      >
        {name}
      </Flex>
    </Link>
  );
};

export default NSwitch;
