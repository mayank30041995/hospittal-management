import React from 'react'
import { Col, Input } from 'antd'
import { Inputs } from '../home/Message/message.styled'
import { TextAreaBlock } from './input.styled'
const { TextArea } = Input

function InputGroup({ label, push = 2, width, marginTop, border, ...rest }) {
  return (
    <Col style={{ width, marginTop }} push={push}>
      <label
        htmlFor={label}
        style={{
          fontFamily: 'Inter',
          letterSpacing: '0.776145px',
          color: '#737373',
        }}
      >
        {label}
      </label>
      {rest.type !== 'textArea' ? (
        <Inputs
          {...rest}
          style={{
            fontFamily: 'Ralewayw',
            fontWeight: 600,
            fontSize: '13px',
            borderRadius: '5px',
          }}
        />
      ) : (
        <TextAreaBlock {...rest} border={border} />
      )}
    </Col>
  )
}

export default InputGroup
