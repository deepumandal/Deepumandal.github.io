import './App.css';
import React from 'react';
import Navbar from './components/NAVBAR/Navbar';
import { Box } from "@chakra-ui/react"
import Home from './PAGE/HOME/Home';
import Education from './PAGE/EDUCATION/Education';
import Projects from './PAGE/PROJECTS/Projects';
import Contact from './PAGE/CONTACT/Contact';
// import { Fade } from 'react-reveal';
function App(): JSX.Element {
  return (
    <Box className="App" border={"1px"} borderColor={"#edf9fe"} bg={"thistheme.background"} >
      {/* <Fade top> */}
      <Navbar />
      {/* </Fade> */}
      <Home />
      <Education />
      <Projects />
      <Contact />

    </Box>
  );
}

export default App;
