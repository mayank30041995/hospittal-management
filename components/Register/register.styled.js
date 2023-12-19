import { Button, Col, Row, Typography, Radio, Form } from 'antd'
import styledComponents from 'styled-components'
import SelectGroup from '../Select/SelectGroup'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const { Title, Paragraph, Text, Link } = Typography

const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const HideDisplay = styledComponents.div` 
   display: none;  
   @media (max-width: ${size.tablet}) {
    display: block;
   }
`
export const HideDisplayMobile = styledComponents.div`
   display: contents;   
   @media (max-width: ${size.tablet}) {
    display: none;  
   }
`

export const FormGroup = styledComponents(Form.Item)`
            margin: 5px;          
            .ant-form-item-control-input-content input {
                height: 6.2vh;
                  border: 0.5px solid #b3b3b3;
                  border-radius: 5px;
            }
`
export const LayoutWrapperComponent = styledComponents(Row)`
          padding: 5px 60px;
          @media (max-width: ${size.tablet}) {
             padding: 5px 15px;
          }
`
export const LayoutWrapperComponent2 = styledComponents(Row)`
       padding: 5px 60px;
       @media (max-width: ${size.tablet}) {
             padding: 0px 12px 0px;
             width: 96%;
       }
`

export const SelectGroupOther = styledComponents(SelectGroup)`
    background: #FFFFFF !important;
    border: 0.5px solid #b3b3b3;
    border-radius: 6px;
    text-align: start;
   .ant-select-selector {
       height: 7vh !important;
    }
`

export const RadioGroup = styledComponents(Radio.Group)`
   width: 60vh;
   @media (max-width: ${size.tablet}) {
    width: 100%;
    text-align: start;
    }
`
export const LayoutWrapperChain = styledComponents(Row)`
  width: 95%;
  height: 100%;
  padding: 5px 5px 20px;
  @media (max-width: ${size.tablet}) {
    width: 98%;
    height: 80%;
    padding: 0px;
    display: flow;
  }
`
export const LayoutWrapper = styledComponents(Row)`
  width: 95%;
  height: 100%;
  padding: 15px 60px 20px;
  @media (max-width: ${size.tablet}) {
    width: 98%;
    height: 80%;
    padding: 12px;
  }
`
export const ColumnBlock = styledComponents(Col)`
  @media (max-width: ${size.tablet}) {
    display: grid;
    justify-content: center;
    place-items: center;
  }
`
export const PhoneInputReact = styledComponents(PhoneInput)`
    .form-control {
      width: -webkit-fill-available  !important;
     }
`

export const ContentLayout = styledComponents(Row)`
   margin: 0;
   min-height: 60vh;
   min-width: 65vh;
   padding: 11%;
   padding-top: 15%;
   margin-top: 20px;
   text-align: center;
   background: #FFF; 
   @media (max-width: ${size.tablet}) {
     padding: 6%;
     margin-top: 15px;
     min-height: 20em;
     min-width: 100%;
     width: auto;
   }

`
export const TextBlock = styledComponents(Row)`
   border: 1px solid #000206;
   border-radius: 5px;
   padding: 8px;
   text-align: center;
   @media (max-width: ${size.tablet}) {
    display: none;
   }     
`
export const CardWrapper = styledComponents(Row)`
   border:${({ type }) =>
     type === 'treatment'
       ? '1px solid #06509F'
       : type === 'doctor'
       ? '1px solid #575757'
       : '1px solid #888888'};
   border-radius: 12px ;
   padding: 12px;
   text-align: left;
   justify-content: space-evenly;
   align-items: center;
   @media (max-width: ${size.tablet}) {
    align-items: start;
   }
`
export const SpanText = styledComponents.span`
    font-family: 'Ralewayw';
    color: #06509F !important;
    font-weight: 700
`

export const CardGroup = styledComponents(Row)`
   display: none;
   text-align: center;
   background: #F5F7F9;
   border-radius: 18px;
   padding: ${({ google }) =>
     google === 'true' ? '4% 10% 4% 10%' : '4% 6% 4% 6%'};
   @media (max-width: ${size.tablet}) {
    display: block;
   }
`
export const ButtonSubmit = styledComponents(Button)`
   width: 100%;
   background: #0872E3;
   color: #fff;
    :hover {
      background-color: white;
    }

`
export const ButtonSubmitStep = styledComponents(Button)`
   width: 100%;
   margin-left: -30%;
   background: #0872E3;
   color: #fff;
    :hover {
      background-color: white;
    }
   @media (max-width: ${size.tablet}) {
      width: auto;
      background: #0872E3;
      color: #fff;
     margin-left: -3rem;
      margin-bottom: 20vh;
   }
`
