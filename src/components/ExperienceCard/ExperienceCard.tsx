import React from "react";
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Heading,
    Image,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import { ThemeInterface } from "../theme/theme";
// import { Fade } from 'react-reveal';

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
interface ExperienceCardInterface {
    experience: experiencInterface;
    theme: ThemeInterface;
    index: number;
    totalCards: number;
}

const ExperienceCard: React.FC<ExperienceCardInterface> = ({
    experience,
    theme,
    index,
    totalCards,
}) => {
    console.log("experience1234567", experience);
    return (
        <HStack
            padding={"1rem"}
            flexDir={{
                base: "column",
                sm: "row",
            }}
            justifyContent={"space-between"}
            border={`1px solid ${experience.color}`}
            borderRadius={"20"}
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={{ base: "40%", sm: "5%" }}
                marginBottom={{
                    base: "20px",
                    sm: "0px",
                }}
            >
                <Image
                    width={"100px"}
                    borderRadius={"50%"}
                    src={`./images/${experience.logo_path}`}
                />
            </Box>
            <VStack
                width={"93%"}
                justifyContent={"space-between"}
                textAlign={"left"}
            // border={"1px solid black"}
            >
                <HStack
                    flexDirection={{
                        base: "column",
                        sm: "row",
                    }}
                    width={"100%"}
                    justifyContent={"space-between"}
                >
                    <VStack
                        width={{ base: "100%", sm: "50%" }}
                        alignItems={{ base: "center", sm: "flex-start" }}
                    >
                        <Heading
                            sx={{
                                fontWeight: 700,
                                color: "#001c55",
                                fontSize: "16px",
                                lineHeight: "20px",
                            }}
                        >
                            {experience.title}
                        </Heading>
                        <Text
                            sx={{
                                fontWeight: 400,
                                color: "#001c55",
                                fontSize: "14px",
                                lineHeight: "20px",
                            }}
                        >
                            {experience.company}
                        </Text>
                    </VStack>
                    <VStack
                        width={{ base: "100%", sm: "50%" }}
                        alignItems={{ base: "center", sm: "flex-end" }}
                    >
                        <Text
                            sx={{
                                fontWeight: 400,
                                color: "#001c55",
                                fontSize: "14px",
                                lineHeight: "15px",
                            }}
                        >
                            {" "}
                            {experience.duration}{" "}
                        </Text>
                        <Text
                            sx={{
                                fontWeight: 400,
                                color: "#001c55",
                                fontSize: "14px",
                                lineHeight: "15px",
                            }}
                        >
                            {" "}
                            {experience.location}{" "}
                        </Text>
                    </VStack>
                </HStack>


                <Text
                    sx={{
                        fontWeight: 400,
                        color: "#001c55",
                        fontSize: "14px",
                        lineHeight: "20px",
                        marginTop: "10px",
                    }}
                    textAlign={{ base: "center", sm: "left" }}

                >
                    {experience.description}
                </Text>
            </VStack>
        </HStack>
    );
};

export default ExperienceCard;
