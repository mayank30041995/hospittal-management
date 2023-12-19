import styledComponents from 'styled-components'
import { Col, Rate, Row, Input } from 'antd'
import AutocompleteSelect from '../AutoComplete'
import { Typography, Button } from 'antd'
const { Title, Paragraph, Text } = Typography
const { Search } = Input
const size = {
  mobile: '400px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
}

export const SearchText = styledComponents(Search)`
    margin: 8px 21px;
    width: 88%;
    background: #f2f2f2;
    border-radius: 4px;
   .ant-input-search-button {
      border: none;
      background: #f2f2f2;
      border-radius: 4px;
    }
    .ant-input-lg {
        font-weight: 500;
        font-family: 'Ralewayw';
        color: #000;
    } 
    
`

export const DrawerContainer = styledComponents(Row)`
    
`
export const ColContainer = styledComponents(Col)`
    height: 14em;
`
export const FilterItem = styledComponents(Row)`
    font-family: 'Ralewayw';
    font-size: 12px !important;
    margin: 8px 21px;
    width: 88% !important;
    box-shadow: 0.1px 0.5px 0.921053px rgba(0,0,0,0.25);
    height: 2.3rem;
    padding: 11px;
    font-weight: 500;
    font-size: 13px;
    border-radius: 8px;
`
