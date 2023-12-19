import { Button, Input, Form, Col, Row, Typography } from 'antd'
import { borderPicker } from '../home/Banner/helper'
import styledComponents from 'styled-components'
const { Title, Text, Link } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024 px',
  desktop: '2560px',
}

export const BannerWrapper = styledComponents(Row)`
   background: #F6FAFF;
   padding: 10px 5% 0 7%;
   // margin-top: 10vh;
   @media (max-width: ${size.tablet}) {  
     display: ${({ flex }) => (flex === 'true' ? 'none' : 'flex')};
   }       
`

export const ProfileImg = styledComponents.img`
 @media (max-width: ${size.tablet}) {    
    width: 7.5rem;
    height: 10rem;
    border-radius: 12px;
    object-fit: cover;
  }
`
export const ColButtonWrapper = styledComponents(Col)`
display: none;
 @media (max-width: ${size.tablet}) {    
    width: 96%;
    display: block;
    margin: 7px
  }
`

export const MainTitle = styledComponents(Title)`
   &.name_title {
     color: #306FB2;
     font-family: 'Inter'; 
     font-weight: 500;
    }
@media (max-width: ${size.tablet}) {    
    margin: 0;
}
`

export const MainText = styledComponents(Text)`
&.desc_text  {  
     font-size: 18px;
     color: #306FB2;
     font-family: 'Inter' 
    }
@media (max-width: ${size.tablet}) {
   &.desc_text  {
      font-size: 12.5px !important;   
   }
}
`

export const FormGroup = styledComponents(Form.Item)`
    margin: 3px;

    .ant-form-item-control-input-content textarea {
         border: 1px solid #737373 !important;
         border-radius: 6px;
    }
    .ant-form-item-control-input-content input {
        border-radius: 2px;
        font-family: 'Inter';
        height: 6vh !important;
        border: 1px solid #737373;
        border-radius: 6px;
    }
`

export const WrittenTextColumn = styledComponents(Col)`
   background: #EFF7FF;
   padding: 3% 4% 3% 4%; 
`
export const TextArea = styledComponents(Text)`
   font-size: 16px;
   font-family: 'Ralewayw';
   font-weight: 500;
   @media (max-width: ${size.tablet}) {
      font-size: 14px;
   }
`
export const MenuArea = styledComponents(Row)`
     background: #09509F;
     height: 10vh;
     text-align: center;
     align-items: center;
     @media (max-width: ${size.tablet}) {
      display: none;
     }
`
export const NavLink = styledComponents(Link)`
   color: #fff !important;
   font-size: 18px;
   font-family: 'Ralewayw'; 
   font-weight: 500;
`
export const ColBtn = styledComponents(Col)`
  width: 48%;
`
export const ColAreaWrap = styledComponents(Col)`
  width: 60%;
`
export const FormArea = styledComponents(Row)`
    padding: ${({ type }) => (type === 'desktop' ? '10px 5% 10px 5%' : 0)};
   @media (max-width: ${size.tablet}) {
    justify-content: start;
    margin-top: 3rem;
    width: max-content;
    display: ${({ type }) => type === 'desktop' && 'none'}
   }
`
export const FormSubArea = styledComponents(Row)`
   width: 100%;
   border-radius: 14px;
   padding: 2% 5% 2% 5%;
   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='%23333' stroke-width='3' stroke-dasharray='22%2c25' stroke-dashoffset='62' stroke-linecap='square'/%3e%3c/svg%3e");
`
export const ProfileRow = styledComponents(Row)`
display: none;
@media (max-width: ${size.tablet}) {
    width: 97%;
    padding: 2%;
    border-radius: 12px;
    border: 1px solid #449AF6;
    margin: 1%;
    display: flex;
}
`
export const LinkChat = styledComponents(Link)`
   font-family: 'Ralewayw';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   letter-spacing: 0.853145px;
   text-decoration-line: underline;
   color: #1286F1;
`
export const TitleAboutText = styledComponents(Title)`
   font-family: 'Ralewayw';
   @media (max-width: ${size.tablet}) {
       font-family: 'Inter';
       font-style: normal;
       font-weight: 500 !important;
       font-size: 18px !important;
       line-height: 28px !important;
       letter-spacing: 0.8px !important;
       color: #000000;
   }
`
