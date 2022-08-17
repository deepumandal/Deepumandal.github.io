import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";
import  greeting  from "../../assets/images/greetings.png";

const Home = () => {
  return (
    <Fade bottom>
      <Flex  w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1400px",
        }} 
        height={"800px"}
        border={"1px"}
        justifyContent={"space-between"}
        m={"auto"}
        id="Home">
        <Fade bottom>
          <Fade >left</Fade>
          <Fade >
            <Img src={greeting}/>
          </Fade>
        </Fade>
      </Flex>
    </Fade>
  );
};

export default Home;
