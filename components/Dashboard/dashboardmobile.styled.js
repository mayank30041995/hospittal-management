import { Col, Form, Row, Select, Typography, Button, Dropdown } from 'antd'
import styledComponents from 'styled-components'

const { Title, Text, Paragraph } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const TopScroll = styledComponents.div`
   width: ${({ type }) => (type === 'user' ? '40rem' : '30rem')};
   margin: 0 5%;
`
export const TabBlock = styledComponents(Col)`
    line-height: 30px;
    padding: 4px;
    margin-right: 4%;
    max-width: 30vh;
    flex: none;
`
export const TabBlockText = styledComponents(Text)`
    font-weight: 500 !important;
    font-size: 15px;
    font-family: 'Inter';
    letter-spacing: 0.4333px;
}
`
export const ProfileTitle = styledComponents.div`
   display: flex;
   margin: 10px 16px;
`
export const ProfileButton = styledComponents(Button)`
    background: #06509F;
    border: 2px solid #003166;
    border-radius: 5px;
    width: 84%;
    height: auto;
    font-family: 'Inter';
    color: #fff;
`
export const ProfileText = styledComponents(Row)`
   display: flex;
   text-align: center;
`
export const TextContext = styledComponents(Col)`
   display: grid;
   text-align: start;
   justify-content: space-between;
`
export const TextContextWrapper = styledComponents(Col)`
   margin: 0 25px; 
`
export const ProfileWrap = styledComponents(Row)`
   display: none;
   background: #003A77;
   border-radius: 5px;
//    padding: 12px 20px 10px 20px; 
   margin: 10px;
    @media (max-width: ${size.tablet}) { 
        display: flex;   
    }

`
export const ProfileMainTitle = styledComponents(Title)`
    margin-top: 12px;
    font-size: 16px !important;
    line-height: 10px !important;
    color: #FFFFFF !important;
    font-family: 'Inter';
    font-weight: 400 !important;
`
export const ProfileMainText = styledComponents(Text)`
    margin: 0;
    font-size: 12px;
    line-height: 22px;
    color: #FFFFFF !important;
    font-family: 'Inter';
    font-weight: 400;
`
export const ProfileMainTextList = styledComponents(Text)`
    margin: 0;
    font-size: 12px;
    line-height: 22px;
    color: #FFFFFF !important;
    font-family: 'Inter';
    font-weight: 300;
`

export const CardEdit = styledComponents(Row)`
    display: none;  
     @media (max-width: ${size.tablet}) { 
         background: #FFFFFF;
         box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
         border-radius: 5px;
         margin: 8px;
         padding: 10px;
         display: flex !important;   
    }
`
export const ListText = styledComponents(Paragraph)`
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Inter';
     margin: 8px;
`
export const ListTextCol = styledComponents(Paragraph)`
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
    font-weight: 500;
    font-size: 15px;
    font-family: 'Inter';
     margin: 12px;
    @media (max-width: ${size.tablet}) {
        font-size: 11px;
        margin: 3px;
        color: #06509F;
        font-weight: 400;
        margin-bottom: 0px !important;
   }
`
export const DropdownButton = styledComponents(Dropdown.Button)` 
    .ant-btn-compact-first-item{
    display: none;
   }
   .ant-btn-compact-last-item  {
    margin-top: 10px;
    border: none !important;
   }
   .anticon-more {
    font-size: 18px;
    
   }
    
`
export const GridBox = styledComponents(Row)`
    width: 95%;
    margin-left: 3%;
`
export const MobileFormGroup = styledComponents(Row)` 
   display: none;
   margin: 0px 12px;  
   @media (max-width: ${size.tablet}) {
    display: block;
   }
`
export const HideDisplay = styledComponents.div` 
   display: none;  
   @media (max-width: ${size.tablet}) {
    display: block;
   }
`

export const HideDisplayContents = styledComponents.div` 
   display: none;  
   @media (max-width: ${size.tablet}) {
    display: contents;
   }
`
export const HideDisplayFlex = styledComponents.div` 
   display: none;  
   @media (max-width: ${size.tablet}) {
    display: flex;
    justify-content: space-between;
   }
`
export const HideDisplayMobile = styledComponents.div`   
   @media (max-width: ${size.tablet}) {
    display: none;  
   }
`
