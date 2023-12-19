import { Button, Col, Row, Typography } from 'antd'
import styledComponents from 'styled-components'
import { Input } from 'antd'
const { TextArea } = Input
const { Title, Paragraph, Text, Link } = Typography

const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const TextAreaBlock = styledComponents(TextArea)`
   textarea  {
    //  border: ${(border) => (border ? '1px solid #737373' : 'none')};
     color: #737373 !important;
  }
`
