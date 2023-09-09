import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type languages = {
  name: string,
  iconifyClass: string
}
interface ProjectProps {
  id: string,
  name: string,
  url: string,
  createdAt: string,
  description: string[],
  link: string,
  languages: languages[]
}

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
        base: "90%", sm: "400px"
      }}
      align={"left"}
      p={"10px"}
      pl={{ base: "20px", sm: "auto" }}
      pr={{ base: "20px", sm: "auto" }}
      textAlign={"left"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      height={"300px"}
    >
      <Heading
        onClick={() => (window.open(url, '_blank'))}
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
      {description.map((item) => {
        return (
          <Text
            onClick={() => (window.open(link, "_blank"))}
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
      <Flex
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          sx={{
            fontFamily: "Open Sans",
            fontWeight: 400,
            color: "#7f8daa",
          }}
          fontSize={{ base: "14px", sm: "16px" }}
        >
          {" "}
          Created on {createdAt}
        </Text>
        <Flex gap={"15px"} flexWrap={"wrap"} w={{ base: "90%", sm: "50%" }}>
          {
            languages.map((item, i) => {
              return <Image src={`./images/${item.iconifyClass}`} w={"25px"} />
            })
          }
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Project;
