import React from 'react'
import About from '../../components/About/About'
import Blog from '../../components/Blog/Blog'
import ContactIntro from '../../components/ContactIntro/ContactIntro'
import { contactPageData } from '../../portfolio'
import { keyframes } from "@emotion/react";
import Reveal from 'react-awesome-reveal'

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
const Contact = () => {

  const about = {
    ...contactPageData.addressSection,
    ...contactPageData.phoneSection
  }
  // console.log(about)
  return (
    <div id='Contact Me'>
      <Reveal duration={2000} keyframes={Upwards}>
        <ContactIntro {...contactPageData.contactSection} />
      </Reveal>

      <Reveal duration={2000} keyframes={Upwards}>
        <Blog {...contactPageData.blogSection} />
      </Reveal>
      <Reveal duration={2000} keyframes={Upwards}>
        <About  {...about} />
      </Reveal>
    </div>
  )
}

export default Contact