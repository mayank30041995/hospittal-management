import { Button, Input, Col, Row, Typography } from 'antd'
import styledComponents from 'styled-components'
import {
  borderPicker,
  colorPicker,
  borderGradientSelector,
  backgroundMobile,
  colorText,
  comingSoon,
  doctors,
  findPlaceholder,
  hospitals,
  treatments,
} from './helper'
import AutocompleteSelect from '../../AutoComplete'
const { Title, Text, Paragraph } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const AutoCompleteSelect = styledComponents(AutocompleteSelect)`
   border: none !important;
   width: 20rem !important;
   
   @media (max-width: ${size.tablet}) { 
    
   } 
`
export const TitleWrapper = styledComponents(Row)`
padding: 40px 40px 0 40px;
justify-content: space-around;
@media (max-width: ${size.tablet}) {    
    padding: 20px 0 40px 0;
    display: ${(hide) => (hide.hide === 'true' ? 'none' : 'flex')};
 }
`
export const SearchWrapper = styledComponents(Row)`
display: ${(props) => (props.active !== '' ? '' : 'none')};
padding: 0 5% 0 5%;
justify-content: space-around;
@media (max-width: ${size.tablet}) {    
    padding: 20px 0 40px 0;
 }
`
export const SearchInputWrapper = styledComponents(Row)`
display: ${(props) => (props.active !== '' ? 'none' : '')};
padding: 0 5% 0 5%;
justify-content: space-around;
@media (max-width: ${size.tablet}) {    
    padding: 20px 0 40px 0;
 }
`

export const CardWrapper = styledComponents(Col)`
width: 18% !important;
text-align: -webkit-center;
@media (max-width: ${size.tablet}) {    
    width: 10vh !important;
 }
@media (max-width: ${size.small}) {    
    margin: 15px;
 }
`
export const InputText = styledComponents(Input)`
border: 1px solid #128C01;
// color: #128C01 !important;
.ant-picker-input input::placeholder {
  color: #f0f0f0 !important;
}
@media (max-width: ${size.tablet}) {    
    display: none;
 }
`

export const SearchContext = styledComponents(Col)`
:hover {
   box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.1);
}
background:  ${(props) =>
  props.color === 'aquamarine'
    ? '#D6FFCF'
    : props.color === 'metallic'
    ? '#F7F8FF'
    : props.color === 'venom'
    ? '#F0FFC3'
    : props.color === 'pink'
    ? '#FFF1F1'
    : props.color === 'macaw'
    ? '#F1FCFF'
    : ''};
border-radius: 24px;
text-align: center;
align-items: center;
// min-width: 10%;
cursor:pointer;
box-shadow: 0.5px 0.5px #888888;
width: 7rem;


@media (max-width: ${size.tablet}) {    
    height: 10vh;
    width: 65px;
    margin:0px;
 }
}
`

export const SearchTitle = styledComponents(Title)`
 font-family:"Inter";
&.aquamarine_title  {
     margin: 10px;
     color: #128C01;
    }
&.aquamarine_metallic  {
     margin: 0px;
     color:  #5A7EDC;
    }
&.aquamarine_venom  {
    margin: 0px;
    color: #617100;
    }
&.aquamarine_pink  {
     margin: 0px;
     color:  #993232;    
    }
&.aquamarine_macaw  {
     margin: 0px;
     color:  #00708E;    
    }

 @media (max-width: ${size.tablet}) {    
     font-size: 9px !important;
     }
 } 
`
export const FilterTitle = styledComponents(Title)`
 font-family:"Ralewayw";
  color: #01356C !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  width: 96% !important;
  margin:0;
  text-align: center;
   @media (max-width: ${size.tablet}) {    
      font-size: 15px !important;
      width: 100% !important;
      padding: 15px;
     }
 } 
 
`

//new Design

export const TypeTextSearch = styledComponents(Paragraph)`
  letter-spacing: 0.04em;
  line-height: 8px;
  font-size: 13.4px;
  font-weight: 400 !important;
`
export const TextGroup = styledComponents(Text)`
  font-family:"Inter";
  font-size: 13.2px;
  font-weight: 500 !important;
`

export const GlobalSearchWrapper = styledComponents(Row)`
   border-radius: 22px;
   width: 120vh;
   text-align: center;
   border: ${({ active }) => borderPicker(active, 1)};
     @media (max-width: ${size.tablet}) {  
         width: 120%;
         align-item: center;
         overflow-x: auto;
    }
  
`

export const CommaIcons = styledComponents.div`
    justify-content: space-between;
    display: flex;
    margin-bottom: 25px;
    @media (max-width: ${size.tablet}) {  
      margin: 15px;
      height: 3vh;
    }
`
export const GlobalSearchBlock = styledComponents(Row)`
    margin-top: 8px;
    background: linear-gradient(#fff, #fff) padding-box,
    ${({ active }) => borderGradientSelector(active)};
    border: 5px solid transparent;
    border-radius: 50px;
    text-align: center;
    height: 72%;
    justify-content: space-around;  
    @media (max-width: ${size.tablet}) {  
          overflow: hidden;
    }
     
`
export const GlobalSearchButton = styledComponents(Button)`
    font-weight: 500;
    letter-spacing: 1.2px;
    font-family: 'Inter';
    top: -5px;
     background:  ${({ active }) => colorPicker(active)};
     border-radius: 28px !important;
     width: 28vh;
    height: 55% !important;
`
export const GlobalSearchButtonWell = styledComponents(Button)`
    font-weight: 500;
    letter-spacing: 1.2px;
    font-family: 'Inter';
    top: -5px;
     background:  ${({ active }) => colorPicker(active)};
     border-radius: 28px !important;
     width: 28vh;
    height: 38% !important;
`
export const SearchInner = styledComponents(Col)`
    // &:hover {
    //   cursor: pointer;
    //   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    // }
`
export const GlobalSearchSection = styledComponents(Col)`
     margin-top: 10px;
     margin-left: 30px;
    height: 45%;
    font-weight: 450;
    background: transparent;
    overflow: hidden;   
`

// Banner Global Search

export const GlobalSearchMobWrapper = styledComponents(Row)`
   padding: 4%;
   margin-top: 8vh;
   background:  ${({ active }) => backgroundMobile(active)};
   display: none;
   @media (max-width: ${size.tablet}) {    
     display: flex;
     margin-top:  ${({ listing }) => (listing === 'true' ? 0 : '14vh')};
   }
`
export const SearchMobWrapper = styledComponents(Row)`
    border: ${({ active }) => borderPicker(active, 1)};
    border-radius: 16px;
    // opacity: active !== 'treatment' ? 0.4 : 1,
    background: #fff;
    width: 100%;
    margin-top: -9vh;
    margin-bottom: 9vh;
    overflow: hidden;
`

export const ColMobSection = styledComponents(Col)`
    // border-bottom:${({ active }) => borderPicker(active)},
    cursor: pointer;
    padding: 3%;
    text-align: center;
    max-width: 18vh;
    opacity: ${({ active, type }) => (active !== type ? 0.4 : 1)};
  `
export const ColBlock = styledComponents(Col)`
    display: grid;
    @media (max-width: ${size.tablet}) { 
      // display: flow-root; 
      width: -webkit-fill-available;
    }
  `
export const ColSearchSmall = styledComponents(Col)`
    background: #fff;
    border-radius: 10px;
    height:  5em !important;
    margin: 4px 0 10px 0 !important;
    padding: 4% 7% 2% 2% !important;
    overflow: hidden;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:  ${({ code }) => `1px solid ${code}`}
  `
export const SearchBtn = styledComponents(Col)`
    text-align: center;
    border-radius: 10px;
    text-align: center;
    align-item: center;
    background:  ${({ active }) => colorPicker(active)};
`

export const TextMob = styledComponents(Text)`
   font-size: 15px !important;
   font-family:"Inter";
   margin-left: 8px;
   letter-spacing: 0.1px;
   color:${({ active }) => colorText(active)};
   font-weight: 500;
   @media (max-width: ${size.tablet}) {  
    font-size: 14px !important;
    font-family: "Ralewayw";
    margin-left: 8px;
    -webkit-letter-spacing: 0.1px;
    -moz-letter-spacing: 0.1px;
    -ms-letter-spacing: 0.1px;
    letter-spacing: 0.1px;
    color: #001047 font-weight:500;
   }
`
export const TextMobArea = styledComponents(Text)`
  font-size: 12px !important;
  font-family:"Inter";
`
export const TextSearchMob = styledComponents(Title)`
    font-family: 'Ralewayw';
    font-size: 16px !important;
    margin: 12px 28px;
    color: #fff !important;
    font-weight: 500 !important;
`

export const AutocompleteSelectBlock = styledComponents(AutocompleteSelect)`
    border: 1px solid #fff !important;
    height: 6vh;
      width: 400px;
   .ant-select-selection-placeholder {
      font-size: 14px !important;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  `
