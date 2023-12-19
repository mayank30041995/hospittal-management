import { Typography } from 'antd'
const { Title, Paragraph } = Typography
import React from 'react'
import { LayoutWrapper, NavImage } from '../../NavLayout/module.styled'
import Description from './Description'
import {
  BannerParagraph,
  ServiceImg,
  TitleGrp,
  TitleHead,
  TitleMobile,
} from './services.styled'
import { HideDisplay } from '../../Dashboard/dashboardmobile.styled'

export default function Services() {
  return (
    <div>
      <HideDisplay>
        <TitleMobile level={5}>Our Services</TitleMobile>
      </HideDisplay>
      <LayoutWrapper justify="center">
        <TitleHead span={7} className="services">
          <ServiceImg
            src="opinions.png"
            alt="hosplan_logo"
            width={100}
            height={100}
          />
          <Description>
            <TitleGrp level={5}>FREE Opinions</TitleGrp>
            <BannerParagraph>
              Get 4 FREE opinions by sharing your medical reports with us.
            </BannerParagraph>
          </Description>
        </TitleHead>
        <TitleHead span={8} push={1} className="services">
          <ServiceImg
            src="teleconsultation.png"
            alt="hosplan_logo"
            width={100}
            height={100}
          />
          <Description>
            <TitleGrp level={5}>Teleconsultation with Doctors</TitleGrp>
            <BannerParagraph>
              Teleconsultation (PAID) with the Specialist Doctor of your choice
            </BannerParagraph>
          </Description>
        </TitleHead>
        <TitleHead span={8} push={1} className="services">
          <ServiceImg
            src="services.png"
            alt="hosplan_logo"
            width={100}
            height={100}
          />
          <Description>
            <TitleGrp level={5}>Priority in Hospital Services</TitleGrp>
            <BannerParagraph>
              We prioritize our patient&apos;s needs to deliver exceptional
              hospital services
            </BannerParagraph>
          </Description>
        </TitleHead>
        <TitleHead span={12} className="services">
          <ServiceImg
            src="support.png"
            alt="hosplan_logo"
            width={100}
            height={100}
          />
          <Description>
            <TitleGrp level={5}>All Local Support in India</TitleGrp>
            <BannerParagraph>
              Airport pickup to concierge hospital services, local SIM cards and
              hotel accommodations for seamless medical travel in India.
            </BannerParagraph>
          </Description>
        </TitleHead>
        <TitleHead span={8} className="services">
          <ServiceImg
            src="invitation.png"
            alt="hosplan_logo"
            width={100}
            height={100}
          />
          <Description>
            <TitleGrp level={5}>Visa Invitation</TitleGrp>
            <BannerParagraph>
              We provide visa invitation letters to assist our patients in
              obtaining necessary travel documents.
            </BannerParagraph>
          </Description>
        </TitleHead>
      </LayoutWrapper>
    </div>
  )
}
