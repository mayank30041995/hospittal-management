import styledComponents from 'styled-components'
import { Col, Row, Typography, Collapse } from 'antd'
const { Title } = Typography
const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const CollapseChange = styledComponents(Collapse)`
  width: 80%;
  margin-top: 10%;
  // overflow-y: scroll;

  height: 63vh;
  width: 78vh;
  

 overflow: auto;
    ::-webkit-scrollbar {
     width: 8px;
    }
    ::-webkit-scrollbar-track {
     box-shadow: inset 0 0 5px grey;
     border-radius: 10px;
   }
   ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
   }

@media (max-width: 768px) {
  width: 100%;
  margin-top: 0;
}
`

export const AccordionWrapper = styledComponents(Row)`

  .ant-collapse-header-text {
    font-size: 26px !important;
    font-weight: 600;
    letter-spacing: 1.4px;
    font-family: 'Inter';
     @media (max-width: ${size.tablet}) { 
       font-size: 16px !important;  
    }  
  }
  .ant-collapse-expand-icon {
    height: 48px !important;
    @media (max-width: ${size.tablet}) { 
       height: 18px !important;
    }
  }
  .ant-collapse-item {
    width: 100% ;
     @media (max-width: ${size.tablet}) {
       width: 100% ;
      }
  }
  .ant-collapse-content-active {
    border-bottom: 1px solid #ABABAB !important;
  }
    padding: 60px 0 0 0;
   @media (max-width: ${size.tablet}) {    
    display: block !important;
    padding: 0;
  }
//  .ant-collapse-header-text{
//   font-size: 18px;
//   font-weight: 600;
//   }
  
`

export const FAQTitle = styledComponents(Col)`
  background: linear-gradient(225.46deg,#D5EEF8 12.31%,#FDFCFF 68.61%);
  justify-content: center;
  align-item: center;
  padding-bottom: 20%;
  padding-left: 5%;

 &.faq_heading {
    text-align: center;
    padding-top: 30%;
  }
  @media (max-width: ${size.tablet}) {    
    background: aliceblue !important;
    max-width:100%;
    height:10vh;
  }
   @media (max-width: ${size.tablet}) { 
  display: none;
  }
`
export const FAQAccordion = styledComponents(Col)`
  background: linear-gradient(155.46deg,#D5EEF8 3.31%,#FDFCFF 122.61%);
   @media (max-width: ${size.tablet}) {    
    background: aliceblue !important;
    max-width:100%;
  }
`
export const FAQHeading = styledComponents(Title)`
  text-align: start;
  padding-top: 25%;
  margin-left: 20%;
  font-size: 45px !important;
  font-family: 'Ralewayw';
  @media (max-width: ${size.tablet}) {  
    margin: 0; 
     font-size: 22px !important;
     height: 10vh;
     text-align: center;
     padding:5px;
  }
`

export const QuestionHeading = styledComponents.span`
background: -webkit-linear-gradient(#5DD1A4, #386DA3);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
`
export const AccordianParagraph = styledComponents.p`
    font-weight: 600;
    font-family: 'Ralewayw';
    font-size: 16px;
`
export const NavWrapper = styledComponents(Row)`
 padding: 15px 9vh 15px 8vh;
 align-items: center;
   @media (max-width: ${size.tablet}) {
    display: none;    
      padding: 30px 8px 0 8px;  
     }
    }
`