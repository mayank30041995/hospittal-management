import { Collapse } from 'antd'
import { AccordianParagraph, CollapseChange, NavWrapper } from './faq.styled'

const { Panel } = Collapse
const text1 = `
  The cost of your treatment is variable and will be determined based on your specific medical report. Once you provide us with your medical report, we will assist you in finding the best hospital and doctors, along with the associated cost.
`
const text2 = `
  We can provide Visa Invitation Letters from the chosen hospital for the patient and patient attendant, enabling you to apply for Medical Visas accordingly.`
const text3 = `
  Certainly! We will provide complimentary transportation services for your convenience. Our team will arrange for a dedicated transport to pick you up from your hotel on the day of admission. This service is offered to ensure a seamless experience throughout your treatment journey.`
const text4 = `
  During the initial investigation period, you will stay in a hotel. If the patient requires hospital admission for treatment, one attendant can accompany them. After treatment/surgery, the patient may need to stay in the hotel for the observation period prescribed by the doctor.`
const text5 = `Each patient is assigned a dedicated Patient Care Manager who will oversee all aspects of their visit, ensuring a seamless experience from arrival to a successful return and recovery
  `
const text6 = `For the treatment, the patient will require a Medical Visa. Additionally, we will need their past medical history documents and either a guarantee of payment or an insurance letter.
  `
const text7 = `The patient must travel on a Medical Visa and should carry all past medical history reports. It is important to gather information about the treating doctor and hospital, and we can provide ground knowledge to assist with that. The patient should also be accompanied by a related attendant.
  `
const text8 = `You can either contact us via phone or fill up the form and our dedicated team will assist you in booking an appointment according to your location.
  `

let styled_value = {
  background: '#D5EEF8',
}

const Accordion = () => (
  <NavWrapper justify="start">
    <CollapseChange
      defaultActiveKey={['1']}
      ghost
      expandIconPosition="end"
      size="medium"
    >
      <Panel header="What is the cost of my treatment?" key="1">
        <AccordianParagraph>{text1}</AccordianParagraph>
      </Panel>
      <Panel header="Do you provide assistance in visa?" key="2">
        <AccordianParagraph>{text2}</AccordianParagraph>
      </Panel>
      <Panel
        header="Do you offer transportation to and from the hospital where my surgery is being performed?"
        key="3"
      >
        <AccordianParagraph>{text3}</AccordianParagraph>
      </Panel>
      <Panel header="Where can I stay during my treatment?" key="4">
        <AccordianParagraph>{text4}</AccordianParagraph>
      </Panel>
      <Panel
        header="Who will be dealing with details of my case during my trip?"
        key="5"
      >
        <AccordianParagraph>{text5}</AccordianParagraph>
      </Panel>
      <Panel header="Which all travel documents do I need?" key="6">
        <AccordianParagraph>{text6}</AccordianParagraph>
      </Panel>
      <Panel
        header="What are the important instructions for international patients to travel in India?"
        key="7"
      >
        <AccordianParagraph>{text7}</AccordianParagraph>
      </Panel>
      <Panel header="How do I book an appointment?" key="8">
        <AccordianParagraph>{text8}</AccordianParagraph>
      </Panel>
    </CollapseChange>
  </NavWrapper>
)
export default Accordion
