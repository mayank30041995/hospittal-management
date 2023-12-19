import React from 'react'
import { Avatar, Button, Col, Rate, Row, Typography } from 'antd'
import {
  LayoutWrapper,
  NavImage,
  TitleBarMessage,
} from '../../NavLayout/module.styled'
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons'
import {
  AvatarPic,
  ContainerCard,
  ContainerMain,
  ReviewsButton,
  ReviewsMessage,
  ReviewsParagraph,
  ReviewsSection,
  SlideCard,
  SlideCardContent,
  SlideSection,
  Testimonial,
  TitleReview,
  TotalReviews,
} from './services.styled'
import Spacer from 'react-spacer'
import Slider from 'react-slick'
import useDeviceSize from '@/components/helper/useDeviceSize'
const { Text, Title } = Typography
function Reviews({ comments = [] }) {
  //   const carousel = (doctors.length && doctors.slice(0, 100)) || []
  const [width, height] = useDeviceSize()

  var settings = {
    dots: false,
    infinite: false,

    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <ContainerMain>
      <Testimonial span={11}>
        <ReviewsSection>
          <NavImage src="rate.png" alt="hosplan_logo" width={200} height={40} />
          <Spacer width={18} />
          <TotalReviews>({comments.length || 0}+ reviews)</TotalReviews>
        </ReviewsSection>
        <Spacer height={16} />
        <TitleReview level={3}>People love us</TitleReview>
        <ReviewsMessage>(and we love them back)</ReviewsMessage>
        <ReviewsParagraph style={{ width: '70vh' }}>
          &quot;Your health is our top priority. We&apos;re committed to
          providing personalized attention and the highest quality medical care
          for a seamless medical travel experience
        </ReviewsParagraph>
        <ReviewsButton size="large">
          See more reviews <ArrowRightOutlined />
        </ReviewsButton>
      </Testimonial>
      <Col span={13}>
        <SlideSection>
          <Slider {...settings} className="slideContent">
            {comments.length > 0 &&
              comments.map((comment, i) => {
                let { Name, Review } = comment
                return (
                  <SlideCard key={i}>
                    <ContainerCard>
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
                    </ContainerCard>
                    <Spacer height={15} />
                    <ContainerCard>
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
                    </ContainerCard>
                  </SlideCard>
                )
              })}
          </Slider>
        </SlideSection>
      </Col>
    </ContainerMain>
  )
}

export default Reviews
