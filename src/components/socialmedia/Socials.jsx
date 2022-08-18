import React from "react";
import { Button, Grid, SimpleGrid, Spacer } from "@chakra-ui/react";
import { socialMediaLinks } from "../../portfolio";
import { seo } from "../../portfolio";
import Social from "./social/Social";
import "./this.css";
const Socials = () => {
  return (
    <div style={{
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-evenly",
      alignItems : "center",
    }}>
     
      <SimpleGrid
        minChildWidth="41px"
        w={{ base: "80%" }}
        m={"auto"}
        mt={"20px"}
        spacing="15px"
        display={"flex"}
        flexWrap={"wrap"}
        alignContent={"center"}
        mb={"20px"}
      >
        {socialMediaLinks.map((item, i) => {
          return <a  key={i} href={item.link} target={"_blank"}> <Social  {...item} /></a>
        })}
      </SimpleGrid>
      <Button
      mt={"20px"}
        bg={"thistheme.text"}
        color={"#c5d3e1"}
        className={"gitbun"}
        transition="1s"
        variant={"outline"}
        colorScheme={"thistheme.text"}
      >
        <a href={seo.og.url} target={"_blank"}>
          ⭐ Star Me On Github
        </a>
      </Button>
    </div>
  );
};

export default Socials;
