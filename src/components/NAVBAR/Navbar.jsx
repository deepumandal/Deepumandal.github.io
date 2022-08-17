import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import NSwitch from "../NAV_SWITCH/NSwitch";
import { Fade } from "react-reveal";
const Navbar = () => {
  let Nav = [
    { name: "Home", id: "Home" },
    { name: "Education", id: "Education" },
    { name: "Projects", id: "Projects" },
    { name: "Contact Me", id: "Contact Me" },
  ];

  return (
    
      <Flex
        m={"auto"}
        mt={"20px"}
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        borderColor="black"
      >
        <Box color="thistheme.text">
          <Link to="Home">
          <span className="entity">&lt;</span>
          <span className="mercy">Mercy /</span>
          <span className="entity">&gt;</span>
          </Link>
        </Box>
        <Spacer />
        <Flex alignItems={"center"}>
          {Nav.map((item) => {
            return <NSwitch key={item.id} name={item.name} id={item.id} />;
          })}
        </Flex>
      </Flex>
 
  );
};

export default Navbar;
