import React from "react";
import ExperienceImg from "../../components/ExperienceImg/ExperienceImg";
import { experience } from "../../portfolio";
import { appTheme } from "../../components/theme/theme";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import ExperienceAccordion from "../../components/ExperienceAccordion/ExperienceAccordion";

const Experience: React.FC<{}> = () => {
  const theme = appTheme;
  return (
    <VStack
      w={{
        base: "100%",
        sm: "90%",
        md: "800px",
        lg: "1000px",
        xl: "1100px",
        "2xl": "1350px",
      }}
      gap={"3rem"}
      margin={"auto"}
    >
      <VStack >
        <HStack
          flexDir={{ base: "column", sm: "row" }}
          gap={"40px"}
          mt={{ base: "50px", sm: "100px" }}
        >
          <Box width={{ base: "90%", sm: "50%" }}>
            <Box>
              <ExperienceImg />
            </Box>
          </Box>
          <VStack width={{ base: "90%", sm: "50%" }}>
            <Heading style={{ color: theme.text }}>{experience.title}</Heading>
            <Heading style={{ color: theme.text }}>
              {experience.subtitle}
            </Heading>
            <Text sx={{ color: theme.secondaryText }}>
              {experience.description}
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <ExperienceAccordion experience={experience} theme={theme} />
    </VStack>
  );
};

export default Experience;
