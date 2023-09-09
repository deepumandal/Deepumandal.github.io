import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";


interface ProjectIntroProps {
  title: string,
  description: string,
  avatar_image_path: string,

}
const ProjectIntro: React.FC<ProjectIntroProps> = ({ title, description, avatar_image_path }) => {
  return (
    <Grid

      w={{
        base: "100%",
        sm: "90%",
        md: "750px",
        lg: "1000px",
        xl: "1100px",
        "2xl": "1400px",
      }}
      //   border={"1px"}
      borderColor={"red"}
      m={"auto"}
      gridTemplateAreas={{
        base: `  "image" "about" `,
        sm: ` "image about" "image about"`,
      }}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
      }}
      gridTemplateRows={{
        base: "repeat(2,1fr)",
        sm: "repeat(1,fr)",
      }}
      mt={{
        base: "60px",
        sm: "120px",
      }}
    >
      <GridItem area={"image"}>
        <Image
          w={{ base: "80%", sm: "100%" }}
          m={"auto"}
          src={`./images/${avatar_image_path}`}
        />
      </GridItem>
      <GridItem area={"about"} >
        <Heading
          sx={{
            fontFamily: "Open Sans",
            fontWeight: 700,
            color: "thistheme.text",
            margin : "2rem"
          }}
          fontSize={{
            base: "30px",
            sm: "50px"
          }}>{title}</Heading>
        <Text
          sx={{
            fontFamily: "Open Sans",
            fontWeight: 500,
            color: "thistheme.describe"
            
          }}
          w={{
            base: "86%"
          }}
          m={"auto"}
          fontSize={{
            base: "16px",
            sm: "20px"
          }}
        >{description}</Text>
      </GridItem>
    </Grid>
  );
};

export default ProjectIntro;
