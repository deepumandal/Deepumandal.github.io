import "./App.css";
import React from "react";
// import Navbar from './components/NAVBAR/Navbar';
import { Box } from "@chakra-ui/react";
// import Home from './PAGE/HOME/Home';
// import Education from './PAGE/EDUCATION/Education';
// import Projects from './PAGE/PROJECTS/Projects';
// import Contact from './PAGE/CONTACT/Contact';
import { Suspense } from "react";

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Splash from './PAGE/SPLASH/Splash';
import { appTheme } from "./components/theme/theme";
import Footer from "./components/Footer/Footer";
import TopButton from "./components/TopButton/TopButton";
import { HashRouter, Route, Routes } from "react-router-dom";
// import Experience from './PAGE/EXPERIENCE/Experience';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const Home = React.lazy(() => import("./PAGE/HOME/Home"));
const Education = React.lazy(() => import("./PAGE/EDUCATION/Education"));
const Projects = React.lazy(() => import("./PAGE/PROJECTS/Projects"));
const Contact = React.lazy(() => import("./PAGE/CONTACT/Contact"));
const Experience = React.lazy(() => import("./PAGE/EXPERIENCE/Experience"));
const Navbar = React.lazy(() => import("./components/NAVBAR/Navbar"));
// console.log("Home",Home)
export const DownWardWith2000 = keyframes`

from {
opacity : 0;
transform : translateY(-50px)
}
to {
opacity : 1;
transform : translateY(0px)
}
`;

function App(): JSX.Element {
  return (
    <Box
      className="App"
      border={"1px"}
      overflowX={"hidden"}
      borderColor={"#edf9fe"}
      bg={"thistheme.background"}
    >
      <HashRouter basename="/">
        <Reveal duration={2000} keyframes={DownWardWith2000}>
          <Suspense>
            <Navbar />
          </Suspense>
        </Reveal>

        <Routes>
          <Route
            path="/"
            element={
              // <Splash />
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/education"
            element={
              <Suspense>
                <Education />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <Suspense>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/experience"
            element={
              <Suspense>
                <Experience />
              </Suspense>
            }
          />
        </Routes>
        <Footer theme={appTheme} />
        <TopButton theme={appTheme} />
      </HashRouter>
    </Box>
  );
}

export default App;
