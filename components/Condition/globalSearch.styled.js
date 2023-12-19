import { Col, Row, Select, Typography } from 'antd'
import { borderPicker, borderGradientSelector } from '../home/Banner/helper'
import styledComponents from 'styled-components'
import SelectGroup from '../Select/SelectGroup'
import AutocompleteSelect from '../AutoComplete'

const { Title } = Typography

const size = {
  small: '345px',
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const AutoCompleteSelect = styledComponents(AutocompleteSelect)`
  border: none !important;
  width: -webkit-fill-available;
  @media (max-width: ${size.tablet}) {
     width: 100% !important;
  }
`
export const GlobalSearchWrapper = styledComponents(Row)`
  border: solid 3px transparent;
  border-radius: 30px;
  background-image: linear-gradient(white, white), 
  linear-gradient(to right, rgba(5, 107, 215, 0.67), rgba(204, 103, 220, 0.59));
  background-origin: border-box;
  background-clip: content-box, border-box;
    border-radius: 70px;
    width: 100%;
    margin-left: 3% !important;
    margin-top: 12vh !important;
    text-align: center;
    align-items: center;
    @media (max-width: ${size.tablet}) {
      display: none;
    }
`
export const SearchColumn = styledComponents(Col)`
    padding-left: 2%;
    padding-top: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
    border-right: ${({ border }) =>
      border === 'true' ? borderPicker('treatment', 1) : '#000'}
`
export const SelectGroupSearch = styledComponents(SelectGroup)`
   margin-right: 6%;
   margin-left: -4px;
   height: 2em;
   .ant-select-selector {
     width: 21rem !important;
     color: #000;
     font-weight: 500;
     font-family: 'Inter';
     background: #FFF !important;
   }
   .ant-select-arrow {
     color: #000;
     font-weight: 500;
     font-family: 'Inter';
   }
   .ant-select-selection-placeholder {
    @media (max-width: ${size.tablet}) {
       color: #000;
       font-weight: 500 !important;
       font-size: 14px !important;
    }
   }
   @media (max-width: ${size.tablet}) {
      width: -webkit-fill-available;
      margin:0;
    }
`
