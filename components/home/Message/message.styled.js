import styledComponents from 'styled-components'
import { Col, Row } from 'antd'
import { Typography, Input } from 'antd'
const { Title } = Typography
// const { TextArea } = Input
const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const MainTitles = styledComponents(Col)`
  @media (max-width: ${size.tablet}) { 
    margin-left: 30px;
  }
`
export const MessageWrapper = styledComponents(Row)`
 padding-top: 10px;
 display: grid;
 background: linear-gradient(268.43deg, #E8F5FB 34.16%, rgba(245, 242, 255, 0.87) 87.11%);
`

export const TitleMain = styledComponents(Title)`
font-style: normal;
font-weight: 500  !important;
font-size: 40px  !important;
text-align: center;
font-family: "Ralewayw" !important;
margin-top: 5px;
  @media (max-width: ${size.tablet}) { 
      font-size: 20px  !important; 
      text-align: start;
  }
`
export const TitleMessage = styledComponents(Title)`
 margin: 0 0 20px 45px;
 font-weight: 400 !important;
 font-family: "Ralewayw" !important;
 color: #280C0C !important;
 font-family: 'Inter';
   @media (max-width: ${size.tablet}) { 
      font-size: 14px !important; 
      margin: 0;
      text-align: start;
  }
`
export const Inputs = styledComponents(Input)`
margin: 5px 0 5px 0
`
