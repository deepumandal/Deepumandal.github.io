import { Flex, Grid, GridItem, Heading, Image, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
import Appicon from '../languageicon/Appicon'
import Skills from '../skillsline/Skills'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'

type styleType = {
  color: string
}

type softwareType = {
  skillName: string,
  fontAwesomeClassname: string,
  imgurl: string,
  style: styleType
}
interface WhatProps {
  img: string,
  title: string,
  fileName: string,
  skills: string[],
  softwareSkills: softwareType[]
  even?: boolean
}

const LeftWard = keyframes`
from {
  opacity: 0;
  transform: translateX(-200px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`
const RightWard = keyframes`
from {
  opacity: 0;
  transform: translateX(200px);
}

to {
  opacity: 1;
  transform: translateX(0px);
}
`
const What: React.FC<WhatProps> = ({ even, img, title, fileName, skills, softwareSkills }) => {

  return (
    <Grid
      w={{
        base: "100%",
        sm: "90%",
        md: "800px",
        lg: "1000px",
        xl: "1100px",
        "2xl": "1400px",
      }}

      gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)' }}
      gridTemplateRows={{ base: 'repeat(2,1fr)', sm: 'repeat(2,1fr)' }}
      gridTemplateAreas={{
        base: `"info" "image"`,
        sm: even ? ` "info image" "info image"   ` : ` "image info" "image info"   `
      }}

    >
      <GridItem area={"image"}
        width={{ base: "100%", sm: "100%" }}
        height={"fit-content"}
        alignItems={"center"}
        display={"flex"} justifyContent={"center"}
      >
        {/* <Fade left duration={1500}> */}
        <Reveal duration={2000} keyframes={even ? RightWard : LeftWard}>
          <Tooltip label={title}>
            <Image margin={"auto"} src={`./images/${img}`} width={{ base: "85%", sm: "75%" }} />
          </Tooltip>
        </Reveal>
      </GridItem>
      <GridItem area={"info"}
      >
        {/* <Fade right duration={1000}> */}
        <Reveal duration={1000} keyframes={even ? LeftWard : RightWard}>
          <Heading
            w={{ base: "92%", sm: "92%" }}
            m={"auto"}
            fontSize={{ base: "30px", sm: "40px" }}
            sx={{
              fontFamily: 'open sans',
              fontWeight: 500,
              color: "thistheme.text"

            }}>
            {title}
          </Heading>
        </Reveal>
        {/* </Fade> */}
        {/* <Fade right duration={1500}> */}
        <Reveal duration={1500} keyframes={even ? LeftWard : RightWard}>
          <Flex flexWrap={'wrap'} mt={{ base: "0px", sm: "20px" }} align={"center"} justifyContent={"center"} >
            {
              softwareSkills.map((item, i) => {
                return <Appicon key={i} {...item} />
              })
            }
          </Flex>
        </Reveal>
        {/* </Fade> */}
        {/* <Fade right duration={2000}> */}
        <Reveal duration={2000} keyframes={even ? LeftWard : RightWard}>
          <VStack>
            {
              skills.map((item, i) => {
                return <Skills key={i} Skills={item} />
              })
            }
          </VStack>
        </Reveal>
        {/* </Fade> */}
      </GridItem>
    </Grid >
  )
}

export default What