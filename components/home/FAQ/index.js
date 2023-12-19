import React from 'react'
import { Col } from 'antd'
import {
  AccordionWrapper,
  FAQAccordion,
  FAQHeading,
  FAQTitle,
  QuestionHeading,
} from './faq.styled'

function FAQ({ children }) {
  return (
    <AccordionWrapper justify="center">
      <FAQTitle span={12}>
        <FAQHeading level={1}>
          Frequently asked <br />
          <QuestionHeading>questions</QuestionHeading>
        </FAQHeading>
      </FAQTitle>
      <FAQAccordion span={12}>{children}</FAQAccordion>
    </AccordionWrapper>
  )
}

export default FAQ
