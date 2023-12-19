import { Col, Typography, Form, Row, Button, Modal } from 'antd'
import styledComponents from 'styled-components'
import { RightOutlined } from '@ant-design/icons'
import AutocompleteSelect from '../../../AutoComplete'
const { Link, Title, Text } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const FormGroupDate = styledComponents(Form.Item)`
    margin: 5px; 
           
    .ant-form-item-control-input-content input {
        height: 6.2vh;
        border: 1px solid #a3caf4;
        border-radius: 5px;
         border: none; 
    }
`
export const TitleTop = styledComponents(Title)`
    font-family: 'Inter';
    font-weight: 500 !important;
`
export const TextTop = styledComponents(Text)`
    font-family: 'Inter';
    font-weight: 500 !important;
`
export const ButtonSubmit = styledComponents(Button)`
    width: 30%;
   background: #0872E3;
   color: #fff;
    :hover {
      background-color: white;
    }
    @media (max-width: ${size.tablet}) {
        width: 40%;
    }
`
export const TopContainerRow = styledComponents(Row)`
    border: 1px solid #06509F;
    padding: 16px;
    border-radius: 6px;
    width: 21em;
    @media (max-width: ${size.tablet}) {
        margin: 5px;
    }
`
export const TopContainer = styledComponents(Row)`
    margin-top: 18px;
    background: rgb(245, 247, 249);
    padding: 15px;
    width: 85%;
    @media (max-width: ${size.tablet}) {
        margin: 0;
        width: 100%;
    }
`
export const TopContainerNext = styledComponents(Row)`
   display: grid;
   margin-top: 18px;
   padding: 15px;
   width: 85%;
   @media (max-width: ${size.tablet}) {
       width: 100%;
   }
`
export const TopContainerOuter = styledComponents(Row)`
   padding: 15px;
   width: 100%;
   @media (max-width: ${size.tablet}) {
     width: 100%;
     display: block;
   }
`
export const Block = styledComponents(Col)`
   padding: 4% 0 0 7%; 
   width: 100%;
  @media (max-width: 768px) {
    min-width: 22rem;
    padding: 5% 3% 50% 3%;
     width: 62%;
  }
`
export const AutoCompleteArea = styledComponents(AutocompleteSelect)`
 .ant-select-selection-placeholder {
      font-size: 14px !important;
      letter-spacing: 0.5px;
      color: rgba(0, 0, 0, 0.88) !important;
      font-family: 'Inter';
    }
`
