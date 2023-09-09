import './App.css';
import React from 'react';
import Navbar from './components/NAVBAR/Navbar';
import { Box } from "@chakra-ui/react"
import Home from './PAGE/HOME/Home';
import Education from './PAGE/EDUCATION/Education';
import Projects from './PAGE/PROJECTS/Projects';
import Contact from './PAGE/CONTACT/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splash from './PAGE/SPLASH/Splash';
import theme, { appTheme } from './components/theme/theme';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton/TopButton';
// import { Fade } from 'react-reveal';
function App(): JSX.Element {
  return (
    <Box className="App" border={"1px"} borderColor={"#edf9fe"} bg={"thistheme.background"} >
      {/* <Fade top> */}
      {/* <Navbar /> */}
      {/* </Fade> */}
      {/* <Home />
      <Education />
      <Projects />
      <Contact /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/home' element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer theme={appTheme} />
        <TopButton theme={appTheme} />
      </BrowserRouter>

    </Box>
  );
}

export default App;
