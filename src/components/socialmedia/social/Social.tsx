import { Box, Image } from "@chakra-ui/react";
import React from "react";
interface SocialProps {
  name: string,
  link: string,
  fontAwesomeIcon: string,
  backgroundColor: string
}

const Social: React.FC<SocialProps> = ({ name, link, fontAwesomeIcon, backgroundColor }) => {
  return (
    <Box
      w={"41px"}
      h={"41px"}
      backgroundColor={backgroundColor}
      borderRadius={"50%"}
      m={"auto"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image width={"80%"} src={`/images/${fontAwesomeIcon}`} />
    </Box>
  );
};

export default Social;
