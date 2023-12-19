import React from 'react'
import {
  createFromIconfontCN,
  InstagramOutlined,
  GooglePlusOutlined,
  TwitterOutlined,
  WifiOutlined,
} from '@ant-design/icons'

import { Col, Row, Typography } from 'antd'
import { NavImage } from '../NavLayout/module.styled'
import {
  ColWrap,
  ContentSection,
  CopyRightContent,
  FooterHeadiing,
  FooterImg,
  FooterTitle,
  LayoutWrapper,
} from './styled'
import Spacer from 'react-spacer'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
})

function Footer({}) {
  return (
    <>
      <LayoutWrapper justify="flex-start">
        <ContentSection>
          <FooterImg src="/hosplan_footer.png" alt="hosplan_logo" width={190} />
          <FooterHeadiing
            className="footer_title"
            //   editable
            level={4}
          >
            At Hosplan, we are here to help you reach out to the best in
            healthcare. Providing an ideal platform which comprises of doctors,
            healthcare specialists and communication professionals. Thereby,
            aiding the search of patients towards receiving treatment in the
            prestigious hospitals in India.
          </FooterHeadiing>
          <IconFont
            type="icon-facebook"
            size="large"
            style={{
              color: '#fff',
              padding: '15px',
              fontSize: '20px',
              paddingLeft: 0,
            }}
          />
          <GooglePlusOutlined
            size="large"
            style={{
              color: '#fff',
              padding: '15px',
              fontSize: '20px',
            }}
          />
          <TwitterOutlined
            size="large"
            style={{
              color: '#fff',
              padding: '15px',
              fontSize: '20px',
            }}
          />
          <InstagramOutlined
            size="large"
            style={{
              color: '#fff',
              padding: '15px',
              fontSize: '20px',
            }}
          />
          <WifiOutlined
            size="large"
            style={{
              color: '#fff',
              padding: '15px',
              fontSize: '20px',
            }}
          />
        </ContentSection>
        <ColWrap>
          <FooterTitle
            className="footer_title"
            //   editable
            level={4}
          >
            Resources
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Blogs
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Privacy Policies
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Terms & Conditions
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Refund
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            FAQ&apos;s
          </FooterTitle>
        </ColWrap>
        <ColWrap>
          <FooterTitle
            className="footer_title"
            //   editable
            level={4}
            style={{}}
          >
            Content
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Hospitals
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Doctors
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Treatments
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Medical Visa
          </FooterTitle>
          <FooterTitle
            className="footer_title_list"
            //   editable
            level={5}
          >
            Prevention
          </FooterTitle>
        </ColWrap>
      </LayoutWrapper>
      <CopyRightContent>
        <Col>
          <FooterImg src="/copyright.png" alt="hosplan_logo" width={25} />
        </Col>
        <Spacer width="12px" />
        <Col>
          <Typography.Text style={{ color: '#FFF', fontFamily: 'Inter' }}>
            2019-23 Treatment Traveller
          </Typography.Text>
        </Col>
        <Spacer width="12px" />
        <Col>
          <FooterImg src="/visa.png" alt="hosplan_logo" width={25} />
        </Col>
        <Spacer width="12px" />
        <Col>
          <FooterImg src="/mastercard.png" alt="hosplan_logo" width={25} />
        </Col>
      </CopyRightContent>
    </>
  )
}

export default Footer
