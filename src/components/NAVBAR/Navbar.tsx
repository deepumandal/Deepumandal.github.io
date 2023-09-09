import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import "./navbar.css";
import NSwitch from "../NAV_SWITCH/NSwitch";
// import { Fade } from "react-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import { pathNavigation } from "../../portfolio";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Flex
      m={"auto"}
      mt={"20px"}
      w={{
        base: "90%",
        sm: "90%",
        md: "800px",
        lg: "900px",
        xl: "1100px",
        "2xl": "1400px",
      }}
      borderColor="black"
      justifyContent={"space-between"}
    >
      <Flex
        display={"flex"}
        justifyContent={{
          base: "flex-start",
          md: "center"
        }}
        alignItems={"center"}
        color="thistheme.text"
        w={"fit-content"}
      >
        <Box fontSize={{ base: "13px", sm: "25px" }}
        // className="entity"
        >
          &lt;{" "}
        </Box>
        <Box
          onClick={() => {
            navigate("/");
          }}
          fontSize={{ base: "13px", sm: "34px" }}
          className="mercy"
        >
          {/* Codding / */}
          {" "} DevDynamo
          {" "}
          {/* <Image src={"./images/codingIsLife.png"} /> */}
        </Box>

        <Box fontSize={{ base: "13px", sm: "25px" }}
        // className="entity"
        >
          {" "}/&gt;
        </Box>
      </Flex>


      <Flex alignItems={"center"} justifyContent={"flex-end"} w={"70%"}>

        {pathNavigation.map((item) => {
          console.log("item.path", item.path);
          return (
            item.active && (
              <NSwitch
                isActive={location.pathname === item.path}
                active={item.active}
                path={item.path}
                key={item.id}
                name={item.name}
                id={item.id}
              />
            )
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
