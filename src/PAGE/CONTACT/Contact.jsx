import { Spacer } from '@chakra-ui/react'
import React from 'react'
import About from '../../components/About/About'
import Blog from '../../components/Blog/Blog'
import ContactIntro from '../../components/ContactIntro/ContactIntro'
import { contactPageData } from '../../portfolio'

const Contact = () => {

  const about = {
    ...contactPageData.addressSection,
    ...contactPageData.phoneSection
  }
  // console.log(about)
  return (
    <div id='Contact Me'>
<br/>
<br/>
<br/>

<ContactIntro {...contactPageData.contactSection} />
<Spacer />
<br />
<br />
<br />
<Blog {...contactPageData.blogSection} />

<br />
<br />
<br />

<About  {...about} />


    </div>
  )
}

export default Contact