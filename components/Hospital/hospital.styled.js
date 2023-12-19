import styledComponents from 'styled-components'
import {
  Col,
  Layout,
  Row,
  Typography,
  Rate,
  Space,
  Input,
  Checkbox,
  Empty,
} from 'antd'
import AutocompleteSelect from '../AutoComplete'
const size = {
  mobile: '520px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}
const { Title, Text, Link, Paragraph } = Typography
const { Search } = Input
export const SearchSlides = styledComponents(Input)`
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #8B8B8B;
    width: 88%;
     box-shadow: none;
    margin-left: 7%;
    font-family: 'Inter';
   
   
  .ant-input-status-error.ant-input-disabled,
  .ant-input-status-error.ant-input-disabled:hover {
    border-color: #ff4d4f;
   }
    @media (max-width: ${size.tablet}) {
       width: 92%;  
       margin-left: 4%;   
       border: none;
        height: 2.5rem; 
        border-radius: 8px;
       background: #F7F7F7;
        .ant-input-lg {
           background: #F7F7F7;
        }
  }
`
export const TextAreaWrapper = styledComponents(Row)`
display: grid;
 padding: 8px 4% 8px 4%;
   @media (max-width: ${size.tablet}) {    
      padding: 30px 18px 0 18px;
     }
    }
`
export const WrittenTextColumn = styledComponents(Col)`
   padding: 1%; 
   font-family: 'Ralewayw';
`

export const LayoutWrapper = styledComponents(Row)`
  margin-top: 10vh;
  position: relative;
   @media (max-width: ${size.tablet}) {
    margin-top: 0;
   }
`
export const TitleAreaText = styledComponents(Title)`
   font-family: "ralewayw";
`
export const ParagraphAreaText = styledComponents(Paragraph)`
   line-height: 40px;
   font-size: 18px;
   font-family:"ralewayw";
   @media (max-width: ${size.tablet}) {    
      font-size: 16px;
      line-height: 30px;
   }
`
export const CardRow = styledComponents(Row)`
width: 28em;
 @media (max-width: ${size.tablet}) {   
    display: block;
    text-align: center;
  }
`

export const NavImage = styledComponents.img`
 margin: 4px;
 width:34vh;
 @media (max-width: ${size.tablet}) { 
  width: 20vh;
  }
}
`

export const Banner = styledComponents(Row)`
    position: absolute;
    color: #fff;
    // padding: 5%;
    padding-top: 5%;
    align-items: center;
    justify-content: space-around;
    // width: 100%;
        width: 90%;
    margin-left: 5%;
    @media (max-width: ${size.mobile}) { 
      display: none; 
      text-align: center;  
    }
`
export const ServiceTitle = styledComponents(Title)`
    font-weight: 600 !important;
    font-family: 'Ralewayw';
    color: #090853 !important;
    font-size: 35px !important;
    @media (max-width: ${size.tablet}) { 
      font-family:"Ralewayw";
      margin-top: 10vh;
      margin-bottom: 5vh !important;
      font-size: 20px !important;
    }
`
export const TitleBlock = styledComponents(Title)`
    width: 30%;
    flex: none;
    flex-grow: 0;
    font-family:"Ralewayw";
     padding: 8px 4% 0 4%;
    @media (max-width: ${size.tablet}) {      
      display: none;
    }
`
export const TitleArea = styledComponents(Title)`
 font-family:"Ralewayw";
 &.hospital_title  {
     text-shadow: 2px 2px #000;
     letter-spacing: 0.8px;
     font-weight: 500;
     font-size: 27px;
     color: #fff;
     text-align: start;
 }
  @media (max-width: ${size.mobile}) {  
    &.hospital_title  {       
        font-size: 17px;
    }
  }
`
export const TextArea = styledComponents(Text)`
 font-family:"Inter";
 &.head_text_title  {
     text-shadow: 1px 2px #000;
     font-family:"Ralewayw";
     font-size: 18px;
     color: #fff;
     font-weight: 400;
     letter-spacing: 1px;
 }
 &.head_text  {
     text-shadow: 1px 1px #000;
     font-size: 16px;
     color: #fff;
     font-weight: 400;
     letter-spacing: 1px;
 }
@media (max-width: ${size.mobile}) { 
  &.head_text  { 
      font-size: 11.5px;
      font-weight: 400,
    }
  }
 &.head_text_rate  {
     font-size: 18px;
     color: #fff;
      font-weight: 400;
     letter-spacing: 1px;
 }
`
export const FlexRow = styledComponents.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${size.tablet}) {  
        display: none;
    }
`
export const BannerText = styledComponents(Col)`
    width: 48%;
    @media (max-width: ${size.tablet}) {  
          width: 100%;
    }
`

export const FilterElement = styledComponents.div`
    padding: 5px 26px;
    display: flex;
    justify-content: space-between;
`
export const ScrollWrap = styledComponents.div`
  @media (max-width: ${size.tablet}) { 
    overflow: auto; 
    ::-webkit-scrollbar {
    display: none; 
   }
  }
`
export const SearchInput = styledComponents.div`
  display: none;
  @media (max-width: ${size.tablet}) { 
    display: none;
    width:100%;
    .ant-input-affix-wrapper-lg {
        background: #F7F7F7;
        border-radius: 12px;
    }
    .ant-input-lg {
        background: #F7F7F7;
        border-radius: 12px;
    }
  }
`

export const SearchText = styledComponents(Search)`
    width: 100%;
    background: #EEEEEE;
    border-radius: 4px;
   .ant-input-search-button {
      border: none;
      background: #EEEEEE;
      border-radius: 4px;
    }
    .ant-input-lg {
        font-weight: 400;
        font-family: 'Inter';
        color: #000;
    } 
    
`

export const CheckboxGroup = styledComponents(Checkbox.Group)`
   .css-dev-only-do-not-override-10ed4xt {
      // margin-right: 18px;
   }

`
export const TextSearch = styledComponents(Text)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 38px;
   color: #575757;
`
export const NavArea = styledComponents(Row)`
    background: #09509F;
    height: 9vh;
  
    text-align: center;
    align-items: center;
     @media (max-width: ${size.mobile}) { 
         width: 100vh;  
         background: rgb(9, 80, 159);
         height: 7vh;
         text-align: center;
         padding: 0vh;
         align-items: center;
         justify-content: space-between;
    }
`
export const NavLink = styledComponents(Link)`
    color: #fff !important;
    font-family:"Ralewayw";
    font-size: 18px;
    font-weight: 500;
    @media (max-width: ${size.tablet}) {
        font-size: 14px;
        font-weight: 500;
        width: 6vh;
    }
`
export const AutocompleteSelectArea = styledComponents(AutocompleteSelect)`
  font-family:"Inter";
  .ant-select-selection-placeholder {
     align-items: center;
    color: #000 !important;
    font-family: 'Inter';
  }
  .ant-select-selection-search{
    margin-top: 3px;
    margin-left: 10px;
  }
  .ant-select-selector {
    padding: 22px !important;
    align-items: center;
    border-radius: 23px !important; 
    @media (max-width: ${size.mobile}) {
     padding: 20px !important;
    } 
   }
     width: 93% !important;
     margin-top: 20px;
     border-radius: 36px;
    @media (max-width: ${size.mobile}) {
      width: 21rem !important;
    }
`
export const AutocompleteSelectFilter = styledComponents(AutocompleteSelect)`
  font-family:"Inter";
  .ant-select-selection-placeholder {
     align-items: center;
    color: #000 !important;
    font-family: 'Inter';
  }
  .ant-select-selection-search{
    margin-top: 3px;
    margin-left: 10px;
  }
  .ant-select-selector {
    padding: 3.5vh !important;
    align-items: center;
    background: #EEEEEE !important; 
    border-radius: 5px !important; 
    @media (max-width: ${size.mobile}) {
     padding: 2.5vh !important;
    } 
   }
     width: 100% !important;
     margin-top: 20px;
     border-radius: 5px;
     
    @media (max-width: ${size.mobile}) {
      width: 100% !important;
    }
`

export const SliderImg = styledComponents.img`
  width: 17vh;
  height: 20vh;
  object-fit: cover;
  border-radius: 12px;
 @media (max-width: ${size.tablet}) {    
    width: 20vh;
    height: 21vh;
  }
`
export const SlideCarouselText = styledComponents(Col)`
   width: 55%;  
   height: 50%;
   text-align: left;
   margin-top: -25px;
   @media (max-width: ${size.mobile}) {   
    height: 75% !important;
    display: contents;
    }
   @media (max-width: ${size.tablet}) {    
    width: 85%;
    height: 55%;
    text-align: center;
 }
`

export const BannerImg = styledComponents.img`
  // filter: invert(100%);
  text-align: center;
  color: #fff;
  height: 55vh;
  width: 100%;
  object-fit: cover;
   @media (max-width: 1030px) {
    height: 80vh;
    }
  @media (max-width: ${size.tablet}) {
    background: rgb(9, 80, 159);
    height: 70vh;
    text-align: center;
    padding: 0vh;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: ${size.mobile}) {
    background: rgb(9, 80, 159);
    height: 40vh;
    text-align: center;
    padding: 0vh;
    align-items: center;
    justify-content: space-between;
  }
`
export const SlideWrapper = styledComponents(Row)`
   background: #F7FAFF;
   border-radius: 18px;
   box-shadow: 0px 0px 3.02815px rgba(0, 0, 0, 0.25);
   padding: 8px;
   margin: 5px;
   width: 23rem;
   @media (max-width: ${size.tablet}) {
     width: 98%;
     @media (max-width: ${size.tablet}) {    
     box-shadow: none;
     background: #FFFFFF;
   }
   }
`
export const ServiceRow = styledComponents(Row)`
   margin-top: 90px;
   text-align: center;
   @media (max-width: ${size.tablet}) {
     margin-top: 20px;
   }
`
export const DataContainer = styledComponents(Row)`
  padding: 5px;
  border: 1px solid #E7E7E7;
  box-shadow: inset 0px 0px 8px #9DCDF9;
  width: 95%;
  margin-left: 3%;
  height: 100vh;
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

   @media (max-width: ${size.mobile}) {
     ::-webkit-scrollbar {
     display: none;
    }
     width: 98%;
     margin-left: 1%;
   }
`

export const TitleGroup = styledComponents(Title)`
  margin-left: 5px !important;
  margin-top: ${({ slide }) => (slide === 'true' ? '25px' : '0')};
  font-family: "Inter";
  font-size: 16.1689px !important;
  font-weight: 600 !important;
   &:hover {
      cursor: pointer;
      color: #09509F;
      text-decoration: underline;
  }
 @media (max-width: ${size.tablet}) {
   margin: 20px;
   font-family:'Ralewayw';
   text-align: center;
   color: #09509f !important;
  }
`
export const ParagraphArea = styledComponents(Paragraph)`
   margin: 1px !important;
   font-family:"Inter";
   font-size: 12.1126px !important;
    @media (max-width: ${size.tablet}) {
        margin: 2px 4px 2px 4px !important;
        font-size: 13.5937px;
        font-weight: 500 !important;
        text-align: center;
        display: inline-block; 
    }
`

export const FilterWrapperRow = styledComponents(Row)`
      padding: 0 6% 0  4%;
`
export const FilterArea = styledComponents(Col)`
     background: linear-gradient(269.83deg, rgba(225, 225, 225, 0.36) -4.96%, rgba(18, 134, 241, 0.1) 94.75%);
     padding-top: 5vh;
     border-radius: 12px;
     text-align: center;
     max-height: 20vh;
    @media (max-width: ${size.tablet}) {
       padding: 0;
       display: none;
    }
`
export const FilterAreaColumn = styledComponents(Col)`
      background:
      linear-gradient(269.83deg, rgba(225, 225, 225, 0.36) -4.96%, rgba(18, 134, 241, 0.1) 94.75%);
      padding: 1.5vh;
      border-radius: 12px;
      max-height: 20vh;
      @media (max-width: ${size.tablet}) {
       display: none;
      }
`
export const FilterCol = styledComponents(Col)`
      text-align: center;
      align-items: center;
`
export const TextBannerCol = styledComponents(Col)`
    padding: 1.5%;
    flex: none;
    order: 0;
    flex-grow: 1;
    width: 30vh;
}   
`
export const RowFilter = styledComponents(Row)`
      text-align: center;
      justify-content: space-evenly;
`
export const SwitchToggle = styledComponents(Row)`
       padding: 1%;
       width: 90%;
       background: #F9F9F9;
       margin-left: 4%;
       display: grid;
       // justifyContent: end;
       align-items: end;
`
export const FilterPanelWrapper = styledComponents(Col)`
        width: 55vh;
        background: #fff;
        border-radius: 8px;
        text-align: center;
        padding-bottom: 2%;
        cursor: pointer;
        @media (max-width: ${size.tablet}) {
         width: 100%;
          margin-top: 2vh;
        }
`

// Mobile Responsive Styled

export const MobileBannerRow = styledComponents(Row)`
      display: none;
      @media (max-width: ${size.mobile}) {
      display: flex;
      position: absolute;
      padding: 0 3% 0 3%;
      width: 100%;
      }
`
export const InfoMobileRow = styledComponents(Row)`
    padding: 4% 0 0 0;
    // width: 60vh;
`
export const DepartmentBtn = styledComponents(Col)`
    color: #fff;
    font-family: 'Inter';
    background: #06509F;
    width: 90%;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 12px;
    cursor: pointer;
    
`
export const EmptyItems = styledComponents(Empty)`
     margin: 5% 43%; 
     @media (max-width: ${size.tablet}) {
          margin: 25%; 
      }   
`
