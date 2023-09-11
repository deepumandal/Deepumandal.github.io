import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { project, projectsHeader, seo } from "../../portfolio";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import Project from "../../components/Project/Project";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

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

const Projects = () => {
  return (
    <div id="Projects">
      <Reveal duration={2000} keyframes={Upwards}>
        <ProjectIntro {...projectsHeader} />
      </Reveal>

      <Flex w={{
        base: "100%",
        sm: "90%",
        md: "800px",
        lg: "1000px",
        xl: "1100px",
        "2xl": "1450px",
      }}
        justifyContent={"center"}
        m={"auto"} flexWrap={"wrap"} gap={"20px"} h={"fit-content"} cursor={"pointer"} mt={{ base: "50px", sm: "80px" }}>
        {project.data.map((item) => {
          return <Project {...item} />;
        })}
      </Flex>
      <br />
      <br />
      <Button onClick={() => window.open(seo.og.url, "_blank")} color={"white"} bg={"thistheme.text"}>
        More Projects
      </Button>
    </div>
  );
};

export default Projects;
