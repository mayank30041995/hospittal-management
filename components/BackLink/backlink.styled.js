import { Col, Typography } from 'antd'
import styledComponents from 'styled-components'
import { RightOutlined } from '@ant-design/icons'
const { Link } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const LinkArea = styledComponents(Col)`
    display: ${({ type }) => (type === 'mobile' ? 'none' : 'flex')};  
    @media (max-width: ${size.tablet}) {  
        display: ${({ type }) => (type === 'desktop' ? 'none' : 'contents')};
   }      
`
export const LinkText = styledComponents(Link)`
   font-size: 14px;
   font-weight: 500 !important;
   font-family: 'Inter';
   line-height: 26px;
   color: rgba(6, 80, 159, 0.9163) !important;
  @media (max-width: ${size.tablet}) {
    font-size: 12px;
  }    
`

export const MainLink = styledComponents(Col)`
  margin: 12px;
  @media (max-width: ${size.tablet}) {
     margin: 12px 5px;
  }
`
export const RightOutlinedIcon = styledComponents(RightOutlined)`
 color: blue;
 margin-left: 12px;  
`
