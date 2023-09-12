import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { greeting } from "../../portfolio";
import Reveal from "react-awesome-reveal";
import { useLocation } from "react-router-dom";

interface FooterProps {
  theme: {
    secondaryText: string;
  };
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const location = useLocation()
  // if(location.pathname === "/") return <></> for future porpose 
  return (
    <Box m={"1rem"}>
      <Reveal
        keyframes={keyframes`
      from {
          opacity: 0
      }
      to {
          opacity: 1
      }
      `}
      >
        <Text
          textAlign="center"
          fontWeight="bold"
          fontFamily="Google Sans Regular"
          color={theme.secondaryText}
        >
          Made with ❤️ by {greeting.title}
        </Text>
      </Reveal>
    </Box>
  );
};

export default Footer;
