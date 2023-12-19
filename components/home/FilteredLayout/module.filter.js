import styledComponents from 'styled-components'
import { Col, Row } from 'antd'
const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const Card = styledComponents(Col)`
 &.cardContent  {
   width: 55vh;
   border-radius: 24px;
    text-align: center;
    min-width: 33vh;
    padding-top:15px;
    padding-bottom: 30px;
    padding-left: 2px;
    padding-right: 2px;
    background: linear-gradient(91.67deg, rgba(255, 238, 226, 0.5) 26.99%,  60.66%, rgba(202, 165, 255, 0) 102.95%);
      
   @media (max-width: ${size.tablet}) {    
      min-width: 100%;
      background: transparent;
     }
    }
 &.cardSearch  {
    width: 50vh;
    text-align: center;
    min-width: 34vh;
    padding-top:15px;
    padding-bottom: 30px;
    padding-left: 2px;
    padding-right: 2px;
    background: linear-gradient(214.67deg,rgba(231,313,221,0.278409),60.66%,rgba(202,165,255,0) 76.95%,rgba(299,310,229,0.5) 44.99%);
   @media (max-width: ${size.tablet}) {    
       min-width: 100%;
      background: transparent;
     }
    }
 &.rateIt  {
    width: 50vh;
    border-radius: 24px;
    text-align: center;
    border-radius: 24px;
    min-width: 33vh;
    padding-top:15px;
   padding-bottom: 30px;
    padding-left: 2px;
    padding-right: 2px;
    background: linear-gradient(276.67deg,#f6f0ff,44.66%,rgba(177,165,255,0) 102.95%,rgba(288,286,226,0.5) 26.99%);
    @media (max-width: ${size.tablet}) {    
      min-width: 100%;
      background: transparent;
     }
    }
`
