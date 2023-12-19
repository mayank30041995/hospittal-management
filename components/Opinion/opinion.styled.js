import { Col, Typography, Row, Button, Form } from 'antd'
import styledComponents from 'styled-components'
import { RightOutlined } from '@ant-design/icons'
const { Link, Title, Text } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const ContainerBody = styledComponents.div`
   margin-top: 10vh;
    @media (max-width: ${size.tablet}) {
      margin-top: 0vh;
    }
`

export const CardImage = styledComponents.img`
   width: 24vh;
   height: 30vh;
   object-fit: cover;
 @media (max-width: ${size.tablet}) {
    width:${({ size }) => (size ? '100%' : '100%')};
    height: 93%;
  }
`

export const FormGroupWrap = styledComponents(Row)`
    padding: 0 5% 0 5%;
    @media (max-width: ${size.tablet}) {
       padding: 0 1% 0 1%;
      }
`
export const CardInfo = styledComponents(Col)`       
              margin: 0 8px 12px 8px;
              border-radius: 3px 3px 0px 0px;
              background: #F6FAFF;
              border-width: 0.8px 0.5px 3px 0px;
              `
export const OpinionWrap = styledComponents(Col)`       
              margin: 0 0 12px 4%;
              @media (max-width: ${size.tablet}) {
                margin: 0;
              }
              `
export const TextContainer = styledComponents(Col)`
        margin-left: 24px;
        @media (max-width: ${size.tablet}) {
           margin-left: 16px;
        }
`
export const CardBlock = styledComponents(Col)`
                  width: 28vh;
                  padding-top: 2%;
                  padding-left: 3%;
                //   border-bottom: 5px solid #1286F1;
                  @media (max-width: ${size.tablet}) {
                     width: 20vh;
                  }
              `
export const CardTitle = styledComponents(Title)`
                    margin-top: 6%;
                    font-weight: 400;
                    color: #06509F !important;
                    font-size: 24.547px !important;
                    font-weight: 600 !important;
                    font-family: 'Inter';
                    letter-spacing: 1.09201px;
                    @media (max-width: ${size.tablet}) {
                        font-size: 16.547px !important;
                        color: #000 !important;
                        font-family: 'Ralewayw';
                    }
              `
export const CardText = styledComponents(Text)`
                     display: flex;
                    color: #306FB2 !important;
                    font-weight: 500 !important;
                    font-family: 'Inter';
                    font-size: 15.7751px;
                    line-height: 28px;
                    @media (max-width: ${size.tablet}) {
                        font-size: 12px !important;
                        color: #000 !important;
                        font-weight: 400 !important;
                        line-height: 22px;
                    }
              `
export const FormGroup = styledComponents(Form.Item)`
            margin: 5px;          
            .ant-form-item-control-input-content input {
                height: 6.2vh;
                border: 1px solid #a3caf4;
                  border-radius: 5px;
            }
            `
export const LabelForm = styledComponents.label`
            color: #6A6A6A;
            font-size: 14px;
            font-family: 'Inter',
            font-weight: 500;
            margin: 5px;
              `

export const DetailsModelRow = styledComponents(Row)`
    background: #F7FBFF;
    border-radius: 10.0915px;
`
export const DetailsModel = styledComponents(Col)`   
    width: 60vh;
    text-align: center;
    @media (max-width: ${size.tablet}) {
         width: 40vh;
    }
`
export const DetailsModelWrapper = styledComponents(Col)`   
     margin: 25px;
     padding: 0 15%;
     display: grid;
     text-align: center;
     place-items: center;
    @media (max-width: ${size.tablet}) {
       margin: 0;
       padding: 0;
    }
`