import { Col, Typography, Form, Row, Button, Modal } from 'antd'
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
   width: 23vh;
   height: 26vh;
   object-fit: cover;
 @media (max-width: ${size.tablet}) {
    width:${({ size }) => (size ? '100%' : '100%')};   
    height: 96%;
  }
`

export const ModalWrap = styledComponents(Modal)`
@media (max-width: ${size.tablet}) {
  .ant-modal-content {
    min-height: 122vh;
    margin: -14px;
  }
}
`
export const FormGroup = styledComponents(Form.Item)`
            .ant-form-item-control-input-content input {
                height: 6.2vh;
                border: 1px solid #a3caf4;
                font-family: 'Inter';
                border-radius: 5px;
            }
             @media (max-width: ${size.tablet}) {
               margin:2px;
              }
            `

export const CalenderBlockRow = styledComponents(Row)`
       @media (max-width: ${size.tablet}) {
            display: grid;
        }
`
export const ColumnContainer1 = styledComponents(Col)`
       @media (max-width: ${size.tablet}) {
            min-width: 100%;
        }
`
export const CardInfoRow = styledComponents(Row)`
            padding: 0 5% 0 5%;
            @media (max-width: ${size.tablet}) {
              padding: 0 3% 0 3%;
            }
`
export const CardInfo = styledComponents(Col)`
              border-color: #1286F1;
              border-style: solid;
              box-shadow:
                rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
              margin: 0 8px 12px 8px;
              border-radius: 3px 3px 0px 0px;
              background: #F6FAFF;
              border-width: 0.8px 0.5px 3px 0px;
              border-bottom: 2.5px solid #D9D9D9;
              border-left: 0.2px solid #D9D9D9;
              @media (max-width: ${size.tablet}) {
                    margin: 0 0px 12px 0px;
                    border-style: solid;
                    border: none;
                    box-shadow: none;
              }
              `
export const CardBlock = styledComponents(Col)`
                  width: 28vh;
                  padding-top: 3%;
                  padding-left: 3%;
                  border-bottom: 5px solid #1286F1;
                  @media (max-width: ${size.tablet}) {
                     width: 20vh;
                     border: none;
                  }
              `
export const CardTitle = styledComponents(Title)`
                    margin-top: 6%;
                    color: #06509F !important;
                    font-size: 21.547px;
                    font-weight: 600 !important;
                    font-family: 'Inter';
                    letter-spacing: 1.09201px;
                    @media (max-width: ${size.tablet}) {
                        font-size: 16.547px !important;
                        font-family: 'Ralewayw';
                    }
              `
export const CardText = styledComponents(Text)`
                     display: flex;
                    color: #306FB2 !important;
                    font-weight: 500 !important;
                    font-family: 'Inter';
                    font-size: 14.7751px;
                    line-height: 26px;
                    @media (max-width: ${size.tablet}) {
                        font-size: 12px !important;
                        line-height: 22px;
                    }
              `
export const ButtonSubmit = styledComponents(Button)`
                   width: 98%;
                  background: #06509F;
                  font-weight: 600;
                  font-family: 'Inter';
                  font-size; 12px;
                  height: 7vh !important;
              `
export const ButtonProceed = styledComponents(Button)`
                  font-weight: 500;
                  font-family: 'Inter';
                  padding: 0 14px 0 14px;
                  background: #06509F;
                  border-radius: 5px !important;
                   @media (max-width: ${size.tablet}) {
                   width: 100%;
                   }
              `
export const TitleModel = styledComponents(Title)`
                   margin: 15px;
                   font-family: 'Inter';
                   width: 40rem;     
                @media (max-width: ${size.tablet}) {
                  margin: 0;    
                  margin-top: 30px;
                  width: 19rem;                    
                }
              `
export const ColumnContainer = styledComponents(Col)`
                  margin-top: 5%;
                  justify-content: start;
              @media (max-width: ${size.tablet}) {
                   min-width: 100%;
                  }
              `
export const TextPopGroup = styledComponents(Text)`
                  margin: 24px;
                  font-size: 16px;
                  font-family: 'Inter';
                  @media (max-width: ${size.tablet}) {
                    margin: 0;
                  }  
              `
export const TextPopGroupOne = styledComponents(Text)`
                  margin: 15px;
                  font-size: 16px;
                  font-family: 'Inter'; 
                @media (max-width: ${size.tablet}) {
                      margin: 0;
                }
              `
export const SlotGroup = styledComponents(Col)`
              text-align: center;
              height: 6vh;
              cursor: pointer;
              padding: 2%;
              margin: 2%;
              border: 0.553142px solid #B9B9B9;
              font-size: 15px;
              background: ${({ timeSlot }) =>
                timeSlot.id === 1 ? '#06509F' : '#fff'};
              color:  ${({ timeSlot }) => timeSlot.id === 1 && '#fff'};
              @media (max-width: ${size.tablet}) {
                 height: 5vh;
              }
              `
export const TextInner = styledComponents(Text)`
             font-family: 'Inter';
              `
export const BillingCard = styledComponents(Col)`
        border-color: #1286F1;
        border-style: solid;
        margin: 0 6px 12px 6px;
        border-radius: 8px 8px 8px 8px;
        background: #F6FAFF;
        border-width: 0.8px 0.5px 0.5px 0.4px;
              `
export const BillingText = styledComponents(Text)`
        font-weight: 600;
              font-size: 18px;
              font-family: 'Inter',
              `
export const RowGroup = styledComponents(Row)`
        padding: 3px 22px 3px 22px;
              `

export const StepsText = styledComponents(Text)`
        font-family: 'Inter';
        color: #1286F1 !important;
         font-size: 13px;
`
export const FillTitle = styledComponents(Title)`
      font-family: 'Inter'
       margin-top: 15px;
`
export const Label = styledComponents.label`
    width: 92%;
    display: inline-block;
    padding: 3px 12px;
    cursor: pointer;
    text-align: center;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='%23333' stroke-width='3' stroke-dasharray='22%2c25' stroke-dashoffset='62' stroke-linecap='square'/%3e%3c/svg%3e");
`

export const StatusModel = styledComponents(Modal)`
  .ant-modal-content {
    height: 80vh !important;
  }
 @media (max-width: ${size.tablet}) {
  .ant-modal-content {
    min-height: 42rem !important;
    margin: -14px;
  }
 }
    text-align: center;
`
export const BoxContainer = styledComponents(Col)`
    margin-top: 6px;
    background: #F7FBFF;
    border: 0.5px solid rgba(18, 134, 241, 0.5);
    border-radius: 10.3432px;
    width: 99%;
    padding: 15px;
`
