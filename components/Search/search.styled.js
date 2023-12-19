import styledComponents from 'styled-components'
import { Col, Rate, Row } from 'antd'
import AutocompleteSelect from '../AutoComplete'
import { Typography, Input, Button } from 'antd'
import SelectGroup from '../Select/SelectGroup'
const { Title, Paragraph, Text } = Typography
const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  manual: '880px',
  desktop: '2560px',
}

export const ScrollBar = styledComponents.div`   
    overflow: auto;
    ::-webkit-scrollbar {
     height:  25px;
     width: 5px;
    }
    ::-webkit-scrollbar-track {
     box-shadow: inset 0 0 5px #fff;
     border-radius: 10px;
   }
   ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
   }

`
export const ButtonWrapperCard = styledComponents(Button)`
width: 36vh;
font-weight: 400;
font-size: 12.6267px !important;
font-family:"Inter";
background:${(props) => (props.colors === 'primary' ? '#09509F' : '')};
color:${(props) => (props.colors === 'primary' ? '#fff' : '#09509F')};
border:${(props) => (props.colors !== 'primary' ? '1px solid #09509F' : '')};
margin:${(props) => (props.colors !== 'primary' ? '10px' : '')};

@media (max-width: ${size.tablet}) {  
  width: 33vh;
}
@media (max-width: ${size.mobile}) {  
  width: 25vh;
}
`

export const SearchWrapper = styledComponents(Row)`
  margin-left: 4%;
  padding: 10px;
  width: 92%;
  background: #F9F9F9;
`

export const SearchContent = styledComponents(Col)`
  // width: ${(enable) => (enable === 'true' ? '65%' : '75%')};
  width: calc(78% - 64.5px);
  padding: 25px 10px;
  margin-top: -2em;
  @media (max-width: ${size.manual}) {    
    width: calc(100% - 64.5px);
    padding: 25px 10px;
    margin-top: -2em;
  }
 @media (max-width: ${size.tablet}) {    
    width: 100%;
    text-align: center;
    margin-top: 0;
    padding-top: 0;
  }
`
export const MessageTitle = styledComponents(Col)`
  padding: 0 25px 0 8px;
  @media (max-width: ${size.tablet}) {
    text-align: start;
    // display: none;
  }
`
export const ButtonWrapper = styledComponents(Button)`
border-radius: 12px;
width: 24vh;
font-family:"Inter";
background:${(props) => (props.colors === 'primary' ? '#09509F' : '')};
color:${(props) => (props.colors === 'primary' ? '#fff' : '#09509F')};
border:${(props) => (props.colors !== 'primary' ? '1px solid #09509F' : '')};
margin:${(props) => (props.colors !== 'primary' ? '10px' : '')};
 @media (max-width: ${size.tablet}) {
min-width: 30vh;
  }
 @media (max-width: ${size.mobile}) {
min-width: 100%;
  }
`

export const ButtonWrapperBlock = styledComponents(Col)`
  width: 50vh;
  @media (max-width: ${size.tablet}) {
    width: 60vh;
    }
  @media (max-width: ${size.mobile}) {
    width: 50vh;
    }
`

export const ParagraphTextDoc = styledComponents(Paragraph)`
   margin: 5px !important;
   font-family:"Inter";
   font-size: 15px; 
   width: 20em;
    @media (max-width: ${size.tablet}) {
        margin: 2px 4px 2px 4px !important;
        font-size: 13.5937px;
        font-weight: 400;
        // text-align: center;
        display: inline-block; 
    }
`

export const ParagraphText = styledComponents(Paragraph)`
   margin: 5px !important;
   font-family:"Inter";
   font-size: 12.1126px;
   letter-spacing: -0.025em;
    @media (max-width: ${size.tablet}) {
       font-family:"Ralewayw";
        margin: 2px 4px 2px 4px !important;
        font-size: 12.84px;
        font-weight: 600 !important;
        // text-align: center;
        display: inline-block; 
    }
`
export const ParagraphTextDesktop = styledComponents(Paragraph)`
   margin-left: 6px !important;
   font-family:"Inter";
   font-size: 15px; 
    @media (max-width: ${size.tablet}) {
       display: none; 
       font-size: 12px; 
    }
`
export const ParagraphTextMobile = styledComponents(Paragraph)`
   display: none;
   margin: 3px !important;
   font-family:"Inter";
   font-size: 15px; 
    @media (max-width: ${size.tablet}) {
      display: contents;
        margin: 2px 8px 2px 8px !important;
        font-size: 13px;
        font-weight: 400;
        // text-align: center;
        display: inline-block; 
    }
`
export const FilterText = styledComponents(Text)`
    font-size: 13px;
    font-weight: 500;
    font-family:"Inter";
`
export const RateColumn = styledComponents(Col)`
   text-align: start;
   margin: 6px 0 12px 15%;
`
export const SearchStatusText = styledComponents(Text)`
   font-family: 'Ralewayw'; 
   font-size: 12.5392px;
   @media (max-width: ${size.tablet}) {
    display: none;
   }
`
export const RateRow = styledComponents(Row)`
    min-width: 13em;
    align-items: baseline;
    justify-content: space-between;
`
export const RateIt = styledComponents(Rate)`
   display: flex;
   font-size: 16px;
   margin-bottom: 2px;
   .ant-rate-star-full{
      width: 3vh;
   }
`
export const SelectGroupSort = styledComponents(SelectGroup)`
   .ant-select-selector{
     color: #000;
     font-weight: 500;
     font-family: 'Inter';
     background: #EDF5FF !important;
   }
`
export const SelectGroupOther = styledComponents(SelectGroup)`
    background: #FFFFFF !important;
    border: 0.5px solid #06509F;
    border-radius: 6px;
    text-align: start;
    width: 14em;
   .ant-select-selector {
   
     color: #000;
     font-weight: 500;
     font-family: 'Inter'; 
   }
`
export const SelectItems = styledComponents(SelectGroup)`
   .ant-select-selection-placeholder {
      color: #000;
      font-family: 'Inter';
      font-weight: 400;
    }
    .anticon svg {
      color: #000 !important;
    }
   }
`
export const TitleText = styledComponents(Title)`
  cursor: pointer;
  margin: 5px;
  font-family:"Inter";
  font-size: 16.2894px !important;
  font-weight: 600 !important;
  // height: 38%;
  @media (max-width: ${size.tablet}) {    
  font-size: 16.5px !important;
  text-align: start;
 
   @media (max-width: ${size.tablet}) {
        font-family:"Ralewayw";
         color: ${({ banner }) =>
           banner === 'true' ? '#000000' : '#09509f'} !important;
        text-align:  ${({ banner }) =>
          banner === 'true' ? 'start' : 'center'};
        margin-top: 15px;
        font-size: 14.24px !important;
    }
  }
    &:hover {
       color: #09509F;
       text-decoration: underline;
  }
`

export const LoaderContainer = styledComponents.div`
    // position: fixed;
    background: transparent;
    top: 55%;
    bottom: 50%;
    left: 48%;
    width: 6%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
  @media (max-width: ${size.tablet}) {
    top: 35%;
    left: 43%;
    width: 13%;
    height: 8%;
    }
`

export const Span = styledComponents.span`
 &.title_msg {
  font-size: 14px;
  font-weight: 500;
  flex: none;
  font-family: 'Inter';
  color: #06509F;
  @media (max-width: ${size.tablet}) {
    font-size: 12px;
  }
 }
`
export const DocImg = styledComponents.img`
    object-fit: cover;
    border-radius: 12px;
    margin-left: 5px;
    width: 9rem;
    height: 10rem;
    @media (max-width: ${size.tablet}) {
      margin-left: 15px;
       width: 20vh;
       height: 21vh;
    }
`
export const CardContent = styledComponents(Row)`
 width: 100%;
 align-items: flex-start;
 justify-content:start;
 @media (max-width: ${size.tablet}) { 
   display: grid;
   justify-content:center;
 }
`
export const SliderImg = styledComponents.img`
  cursor: pointer;
  width: calc(8.5em - 15px);
  height: 10em;
  object-fit: cover;
  border-radius: 12px;
 @media (max-width: ${size.tablet}) {
    width:${({ size }) => (size ? '19vh' : '19vh')};
    // width: 100%;
    height: 20vh;
  }
`
export const BannerImg = styledComponents.img`
  cursor: pointer;
  width: 28vh;
  height: 20vh;
  object-fit: cover;
  border-radius: 12px;
 @media (max-width: ${size.tablet}) {
    max-width:${({ size }) => (size ? '8rem' : '8rem')} !important;
    // width: 100%;
    max-height: 7rem;
  }
`
export const SpanStyle = styledComponents.span`
  font-size: 13.1126px;
  font-weight:${({ bold }) => (bold ? 600 : 400)}; 
  font-family:"Inter";
    @media (max-width: ${size.tablet}) {
      font-family:"Ralewayw";
      font-weight: 500;
       color: #09509f;
    }
`

export const CardWrapper = styledComponents(Row)`
 background: #F7FAFF;
 border-radius: 15px;
 justify-content: space-between;
  padding: 15px;
  @media (max-width: ${size.tablet}) {
    padding: 0px;
    border-radius: 8px;
  }
`
export const AutocompleteWrap = styledComponents(AutocompleteSelect)`
    width: 20vh !important;
    border: none !important;
   .ant-select-selector {
      background: transparent !important;
   }
   .ant-select-selection-placeholder {
     color: #000;
     font-size: 14px;
   }
   .ant-select-arrow {
      color: #000;
   }
    
`
export const FilterMobileRow = styledComponents(Row)`
    width: max-content;
    margin: 5px 0 5px 0px;
    
    display: none;
    align-items: center;
    @media (max-width: ${size.tablet}) {
      display: flex;
    }
`
export const FilterMobileSelects = styledComponents(Col)`
    border-radius: 18.4211px;
    max-width: 62vh;
    background: #F9F9F9;
    cursor: pointer;
    margin: 8px 8px 0;
    padding: 8px 16px 8px 16px;
    text-align: start !important;
    text-align: center;
    gap: 6px;
    box-shadow: 0.1px 0.5px 0.921053px rgba(0, 0, 0, 0.25);
`
export const BannerRowTitles = styledComponents(Row)`
   align-items: center;
   @media (max-width: ${size.tablet}) {
    margin-top: 3%;
    padding-left: 2%;
    padding-right: 2%;
    margin-bottom: 2%;
    align-items: center;
    justify-content: space-between;
    flex-flow: row-reverse;
    width: 100%;
  }
`
export const SlideWrapper = styledComponents(Row)`
   background: #F7FAFF;
   border-radius: 18px;
   box-shadow: 0px 0px 3.02815px rgba(0, 0, 0, 0.25);
   padding: ${({ search }) => (search === 'true' ? '1% 2%' : '2%')} !important;
   margin: ${({ search }) =>
     search === 'true' ? '2px 5px 5px 5px' : '2px 5px 0 5px'};
   height:  ${({ listing }) => (listing !== 'true' ? '98%' : 'auto')};
  justify-content: space-between;
  width:${({ stop }) => (stop === 'true' ? '50%' : 'auto')};
  @media (max-width: ${size.tablet}) {  
     justify-content: center;  
     border: none !important;
     margin-top:10px;
     box-shadow: none;
     background: #FFFFFF;
     padding: 0;
     width: auto !important;
  }
`
export const DescriptionBlock = styledComponents(Col)`
  max-width: 55vh;
  text-align: start;
  @media (max-width: ${size.tablet}) {  
     max-width: 70vh;
    //  display: contents;
  }
`
// Panel
export const PanelWrapper = styledComponents(Col)`
   background: #F7FAFF;
   box-shadow: 3px 2px 4px #DDECFE;
   padding: 15px; 
   height: 60em;
   @media (max-width: ${size.tablet}) {  
     display: none;
    }
    @media (max-width: 850px) {    
      display: none;
    }
`
export const PanelFilterWrapper = styledComponents(Col)`
    background: #F7FAFF;
    box-shadow: 3px 2px 4px #DDECFE;
    padding: 15px; 
    padding-top: 5px;
    max-width: 16rem;
    // width: calc(30% - 40.5px);
    height: 60em;
    @media (max-width: 880px) {    
      display: none;
    }
`
export const PanelCard = styledComponents(Col)`
  &:hover {
      cursor: pointer;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    },
`

export const SlideText = styledComponents(Col)`
   width: 45vh;
   margin-top: -10px;
   @media (max-width: ${size.tablet}) {    
    width: 100%;
 }
`
export const SlideTextBlockDoctor = styledComponents(Col)`
  //  width: 60vh;
   margin-top: -10px;
   @media (max-width: ${size.tablet}) {    
    width: 100%;
 }
`
export const SlideCarouselText = styledComponents(Col)`
    width: 60%; 
    text-align: left; 
    margin-left: 5px; 
   @media (max-width: ${size.mobile}) {   
    height: 75% !important;
    display: contents;
    text-align: center;
    }
   @media (max-width: ${size.tablet}) {    
    width: 56%;
    height: 48%;
    display: contents;
    text-align: center;
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
export const RateStatus = styledComponents.span`
    margin-left: 3px;
    color: rgba(0, 0, 0, 0.88);
    font-size: ${({ banner }) => (banner === 'true' ? '14px' : '12.1126px')};
    font-family: Inter;
    font-weight: 400;
      @media (max-width: ${size.tablet}) { 
         font-size: 13px !important;
         margin-left: 7px !important;
         font-weight: ${({ banner }) =>
           banner === 'true' ? '400' : '500'} !important;
      }
`
export const ChipStatus = styledComponents.div`
    padding: 0 15px 0 15px;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    background: rgb(248, 248, 248);
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    font-weight:500;
    flex: none;
    @media (max-width: ${size.tablet}) { 
      margin-top: 12px;
      width: fit-content;
      height: 20px;
    }
`
export const Status = styledComponents.div`
    display: flex;
    align-items: center;
    @media (max-width: ${size.tablet}) { 
      display: contents;
      font-size: 12px;
      // display: none;
    }
`
export const LinkDecoration = styledComponents.div`
     margin-top: 15px;
     padding: 3%;
     width: 60%;
    background: #FFF;
    border-radius: 9px;
    border: 0.5px solid #06509F;
    text-decoration: underline;
    text-decoration-color: #06509F;
`
