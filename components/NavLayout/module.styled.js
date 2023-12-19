import { Button, Col, Row, Typography } from 'antd'
import styledComponents from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

const { Title, Paragraph, Text, Link } = Typography

const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const ContainerPopOuter = styledComponents.div`
   display: flex;
`
export const ContainerPop = styledComponents.div`
   margin-left:8px;
   display: grid;
   font-family: 'Inter';
   font-size: 12px;
`
export const PageWrapper = styledComponents(Row)`
align-items: baseline;
 @media (max-width: ${size.tablet}) {   
    justify-content: flex-start;
    margin-left: -30%;
  }
`
export const LayoutWrapper = styledComponents(Row)`
 padding: 15px 8vh 80px 8vh;
 justify-content: space-around;
   @media (max-width: ${size.tablet}) {    
      padding: 8px 8px 0 8px;
      background: #F7FCFF;
     }
    }
`

export const LayoutWrapperBanner = styledComponents(Row)`
 padding: 90px 6vh 80px 6vh;
 flex-flow: unset;
 justify-content: space-around;
   @media (max-width: ${size.tablet}) {    
      padding: 30px 8px 0 8px;
      flex-flow: column;
      background: #F7FCFF;
     }
    }
`
export const NavWrapper = styledComponents(Row)`
    padding: 15px 16vh 15px 8vh;
    box-shadow: ${({ underline }) =>
      !underline === 'true'
        ? ' 0px 0.8px 0px rgba(179, 179, 179, 0.25)'
        : 'none'};
    background:${({ dashboard }) =>
      dashboard === 'true' ? '#F6FBFF' : '#FFFFFF'};
    align-items: center;
    top: 0;
    position: fixed;
    z-index: 2;
    width: 100%;
    margin: 0;
    padding: 5px 70px;
   @media (max-width: ${size.tablet}) {
    display: none;    
      padding: 30px 8px 0 8px;  
     }
    }
`
export const NavWrapperMobile = styledComponents(Row)`
   display: none;
   @media (max-width: ${size.tablet}) {
     display: flex;  
     margin:15px;
      align-items: center;    
      justify-content: space-between;
      top: 0;
      position: fixed;
      z-index: 2;
      width: 100%;
      background: #fff;
      margin: 0;
      padding: 5px 15px;
     }
    }
`
export const SpanLinks = styledComponents.span`
    &:hover {
       cursor: pointer;
       color: #09509F;
       text-decoration: underline;
    }
`
export const NavImageSection = styledComponents.img`
 @media (max-width: ${size.tablet}) {  
    object-fit: cover;
    border-radius: 12px;
    width: 40%;
    height: 20vh;
    margin: 0;
    display: ${({ hide }) => (hide ? 'none' : 'block')}
  }
`
export const NavImage = styledComponents.img`
 margin: 6px;
}
`
export const NavLogo = styledComponents.img`
   margin: 6px;
   margin-left: 3%;
   margin-top: 14px;
   width: 28vh;
}
`
export const NavImageBanner = styledComponents.img`
 margin-top: 6px;
 margin-bottom: -8px;
}
`
export const ButtonWrapper = styledComponents(Button)`
width: 110px;
font-weight: 500;
font-size: 12.6267px !important;
font-family:"Ralewayw";
background:${(props) => (props.colors === 'primary' ? '#09509F' : '')};
color:${(props) => (props.colors === 'primary' ? '#fff' : '#09509F')};
border:${(props) => (props.colors !== 'primary' ? '1px solid #09509F' : '')};
margin:${(props) => (props.colors !== 'primary' ? '10px' : '')};
`

export const TitleWrapper = styledComponents(Row)`
  margin-top: 4%;
//  justify-content: center;
`
export const TitleHead = styledComponents(Col)`
 max-width: 90vh;
`

export const TitleBar = styledComponents(Title)`
color: #0A1781 !important;
font-weight: 500 !important;
text-align: center;
font-size: 40px  !important;
line-height: 153.84% !important;
letter-spacing: 2.5px;
font-family: 'MontserratMedium';
 @media (max-width: ${size.tablet}) {    
    font-size: 25px !important;
    text-align: center !important;
     }
    }
`
export const TextProfile = styledComponents(Text)`
  font-family: 'Ralewayw';
  font-weight: 500;
  color: #000000;
  font-size: 18px;
  margin: 0;
`
export const TextProfileTitle = styledComponents(Text)`
   fontFamily: 'Inter';
   font-weight: 300;
   color: #000000;
   font-size: 14px;
   margin: 0;
`
export const TitleBarMessage = styledComponents(Title)`
color: #0A1781 !important;
font-weight: 400 !important;
font-size: 50.5994px !important;
text-align: center;
letter-spacing: 0.86904px;
line-height: 75px !important;
 font-family: 'Ledger';
 @media (max-width: ${size.tablet}) {    
    font-size: 16px !important;
    text-align: center;
    width: auto;
    line-height: 5vh !important;
    padding: 5%;
    }
    @media (max-width: ${size.mobile}) {  
       width: 51vh;  
    }
}
`

export const DrawerContainer = styledComponents.div`
    z-index: 1;
    position: fixed;
    background: #fff;
    height: 100%;
    width: 92%;
    padding: 18px 16px 19px 18px !important;
    overflow: hidden;
    ::-webkit-scrollbar {
         display: none;
    }
`
export const RowList = styledComponents(Row)`
    background: #F9F9F9;
    border-radius: 6px;
`
export const ColList = styledComponents(Col)`
    letter-spacing: -0.608811px;
    color: #06509F;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin: 12px 22px;
`