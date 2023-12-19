import React from 'react'
import { Col, Rate, Row, Spin, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import {
  AvatarPic,
  ContainerCardThree,
  ContainerThree,
  SlideCard,
  SlideCardContent,
  SlideSection,
  Testimonial,
  TitleReview,
  TotalReviews,
} from '../home/Services/services.styled'
import Spacer from 'react-spacer'
import Slider from 'react-slick'
import useDeviceSize from '@/components/helper/useDeviceSize'

const { Text, Title } = Typography
function Testimonials({ comments = [] }) {
  //   const carousel = (doctors.length && doctors.slice(0, 100)) || []
  const [width, height] = useDeviceSize()

  var settings = {
    dots: false,
    infinite: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  }

  return (
    <ContainerThree>
      <Col span={12}>
        <SlideSection>
          <TitleReview level={4} style={{ display: 'flex', marginLeft: '9%' }}>
            Patient’s Testimonials
          </TitleReview>
          <Spacer height={12} />
          <Slider {...settings} className="slideContent">
            {comments.length > 0 ? (
              comments.map((comment, i) => {
                let { Name, Review } = comment
                return (
                  <SlideCard key={i}>
                    <ContainerCardThree>
                      <SlideCardContent>
                        <div>
                          <AvatarPic
                            src="patients.png"
                            icon={<UserOutlined />}
                          />
                        </div>
                        <Spacer width={24} />
                        <Col>
                          <Col style={{ textAlign: 'start' }}>
                            <Rate defaultValue={5} value={5} />
                            <Spacer width={20} height={8} />
                            <Text strong>{Name}</Text>

                            <p>{Review?.slice(0, 60)}</p>
                          </Col>
                        </Col>
                      </SlideCardContent>
                    </ContainerCardThree>
                    <Spacer height={15} />
                    <ContainerCardThree>
                      <SlideCardContent>
                        <div>
                          <AvatarPic
                            src="patients.png"
                            icon={<UserOutlined />}
                          />
                        </div>
                        <Spacer width={24} />
                        <Col>
                          <Col style={{ textAlign: 'start' }}>
                            <Rate defaultValue={5} value={5} />
                            <Spacer width={20} height={8} />
                            <Text strong>
                              {comments[comments.length - i]?.Name || 'test'}
                            </Text>

                            <p>{Review?.slice(0, 60)}</p>
                          </Col>
                        </Col>
                      </SlideCardContent>
                    </ContainerCardThree>
                  </SlideCard>
                )
              })
            ) : (
              <Spin />
            )}
          </Slider>
        </SlideSection>
      </Col>
    </ContainerThree>
  )
}

export default Testimonials
