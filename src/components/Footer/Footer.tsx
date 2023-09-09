import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { greeting } from "../../portfolio";

interface FooterProps {
  theme: {
    secondaryText: string;
  };
}

const Footer: React.FC<FooterProps> = ({theme}) => {

  return (
    <Box m={"1rem"}>
      {/* <Fade> */}
        <Text
          textAlign="center"
          fontWeight="bold"
          fontFamily="Google Sans Regular"
          color={theme.secondaryText}
        >
          Made with ❤️ by {greeting.title}
        </Text>
      {/* </Fade> */}
    </Box>
  );
};

export default Footer;
