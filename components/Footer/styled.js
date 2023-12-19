import { Button, Input, Col, Row, Typography } from 'antd'
import styledComponents from 'styled-components'
const size = {
  mobile: '680px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const FooterHeadiing = styledComponents(Typography.Paragraph)`
   color: #fff;
   max-width: 100vh;
   line-height: 35px;
   font-size: 18px;
   font-family:"Inter";
`
export const ContentSection = styledComponents(Col)`
   @media (max-width: ${size.tablet}) {
     text-align: center;
   }
`
export const ColWrap = styledComponents(Col)`
   width: 23vh;

   @media (max-width: ${size.mobile}) {
    margin-top: 10%;
    width: 20vh;
    }
`
export const LayoutWrapper = styledComponents(Row)`
        background: #19458B;
        padding: 5% 3% 1% 2%;
        justify-content: space-evenly;
        // margin-top: 105px !important; //${(gap) => (gap ? '105vh' : 0)},
        @media (max-width: ${size.tablet}) {
            padding: 5% 4% 1% 4%;
        }
`

export const FooterTitle = styledComponents(Typography.Paragraph)`
 cursor: pointer;
    &.footer_title  {
        margin-left: 4%;
        margin-bottom: 40px;         
        color: #fff;
        font-weight: 400 !important,
        cursor: pointer;
        font-size: 20px;
        font-family:"Inter";       
    }
    &.footer_title_list {
            font-family:"Inter";
            margin-left: 4%;
            color: #fff;
            font-weight: 400 !important,
            cursor: pointer;
            font-size: 16px;
            position: relative;
           ::before {
             content: '';
             position: absolute;
             width: 50%;
             height: 2px;
             border-radius: 4px;
             margin-bottom:-3px;
             background-color: #0CAFFF;
             bottom: 0;
             left: 0;
             transform-origin: right;
             transform: scaleX(0);
             transition: transform .3s ease-in-out;
           }
         :hover::before {
            transform-origin: left;
            transform: scaleX(1);
          }    
    }
     transition: background-size 400ms;
`
export const FooterIcon = styledComponents(Typography.Paragraph)`
  color: #fff;
  padding: 15px;
  font-size: 20px;
  padding-left: 0;
  font-family:"Inter";
  `

export const CopyRightContent = styledComponents(Row)`
   background: #133972;
   padding: 2% 0 1% 8%;
  `
export const FooterImg = styledComponents.img`
    margin-bottom: 7%;
    margin-top: -3%;
`
