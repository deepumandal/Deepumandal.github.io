import { Flex, Grid, GridItem, Heading, Image, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
// import { Fade } from 'react-reveal'
import Appicon from '../languageicon/Appicon'
import Skills from '../skillsline/Skills'


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
    // justifyContent={"space-between"}
    // alignItems={"center"}
    >
      <GridItem area={"image"}
        width={{base : "100%" , sm :"85%"}}
        height={"fit-content"}
        alignItems={"center"}
        display={"flex"} justifyContent={"center"}
      >
        {/* <Fade left duration={1500}> */}
        <Tooltip label={title}>
          <Image src={`./images/${img}`} width={{ base: "85%", sm: "75%" }} />
        </Tooltip>
        {/* </Fade> */}
      </GridItem>
      <GridItem area={"info"}
      >
        {/* <Fade right duration={1000}> */}
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
        {/* </Fade> */}
        {/* <Fade right duration={1500}> */}
        <Flex flexWrap={'wrap'} mt={{base : "0px", sm :"20px"}} align={"center"} justifyContent={"center"} >
          {
            softwareSkills.map((item, i) => {
              return <Appicon key={i} {...item} />
            })
          }
        </Flex>
        {/* </Fade> */}
        {/* <Fade right duration={2000}> */}
        <VStack>
          {
            skills.map((item, i) => {
              return <Skills key={i} Skills={item} />
            })
          }
        </VStack>
        {/* </Fade> */}
      </GridItem>
    </Grid >
  )
}

export default What