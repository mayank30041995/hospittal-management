import { Col, Form, Row, Select, Typography, Button, Input } from 'antd'
import styledComponents from 'styled-components'

const { Title, Text, Paragraph } = Typography
const { Search } = Input

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const RowContainer = styledComponents(Row)`
 margin-top: 4em;
`
export const MenuSection = styledComponents(Col)`
   height: 120vh;
   background: #F6FBFF;
//    max-width: 33vh; 
   min-width: 34vh; 
   @media (max-width: ${size.tablet}) {
        display: none;
    }
`
export const MenuSectionMobile = styledComponents(Col)`
   display: none;
   @media (max-width: ${size.tablet}) {
        display: block;
        border-bottom: 1px solid #BFBFBF;
    }
`
export const MenuBlock = styledComponents(Row)`
    margin-top: 135px;  
`
export const MenuItem = styledComponents(Col)`
    padding: 10px;
    // background: #06509F;
    // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 75%;
    text-align: center; 
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
`
export const NavMenuTextBlack = styledComponents(Text)`
    color: #000;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 15.5px;
    margin-left: 12px;
    letter-spacing: 0.2px;
    flex: none;
    order: 1;
    flex-grow: 0;
`

export const MenuButton = styledComponents(Col)`
    padding: 10px;
    background: #06509F;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 75%;
    text-align: center; 
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
`
export const NavMenuText = styledComponents(Text)`
    color: #fff;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 15.5px;
    margin-left: 12px;
    letter-spacing: 0.2px;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const TextSwitch = styledComponents(Text)`
    color: #06509F;
    font-family: 'Inter'; 
    font-weight: 500 !important;
    letter-spacing: 0.3px;
    font-size: 14px;
    
`
export const BodyTitle = styledComponents(Title)`
    font-family: 'Inter';
    font-weight: 500 !important;
    font-size: 25px !important;
    letter-spacing: 0.2px;
     @media (max-width: ${size.tablet}) {
        display: none;
    }
`
export const SwitchProfile = styledComponents(Col)`
  padding: 5px 18px 5px 16px;
  background: #FDFDFD;
  box-shadow: 0px 0px 2px #59A0E2;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: ${size.tablet}) {
        display: none;
  }
`
export const TextDiv = styledComponents(Text)`
   font-family: 'Inter';
`
export const TextDiv2 = styledComponents(Text)`
   color: #707070;
   font-size: 10px;
    font-family: 'Inter';
`
export const DisplayText = styledComponents.div`
   display: grid;
   height: 3vh;
`
export const SwitchContentText = styledComponents.div`
   display: flex; 
`
export const SwitchContent = styledComponents.div`
    
    width: 135%;
    padding: 8px;
    background: #FFFFFF;
    border: 3px solid #DDDDDD;
    border-radius: 15px;
    position: absolute;
    box-sizing: border-box;
    visibility: visible;
    transform: scale(1) translateX(-12%);
    z-index: 1;
     @media (max-width: ${size.tablet}) {
        display: none;
    }
`
export const TopNavSection = styledComponents(Row)`
    align-items: center;
    padding: 1% 8% 1% 12px;
    place-items: baseline;  
`
export const ProfileRow = styledComponents(Row)`
    align-items: center;
    width: 100%;
    // justify-content: space-between;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.11) 1px 0px 8px;
    border-radius: 5px;
`
export const ReportRow = styledComponents(Row)`
    display: flow-root;
    align-items: center;
    width: 100%;
    // justify-content: space-between;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.11) 1px 0px 8px;
    border-radius: 5px;
`

export const DashboardCard = styledComponents(Row)`
   display: none;
    @media (max-width: ${size.tablet}) {
        display: flex;
    }
`
export const TopNavFlex = styledComponents(Row)`
    text-align: center;
    align-items: baseline;
    background: #F7F7F7;
    border-radius: 10.0728px;
    padding: 3px 5px 3px 5px;
    margin: 8px;
    cursor: pointer;
    @media (max-width: ${size.tablet}) {
        border-radius: 6.0728px;
     }
`
export const ProfileInfoCard = styledComponents(Col)`
    // background: #FFFFFF;
    // box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.11);
    // border-radius: 5px;
    // height: 35vh; 
    @media (max-width: ${size.tablet}) {
        display: none;
    }
`
export const EmptyText = styledComponents(Col)`
    text-align: center;
    padding-top: 50%;
`
export const RightInfoCard = styledComponents(Col)`
    background: #FDFDFD;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 9.29795px;
    height: 80vh;
    width: 98%;
    margin-left: 12px;
    overflow: auto;
    ::-webkit-scrollbar {
     width: 8px;
    }
    ::-webkit-scrollbar-track {
     box-shadow: inset 0 0 5px grey;
     border-radius: 10px;
   }
   ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
   }
    @media (max-width: ${size.tablet}) {
         ::-webkit-scrollbar {
            display:none;
        }
        min-width: 105%;
        box-shadow: none;
        margin: 0;
    }
`
export const RightInfoCardVariant = styledComponents(Col)`  
    
   @media (max-width: ${size.tablet}) {
    display: none;
    }
`

export const ContentWrittenArea = styledComponents.div`
    display: flex;
    justify-content: space-between;
    // width: 60vh;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const CardWrapper = styledComponents.div`
   display: flex;
    @media (max-width: ${size.tablet}) {
        display: none;
    }
  
`
export const StrictMode = styledComponents.div`
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const ContentParagraph = styledComponents(Paragraph)`
    color: rgba(6, 80, 159, 0.6664);
    font-weight: 600 !important;
    font-size: 11.5111px;
    line-height: 6px;
    margin-top: 12px;
    font-family: 'Inter';
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const ContentParagraphRow = styledComponents(Paragraph)`
    color: rgba(6, 80, 159, 0.6664);
    font-weight: 600 !important;
    font-size: 11.5111px;
    width: 20vh; // width: 18vh;
    border-bottom: 0.8px solid #C0DFFC;
    font-family: 'Inter';
    flex: none;
    order: 0;
    flex-grow: 0;
    // text-decoration: underline;
`

export const TabStatus = styledComponents(Col)`
    background: #FFFFFF;
    border: 0.5px solid #06509F;
    box-shadow: 0px 0px 2.32449px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 9px;
    text-align: center;
`
export const TabStatusText = styledComponents(Text)`
    color: #06509F;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter';
`
export const TabStatusPara = styledComponents(Paragraph)`
    color: #06509F;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter';
`

export const LayerInfoCard = styledComponents(Col)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin: 8px;    
    @media (max-width: ${size.tablet}) {
        box-shadow: none;
    }
`
export const LayerInfoCardStart = styledComponents(Col)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin: 8px;
    padding-top: 5px;  
    cursor: pointer; 
`
export const LayerInfoSectionOne = styledComponents(Col)`
     width: 100%;
    display: flex;
    padding: 6px 12px 0 12px;
    align-items: baseline;
    justify-content: space-between;
    @media (max-width: ${size.tablet}) { 
     margin: 2px;
   }  
`
export const LayerInfoSectionTwo = styledComponents(Col)`
     padding: 0 12px 0 12px;
     width: 100%;
    display: flex;
    align-items: flex-start;
    height: 1.8rem;
    padding-top: 12px;
    padding-bottom: 15px;
    // justify-content: space-between;
`
export const LayerInfoSectionThree = styledComponents(Paragraph)`
    font-family: 'Inter';
    display: block;
    
`
export const LayerInfoSectionTitle = styledComponents(Title)`
    font-family: 'Inter';
    margin-top: 10px;
    font-weight: 500 !important;
    font-size: 18.3707px;
     line-height: 29px;
    color: #616161;
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const LayerInfoSectionStatusOK = styledComponents.div`
    background: #ADFFAB;
    border-radius: 7.82694px;
    padding: 5px 9px 5px 9px;
    color: #20B038;
    flex: none;
    order: 0;
    flex-grow: 0;
   @media (max-width: ${size.tablet}) { 
     border-radius: 0px;
      padding: 2px 12px 2px 12px;
   }
`
export const LayerInfoSectionStatusFail = styledComponents.div`
    background: #FFDEDE;
    border-radius: 7.82694px;
    padding: 5px 9px 5px 9px;
    color: #DB5D5D;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width: ${size.tablet}) { 
     border-radius: 0px;
      padding: 2px 12px 2px 12px;
   }
`
export const LayerInfoSectionParagraph = styledComponents(Paragraph)`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    color: #616161;
    line-height: 12px;
    height: 2vh;
    display: contents;
    text-align: center;
    margin: 8px;
`
export const LayerInfoSectionParagraphOuter = styledComponents(Paragraph)`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 11px !important;
    color: #616161;
    line-height: 12px;
    height: 2vh;
    display: contents;
    text-align: center;
    margin: 8px;
`
export const LayerInfoSectionParagraphInner = styledComponents(Paragraph)`
   font-size: 12.5px !important;
   line-height: 19px;
   color: #616161;
   font-weight: 500;
   font-family: 'Inter';
   text-align: left;
   @media (max-width: ${size.tablet}) { 
    font-size: 12.9469px;
   }
`

export const LayerInfoSectionOut = styledComponents(Col)`
     width: 100%;
    display: flex;
    padding: 6px 12px 0 12px;
    align-items: baseline;
    justify-content: space-around;
    
`
export const LayerInfoSectionOutParagraph = styledComponents(Paragraph)`
    color: #06509F;
    font-weight: 500;
    font-size: 11px; 
    cursor: pointer;
    font-family: 'Inter'; 
    flex: none;
    @media (max-width: ${size.tablet}) { 
      font-size: 10px; 
   }
`
export const LayerInfoSectionOutRow = styledComponents(Row)`
    display: block;
    text-align: start;
`

export const ReportAddText = styledComponents(Text)`
   font-family: 'Inter'; 
   font-weight: 500;
   font-size: 14px;
   line-height: 18px;
   text-align: center;
   letter-spacing: 0.443158px;
   text-transform: capitalize;
   color: #1286F1;
   cursor: pointer;
`
export const ListItem = styledComponents(Row)`
padding: 12px 0px;
margin: 8px;
background: #FFFFFF;
box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
border-radius: 2px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`
export const ListText = styledComponents(Paragraph)`
 font-family: 'Inter'; 
font-weight: 500;
font-size: 12.5634px;
letter-spacing: 0.429337px;
text-transform: capitalize;
flex: none;
order: 1;
align-self: stretch;
flex-grow: none;
`

export const FormGroupWrap = styledComponents(Row)`
    padding: 5px  2% 5px 4%;
    align-items: baseline; 
    @media (max-width: ${size.tablet}) { 
        display: none;
    }
`
export const FormGroup = styledComponents(Form.Item)`
    margin: 3px;
    .ant-form-item-control-input-content input {
        border-radius: 2px;
        font-family: 'Inter';
        height: 6vh !important;
        box-shadow: 0px 0px 4px rgba(114, 114, 114, 0.25);
        border: 1px solid #fff;
    }
    :where(.css-dev-only-do-not-override-10ed4xt).ant-form-item .ant-form-item-control-input {
        box-shadow: 0px 0px 4px rgba(114,114,114,0.25);
    }
`
export const FormLabel = styledComponents.label`
    font-size: 12px !important;
    font-family: 'Ralewayw' !important;
    margin: 5px;
    font-weight: 400;
    text-transform: capitalize;
    color: rgb(106, 106, 106);
`
export const ButtonSwitch = styledComponents(Button)`  
    border: none;
    box-sizing: border-box;
    box-shadow: none;
    font-size: 12px !important;
    font-weight: 500;
}
`
export const ButtonManage = styledComponents(Button)`
    background: #EEEEEE;
    border-radius: 3px;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #000000;
    font-size: 12px !important;
    font-weight: 500;
    margin-left: 28px;
    margin-top: 8px;
    padding: 0px 20px !important;
    border-radius: 4px;
`
export const SubmitForm = styledComponents(Button)`
    background: #06509F;
    border-radius: 5px !important;
    padding: 0 35px !important;
    font-family: 'Inter' !important;
    font-size: 13px !important;
    @media (max-width: ${size.tablet}) { 
        width: 100%;
    }
`
export const ChannelHead = styledComponents.div`
    display: flex;
    justify-content: space-between;
     padding: 5px 8% 5px 4%;
    align-items: baseline;
`
export const AccptedParagraph = styledComponents.p`
    font-size: 10px;
    letter-spacing: 0.486837px !important;
    text-transform: uppercase;
    color: #6A6A6A;
    font-family: 'Inter' !important;
`
export const FileAddSection = styledComponents(Col)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 32px 5px;
    cursor: pointer;
`
export const FileAddSectionAdd = styledComponents(Col)`
    background: #FFFFFF;
    border: 0.5px dashed #555555;
    border-radius: 2px;
    height: 10vh;
    text-align: center;
    padding: 4.5% !important;
    font-family: 'Inter' !important;
    color: #1286F1;
    box-sizing: border-box;
`
export const TabWrap = styledComponents(Row)`
   padding: 2% 0;
   align-items: baseline; 
`
export const TabArea = styledComponents(Col)`
    // margin-bottom: 10px !important;
    border-bottom: 1px solid #D4D4D4;
    width: 85%;
    display: flex !important;
     @media (max-width: ${size.tablet}) { 
         display: none !important;
    } 
`
export const TabBlock = styledComponents(Col)`
    // width: 28%;
    text-align: center;
    border-bottom:${({ active }) => (active ? '2px solid #1286F1' : 'none')};
    margin-left: 6%;
    margin-right: 4%;
    font-weight: 500;
    font-size: 16px;
    line-height: 42px;
    cursor: pointer;
    font-family: 'Inter';
    flex: none;
    order: 0;
    flex-grow: 0;
     @media (max-width: ${size.tablet}) {
        display: none;
    }
`
export const CardWrap = styledComponents(Col)`
    background: #FFFFFF;
    box-shadow: 3.25px 0px 15.1667px 2.16667px #EEEEEE;
    border-radius: 5.41667px;
    width: 26.5%;
    margin: 10px 5px 10px 20px;
    padding: 3px 12px 0 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width: ${size.tablet}) { 
     display: none;
    }  
}
`

export const CardTitle = styledComponents(Title)`
    font-family: 'Inter';
    margin-top: 10px;
    font-weight: 600 !important;
    font-size: 18.3707px !important;
     line-height: 29px;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: #06509F !important;
`
export const CardParagraph = styledComponents(Paragraph)`
    font-family: 'Inter';
    font-weight: 600 !important;
    font-size: 12.8707px;
    line-height:14px !important;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: #06509F !important;
    text-underline: ${({ underline }) =>
      underline === 'true' ? 'underline' : 'none'};
`
export const CardStatusOk = styledComponents.div`
    font-family: 'Inter';
    font-size: 12px;
    text-align: center;
    width: 12vh;
    padding: 3px 24px 3px 24px;
    color: #20B038;
    background: #F0FFED;
    border-radius: 5px; 
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const CardStatusFail = styledComponents.div`
    font-family: 'Inter';
    font-size: 12px;
    text-align: center;
    width: 12vh;
    padding: 3px 24px 3px 24px;
    color: #DB5D5D;
    background: #FFDEDE;
    border-radius: 5px; 
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const VerticalDivider = styledComponents.div`
    border-right: 1px solid #959595;
    height: 16px;
`

// Table

export const Table = styledComponents.table`
   width: 95%;
    border-collapse: collapse;
    th:first-child{
      border-radius: 8px 0 0px 0px;
    }
    th:last-child{
      border-radius: 0 8px 0px 0px;
    }
     @media (max-width: ${size.tablet}) {
        display: none;
    }
`

export const TableHeader = styledComponents.thead`

    text-align: center;
    background: rgb(242, 241, 246);
    border-radius: 8px 8px 0px 0px;
    height: 6vh;
`
export const TableHeaderEmpty = styledComponents.thead`
    position: absolute;
    margin-left: 32%;
    text-align: center;
    border-radius: 8px 8px 0px 0px;
    height: 6vh;
`

export const TableDataCell = styledComponents.td`
    width: 14vh;
`
export const CellOne = styledComponents.div`
    text-align: start;
    margin-top: 6px;
    margin-left: 18%;
    display: -webkit-box;
    justify-content: start;
    align-items: baseline;
`
export const TableHead = styledComponents.th`
    font-family: 'Inter';
    letter-spacing: 0.478398px;
    text-transform: capitalize;
    color: #000000;
    font-size: 13.5321px;
    font-weight: 400;
`
export const TableRow = styledComponents.tr`
    background: #F8F8FA;
    box-shadow: 0px 0px 3.65435px rgba(139, 139, 139, 0.25);
    border-radius: 4.56793px;
    height: 8vh;
`

export const FileADD = styledComponents(Col)`
   background: #F8F8FA;
   box-shadow: 0px 0px 3.65435px rgba(139, 139, 139, 0.25);
   border-radius: 4.56793px;
   flex: none;
   order: 6;
   flex-grow: 0;
   width: 95%;
   height: 8vh;
   padding: 8px;
    @media (max-width: ${size.tablet}) { 
        display: none;
        width: 100%;
        background: #FFF;
        box-shadow:none;
        padding: 2px;
    }
`
export const FileAddBTN = styledComponents(Col)`
    background: #1286F1;
    border-radius: 5px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    height: 6vh;
    color: #FFF;
    cursor: pointer;
    padding: 1%;
    @media (max-width: ${size.tablet}) { 
       height: 8vh;
        padding: 2.4%;
    }
`
export const GridContainer = styledComponents.div`
    padding: 25px  2% 5px 4%;
    align-items: baseline;
    width: 80%;
    @media (max-width: ${size.tablet}) { 
        width: 100%;
        padding: 0px 2% 0px 4%;
    }
`
export const CardLayout = styledComponents(Row)`
    background: #FFFFFF;
    box-shadow: 0px 0px 6.981px #CBE4FF;
    border-radius: 3.5952px;
    width: 11.5em;
    padding: 9px;
    margin: 3px;
    @media (max-width: ${size.tablet}) { 
    margin-top: 14px;
    }
`
export const CardContext = styledComponents(Col)`
    width: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainTitle = styledComponents(Title)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500 !important;
   font-size: 38.5372px  !important;
   line-height: 47px;
   letter-spacing: -1.28457px;
   color: #000000;
   @media (max-width: ${size.tablet}) { 
         display: none;
    } 
`
export const CardCountText = styledComponents(Text)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 13px;
   line-height: 18px;
   color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width: ${size.tablet}) { 
         font-size: 12px;
    } 
`
export const CardCountTitle = styledComponents(Title)`
    margin: 0 !important;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500 !important;
    font-size: 23px !important;
    color: #727272 !important;
`
export const CardCountTextTop = styledComponents(Paragraph)`
    margin: 0 !important;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500 !important;
    letter-spacing: -1.28457px;
    font-size: ${({ status }) => (status ? '18.4px' : '24.4699px')};
    @media (max-width: ${size.tablet}) { 
         display: none;
    } 
    } 
`
export const CardCountTextTopMobile = styledComponents(Paragraph)`
    margin: 0 !important;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500 !important;  
    letter-spacing: -1.28457px;
    font-size: ${({ status }) => (status ? '18.4px' : '24.4699px')};
    @media (max-width: ${size.tablet}) { 
         font-size: 15px;
         color: #404040  !important;
         margin-left: 8px !important;
         letter-spacing: 0.8px;
    }  
    } 
`

export const SearchText = styledComponents(Search)`
    width: 100%;
    background: #F7F7F7;
    border-radius: 4px;
   .ant-input-search-button {
      border: none;
      background: #F7F7F7;
      border-radius: 4px;
    }
    .ant-input-lg {
        font-weight: 400;
        font-family: 'Inter';
        color: #000;
    } 
    
`

export const RecordCard = styledComponents(Col)`
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0px 0px 8.25281px #CBE4FF;
    border-radius: 4.25019px;
    margin-top: 20px;
    margin-right: 12px;
    width: 28vh;
    padding: 8px;
    @media (max-width: ${size.tablet}) { 
        width: 44%;
    }
`
export const RecordCardText = styledComponents(Text)`
    font-weight: 500;
    font-size: 15.7327px;
    line-height: 21px;
    color: #515971;
    font-family: 'Inter';
`
export const TotalRecord = styledComponents(Title)`
    font-weight: 500 !important;
    font-size: 28.5546px !important;
    color: #515971 !important;
    margin-top: 16% !important;
    font-family: 'Inter';
`
export const TotalRecordPatient = styledComponents(Title)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500 !important;
    font-size: 21px !important;
    line-height: 27px;
    color: #000000;
    @media (max-width: ${size.tablet}) { 
        font-size: 15px !important;
    }
`
export const SelectAreaGlobal = styledComponents(Select)`
    height: 5vh;
    border-radius: 5px; 
    .ant-select-selector {  
       padding-left: 12px;
       padding-right: 12px;
       border: 1px solid #D4D4D4 !important;
       box-shadow: 0px 0px 3.67381px rgba(0, 0, 0, 0.25);
       border-radius: 4.59226px;
    }
    @media (max-width: ${size.tablet}) { 
         display: none;
    } 
`
export const SelectAreaGlobal2 = styledComponents(Select)`
    border-radius: 5px; 
    margin-top: 5px;
    .ant-select-selector {  
       padding-left: 12px;
       height: 6.2vh !important;

       padding-right: 12px;
        align-items: center;
       border: 1px solid #a3caf4 !important;
    //    box-shadow: 0px 0px 3.67381px rgba(0, 0, 0, 0.25);
       border-radius: 4.59226px;
       @media (max-width: ${size.tablet}) {
         height: 45px !important; 
        }
    }
    // @media (max-width: ${size.tablet}) { 
    //      display: none;
    // } 
`

export const SelectArea = styledComponents(Select)`
   
    width: 100%;
    align-items: center;
    border-radius: 5px; 
    .ant-select-arrow {  
       
        color: #000;  
    }  
    .ant-select-selector {      
       padding-left: 12px;
       padding-right: 12px;
       background: #F5F5F5 !important;
       border-radius: 3px;
    }
    @media (max-width: ${size.tablet}) {        
       margin-right: 30px;
       margin-bottom: 5px;
       width: 80%;   
        .ant-select-selector { 
             background: #FFFFFF !important;
             box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
             border-radius: 2px !important;
             font-weight: 400;
        }  
        
    }
`
export const RangeFlow = styledComponents(Col)`
    background: #F9F9F9;
    // height: 46vh;
    width: 71vh;
    border-left: 1px solid #000;
`
export const TotalRange = styledComponents(Col)`
    // margin-top: 15px;
    background: #064991;
    border-radius: 0px 8px 8px 0px;
    color: #fff;
    text-align: center;
    height: 12%;
    padding: 6px;
`
export const TotalRangeLabel = styledComponents(Text)`
  font-family: 'Inter';
  font-weight: 500;
  margin-top: 4vh !important;
  flex: none;
  order: 1;
  flex-grow: 0;
`
export const TotalRangeArea = styledComponents(Col)`
  margin-top: 1.6333rem;
  width:16vh;
  text-align: center;
   flex: none;
  order: 1;
  flex-grow: 0;
`
export const HospitalStatusPending = styledComponents.div`
    background: #FF5B5B;
    border-radius: 6.40528px;
    color: #fff;
    font-family: 'Inter';
    padding: 4px;
    margin-left: 32%;
    width: 18vh;
    font-weight: 400;
    font-size: 12px;
`
export const HospitalStatusConfirmed = styledComponents.div`
    background: #F8F8FA;
    border-radius: 6.40528px;
    color: #20B038;
    font-family: 'Inter';
    padding: 4px;
    margin-left: 32%;
    width: 18vh;
    font-weight: 400;
    font-size: 12px;
`
export const ButtonCreate = styledComponents(Button)`
    width: 35vh;
    height: 5.5vh;
    background: #1286F1;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    font-family: 'Inter';

    :hover {
      background-color: white;
    }
`
export const InputAnt = styledComponents(Input)`
    width: 65%;
    background: rgb(247, 247, 247);
    border-radius: 9px;
    height: 8vh;
    @media (max-width: ${size.tablet}) { 
         height: auto;
    }
`
export const ButtonEdit = styledComponents.div`
    background: #F2F1F6;
    border-radius: 4.26671px;
    padding: 5px;
    width: 18vh;
    :hover {
      background-color: white;
    }
`
export const ButtonEditDownload = styledComponents.div`
    background: #FFF;
    border-radius: 4.26671px;
    padding: 5px;
    width: 18vh;
    :hover {
      background-color: white;
    }
`
export const ActionWrapper = styledComponents.div`
    display: inline-flex;
    align-items: center;
    width: 25vh;
    justify-content: space-between;
`
export const EmptyTextMsg = styledComponents(Row)`
    margin: 10% 40%;
     @media (max-width: ${size.tablet}) { 
         display: none;
    } 
`

export const RangeGraph = styledComponents(Row)`
      align-items: baseline;
      margin-top: -12px;
      width: 100%;
     @media (max-width: ${size.tablet}) { 
         display: none;
    } 
`
