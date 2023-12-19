import styledComponents from 'styled-components'
import { Button, Row, Col, Typography, Avatar } from 'antd'
const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}
export const ContainerThree = styledComponents(Row)`
    padding: 9% 2% 5% 0%;
    background: #FBFBFB;
    width: 165rem;
  @media (max-width: ${size.tablet}) {  
     padding: 5% 2% 5% 2%;
  }`

export const ContainerMain = styledComponents(Row)`
  padding: 5% 2% 5% 8%;
  background: #FBFBFB;
  @media (max-width: ${size.tablet}) {  
     padding: 5% 2% 5% 2%;
  }  
`
export const TitleHead = styledComponents(Col)`
padding: 30px 0 30px 0;
 &.services  {
   display: flex;
   align-items: center;
   
   @media (max-width: ${size.tablet}) {    
   display: contents;
   } 
  }
`
export const ServiceImg = styledComponents.img`
    margin-top: 5px;  
    @media (max-width: ${size.mobile}) { 
      // width: 18vh;  
      margin-top: -5px;  
      }
  }
`
export const DescriptionGroup = styledComponents.div`  
   width: 70%;
   padding-left: 8px;
   padding-right: 8px;
   @media (max-width: ${size.tablet}) {    
   width: 60%;
   height: 24vh;
  }
`

export const TitlePost = styledComponents(Col)`
 @media (max-width: ${size.tablet}) {    
    max-width: 100vh !important;
    background: rgb(250, 251, 253);
  }
`
export const BannerParagraph = styledComponents(Typography.Paragraph)`
    color: #575757;
    font-family: 'Inter';
    font-size: 15px;
     @media (max-width: ${size.tablet}) { 
       font-size: 12px;  
      }
`
export const TitleMobile = styledComponents(Typography.Text)`
    display: none;
    @media (max-width: ${size.tablet}) { 
    display: grid;
    font-family: 'Ralewayw';
    text-align: center;
    font-weight: 600;
    font-size: 22px !important;
    margin: 18px;
    letter-spacing: 0.250086px;
    }
`
export const TitleGrp = styledComponents(Typography.Text)`
    font-family: 'Ralewayw';
    font-weight: 600;
    font-size: 17px;
    @media (max-width: ${size.tablet}) { 
       font-size: 14px;  
    }
`

export const ReviewsSection = styledComponents.div`
    display: flex;
    align-items: center;
`
export const TitleReview = styledComponents(Typography.Title)`
    font-family: 'Ralewayw';
    margin: 8px;
    margin-top: 22px !important;
    font-style: normal;
    font-weight: 600 !important;
    font-size: 28px;
    line-height: 2px !important;
    letter-spacing: 0.250086px;
    color: #000000;
`
export const ReviewsMessage = styledComponents(Typography.Text)`
   font-family: 'Ralewayw';
   margin: 8px;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 40px;
   letter-spacing: 0.250086px;
   color: #000000;
`
export const TotalReviews = styledComponents(Typography.Text)`
   font-family: 'Inter';
   flex: none;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 40px;
   text-align: center;
   letter-spacing: 0.250086px;
   color: #000000 !important;
`
export const ReviewsButton = styledComponents(Button)`
    color: #0342BB;
    border: 1px solid #0342BB;
    font-family: 'Ralewayw';
    font-weight: 600;
    border-radius: 12px !important;
    padding: 5px 24px !important;
`
export const ReviewsParagraph = styledComponents(Typography.Paragraph)`
  font-family: 'Ralewayw';
  margin: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.250086px;
  color: #000000;
`
export const Testimonial = styledComponents(Col)`
  @media (max-width: ${size.tablet}) { 
     display: none;
  }
`
export const AvatarPic = styledComponents(Avatar)`
   width: 75px;
   height: 90px;
   object-fit: cover !important;
   @media (max-width: ${size.tablet}) { 
    width: 50px;
    height: 60px;
  }
`
export const ContainerCardThree = styledComponents(Col)`
 height: 12em;
 min-width: 30em;
 background: #FFFFFF;
box-shadow: 3px 0px 11px rgba(0, 0, 0, 0.15);
overflow: hidden;
border-radius: 12px;
 @media (max-width: ${size.tablet}) { 
    min-width: 0rem;
    margin: 16px;
    height: 25vh; 
    // right: 12rem;  
  }
 @media (min-width: ${1200}) { 
    min-width: 40vh;
  }
`
export const ContainerCard = styledComponents(Col)`
height: 30vh;
 min-width: 45vh;
 background: #FFFFFF;
box-shadow: 3px 0px 11px rgba(0, 0, 0, 0.15);
overflow: hidden;
border-radius: 12px;
 @media (max-width: ${size.tablet}) { 
    min-width: 0rem;
    margin: 8px;
    height: 25vh; 
    // right: 12rem;  
  }
 @media (min-width: ${1200}) { 
    min-width: 40vh;
  }
`
export const SlideCardContent = styledComponents.div`
   display: flex;
   padding: 18px 5px;
`
export const SlideCard = styledComponents.div`
   max-width: 60px !important;   
  min-width: calc(1200px / 6);
  // height: 180px;
   padding: 10px 20px;
   @media (max-width: ${size.tablet}) { 
    padding: 0;
    }
 
`
export const SlideSection = styledComponents.div`

  .slick-track {    
     display: flex !important;   
    // width: 3600px !important;
  }
  .slick-slide slick-active slick-current {
    width: 100%;
  }
 
 margin-top: -5% !important;
 font-family: sans-serif;
  text-align: center;
  max-width: 1500px;
  overflow: hidden;
  margin: auto;
  display: block;
  @media (max-width: ${size.tablet}) { 
     margin-top: 10px !important;
     overflow: visible;
  }
`
