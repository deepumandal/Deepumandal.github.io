import React from "react";
import {
  Link,
  Tooltip,
  Img,
  Stack,
} from "@chakra-ui/react";

interface Logo {
  siteName: string;
  profileLink: string;
  iconifyClassname: string;
  style: React.CSSProperties;
}

interface Props {
  logos: Logo[];
}

const CompetitiveSites: React.FC<Props> = ({ logos }) => {
  return (
    <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
        {logos.map((logo) => (
          <Tooltip key={logo.siteName} label={logo.siteName} placement="top">
              <Link href={logo.profileLink} target="_blank" rel="noopener noreferrer">
                <Img
               width={"60px"}
               margin={"5px"}
               alt={`./imgurl/${logo.iconifyClassname}`}
               sx={{ cursor: "pointer" }}     
              src={`./imgurl/${logo.iconifyClassname}`}
            />
              </Link>
          </Tooltip>
        ))}
    </Stack>
  );
};

export default CompetitiveSites;
