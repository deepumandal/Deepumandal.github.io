import React from "react";
import { ThemeInterface } from "../theme/theme";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
} from "@chakra-ui/react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

interface experiencInterface {
  color: string;
  company: string;
  company_url: string;
  description: string;
  duration: string;
  location: string;
  logo_path: string;
  title: string;
}
interface SectionsInterface {
  experiences: experiencInterface[];
  title: string;
}
interface experienceInterface {
  description: string;
  header_image_path: string;
  sections: SectionsInterface[];
  subtitle: string;
  title: string;
}
interface ExperienceAccordionProps {
  experience: experienceInterface;
  theme: ThemeInterface;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  experience,
  theme,
}) => {
  console.log("experience", experience.sections[0]);
  return (
    <Stack
      margin={"50px"}
      id="experience"
      w={{
        base: "90%",
        sm: "100%",
      }}
    >
      <Accordion allowToggle>
        {experience.sections.map((section, index) => {
          return (
            <AccordionItem key={section.title}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      className="accord-panel"
                      _hover={{
                        color: theme.secondaryText,
                      }}
                      border="1px solid"
                      padding="1rem"
                      borderColor={theme.headerColor}
                      borderRadius="5px"
                      marginBottom="3px"
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        backgroundColor={theme.body}
                        fontFamily="Google Sans Regular"
                        color={theme.text}
                      >
                        {section.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    padding={"1rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1rem"}
                    margin={"auto"}
                    id="accordianpannel"
                    backgroundColor={theme.body}
                  >
                    {section.experiences.map((experience, index) => {
                      return (
                        <ExperienceCard
                          key={index}
                          index={index}
                          totalCards={section.experiences.length}
                          experience={experience}
                          theme={theme}
                        />
                      );
                    })}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Stack>
  );
};

export default ExperienceAccordion;
