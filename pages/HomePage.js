import React from 'react'
import FAQ from '../components/home/FAQ'
import Accordion from '../components/home/FAQ/Accordion'
import Footer from '../components/Footer'
import Message from '../components/home/Message'
import styledComponents from 'styled-components'
import HeaderTitle from '../components/NavLayout/HeaderTitle'
import Banner from '../components/home/Banner'
import Reviews from '../components/home/Services/Reviews'

export const PageContainer = styledComponents.div`
  @media (max-width: 768px) {
      background: rgb(250, 251, 253)
  }
`
const HomePage = ({ comments }) => {
  return (
    <PageContainer>
      <HeaderTitle>A Wonderful Start to your Healthcare Needs</HeaderTitle>
      {/* <Banner2 /> */}
      <Banner />
      <Reviews comments={comments} />
      <FAQ>
        <Accordion />
      </FAQ>
      <Message />
      <Footer gap={false} />
    </PageContainer>
  )
}

export default HomePage
    