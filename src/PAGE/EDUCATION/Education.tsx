import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { certifications, competitiveSites, degrees } from "../../portfolio";
// import Degree from "../../components/Degree/Degree";
import Certificate from "../../components/certificates/Certificate";
import Degree from "../../components/Degree/Degree";
import CompetitiveSites from "../../components/CompetitiveSites/CompetitiveSites";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { appTheme } from "../../components/theme/theme";

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
const Education: React.FC = () => {
  return (
    <div id="Education">
      <Reveal duration={2000} keyframes={Upwards}>
        <Grid
          w={{
            base: "100%",
            sm: "90%",
            md: "800px",
            lg: "1000px",
            xl: "1100px",
            "2xl": "1350px",
          }}
          m={"auto"}
          gridTemplateAreas={{
            base: `  "education" "text" `,
            sm: ` "education text" "education text" `,
          }}
          gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }}
          gridTemplateRows={{ base: "repeat(1,1fr)", sm: "repeat(2, 1fr)" }}
        >
          <GridItem area={"education"} display={"flex"}>
            <Image
              w={{ base: "80%", sm: "100%" }}
              m={"40px"}
              src={"./images/eduation.png"}
            />
          </GridItem>

          <GridItem
            area={"text"}
            display={"flex"}
            justifyContent={"center"}
            pt={{ sm: "100px" }}
            alignItems={"flex-start"}
          >
            <Box>
              <Text
                height={"fit-content"}
                fontSize={{ base: "30px", sm: "50px" }}
                fontWeight={{ base: 600, sm: 600 }}
                sx={{
                  fontFamily: "Open Sans",
                  color: "thistheme.text",
                }}
              >
                Education
              </Text>
              <Text
                fontSize={{ base: "20px", sm: "25px" }}
                fontWeight={{ base: 400, sm: 600 }}
                sx={{
                  fontFamily: "Open Sans",
                  color: "thistheme.text",
                }}
              >
                Basic Qualification and Certifcations
              </Text>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />

            </Box>
          </GridItem>
        </Grid>
      </Reveal>
      <Reveal duration={2000} keyframes={Upwards}>
        <Heading sx={{ color: appTheme.text }}>
          Degrees Received
        </Heading>
      </Reveal>

      <Degree {...degrees?.degree[0]} />
      <Degree {...degrees?.degree[1]} />

      {/* <Spacer /> */}
      {
        certifications.isShow &&
        <Heading color={"thistheme.text"} mt={{ base: "100px", sm: "100px" }}>
          Certifications
        </Heading>
      }

      <Flex
        flexWrap={"wrap"}
        gap={"20px"}
        mt={{ base: "30px", sm: "30px" }}
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1300px",
        }}
        // border={"1px"}
        m={"auto"}
        height={"fit-content"}

      >
        {certifications.isShow && certifications.certifications.map((item, i) => {

          return <Certificate key={i} {...item} />;
        })}
      </Flex>

    </div>
  );
};

export default Education;
