import { Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

const What = ({img,title,filename, skills, softwareSkills}) => {
    
  return (
   <Grid w={{ base: "100%",
   sm: "90%",
   md: "800px",
   lg: "1000px",
   xl: "1100px",
   "2xl": "1400px",}}
   gridTemplateColumns={{base : 'repeat(1,1fr)', sm: 'repeat(2,1fr)'}}
   gridTemplateRows={{base : 'repeat(2,1fr)',  sm: 'repeat(2,1fr)'}}
   gridTemplateAreas={{
    base : `  "info" "image"`,
    sm : ` "image info" "image info"  `
   }}
   
   >
    <GridItem area={"image"} >
        <Image src={`./images/${img}`} />
    </GridItem>
    <GridItem area={"info"}bg={"teal"}>infot
    
    {/* todo */}
    
    </GridItem>
   </Grid>
  )
}

export default What