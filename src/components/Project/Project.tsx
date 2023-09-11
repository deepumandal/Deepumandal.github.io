import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

type languages = {
  name: string;
  iconifyClass: string;
};
interface ProjectProps {
  id: string;
  name: string;
  url: string;
  createdAt: string;
  description: string[];
  link: string;
  languages: languages[];
}


const Upwards = keyframes`
from {
  opacity: 0;
  transform: translateY(50px);
}

to {
  opacity: 1;
  transform: translateY(0px);
}
`

const Project: React.FC<ProjectProps> = ({
  id,
  name,
  createdAt,
  url,
  description,
  link,
  languages,
}) => {
  return (


    <VStack
      bg={"#a6e1fa"}
      w={{
        base: "90%",
        sm: "450px",
      }}
      align={"left"}
      p={"10px"}
      pl={{ base: "20px", sm: "auto" }}
      pr={{ base: "20px", sm: "auto" }}
      textAlign={"left"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      height={"auto"}
      justifyContent={"space-between"}
    >
      <Reveal duration={2000} keyframes={Upwards}>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Heading
            // onClick={() => (window.open(url, '_blank'))}
            fontSize={{
              base: "16px",
              sm: "25px",
            }}
            alignSelf={"left"}
            lineHeight={{
              base: "19px",
              sm: "30px",
            }}
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 700,
              color: "thistheme.text",
            }}
          >
            {name}
          </Heading>
          <Text
            sx={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              color: "#7f8daa", whiteSpace: "nowrap"
            }}
            fontSize={{ base: "14px", sm: "16px" }}
          >
            {" "}
            Created on {createdAt}
          </Text>
        </Stack>
      </Reveal>
      <Reveal duration={2000} keyframes={Upwards}>
        <Box minHeight={"100px"} height="fit-content">
          {description.map((item) => {
            return (
              <Text
                // onClick={() => window.open(link, "_blank")}
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 400,
                  color: "thistheme.text",

                }}
                fontSize={{ base: "13px", sm: "13px" }}
              >
                {" "}
                {item}{" "}
              </Text>
            );
          })}
        </Box>
      </Reveal>
      <Reveal duration={2000} keyframes={Upwards}>
        <Flex flexDir={{ base: "column", sm: "row" }}>
          <Flex gap={"15px"} flexWrap={"wrap"} w={{ base: "90%" }}>
            {languages.map((item, i) => {
              return (
                <ProjectIcon name={item.name} iconifyClass={item.iconifyClass} key={i} />
              );
            })}
          </Flex>
        </Flex></Reveal>

      <Reveal duration={2000} keyframes={Upwards}>
        <Stack>
          <Button onClick={() => window.open(url, "_blank")}>Github </Button>
          <Button onClick={() => window.open(link, "_blank")}>Live </Button>
        </Stack></Reveal>
    </VStack>

  );
};

export default Project;


const ProjectIcon: React.FC<{ name: string, iconifyClass: string }> = ({
  iconifyClass, name
}) => {
  return (
    <Box >
      {/* <Tooltip label={name}> */}
      <Image src={`./images/${iconifyClass}`} w={"25px"} />
      {/* </Tooltip> */}
    </Box>
  )
}