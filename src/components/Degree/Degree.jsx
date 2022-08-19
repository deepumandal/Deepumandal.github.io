import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const Degree = ({
  title,
  subtitle,
  logo_path,
  alt_name,
  duration,
  descriptions,
  website_link,
}) => {
  console.log(title);
  return (
    <>
      <Grid
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        mt={{ base: "60px", sm: "100px" }}
        gridTemplateAreas={{
          base: ` "logo" "card"`,
          sm: `"logo card" "logo card"`,
        }}
        gridTemplateColumns={{ base: ` repeat(1, 1fr) `, sm: "repeat(2, 1fr)" }}
        gridTemplateRows={{ base: "repeat(2,1fr)", sm: "repeat(2,1fr)" }}
      >
        <GridItem  >
            <div 
            >
          <Image
            m={"auto"}
            src={`./images/${logo_path}`}
           boxShadow={'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}
           bg={"#f8c313"}
           borderRadius={"100%"}
           width={"50%"}
          />
          </div>
        </GridItem>
        <GridItem>
            <
        </GridItem>
      </Grid>
    </>
  );
};

export default Degree;
