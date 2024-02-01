import { HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
interface GreetProps {
  title: string;
  nickname: string;
  subTitle: string;
  resumeLink: string;
  portfolio_repository: string;
  githubProfile: string;
}
const Greet: React.FC<GreetProps> = ({ title, nickname, subTitle}) => {
  return (
    <VStack
      // border={"1px"}
      height="fit-content"
      textAlign={{ sm: "left", md: "left" }}
    >
      {/* 50 */}
      <Text
        fontSize={{ base: "30px", sm: "50px" }}
        lineHeight={{ base: "33px", sm: "55px" }}
        w={{ base: "70%", sm: "80%" }}
        m={"auto"}
        mt={{ base: "50px" }}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,

          color: "thistheme.text",
        }}
      >
        {" "}
        {title}
      </Text>

      <Text
        pt={{ base: "0px", sm: "15px" }}
        w={{ base: "fit-content", sm: "80%" }}
        m={"auto"}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          fontSize: "24px",
          color: "thistheme.text",
          lineHeight: "20px",
        }}
      >
        {" "}
        <i>&#40; {nickname} &#41;</i>
      </Text>

      <Text
        w={{ base: "fit-content", sm: "80%" }}
        m={"auto"}
        pt={{ sm: "20px", base: "0px" }}
        fontSize={{ sm: "20px", base: "16px" }}
        lineHeight={{ sm: "35px", base: "26px" }}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 500,
          color: "thistheme.describe",
          width: "80%",
        }}
      >
        {" "}
        {subTitle}
      </Text>
    </VStack>
  );
};

export default Greet;
