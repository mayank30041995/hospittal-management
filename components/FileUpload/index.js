import { Col, Row, Typography } from 'antd'
import React from 'react'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import Spacer from 'react-spacer'
function FileUpload({
  selectedFile,
  isFilePicked,
  setIsFilePicked,
  changeHandler,
}) {
  return (
    <div>
      <Row
        justify="center"
        align="center"
        style={{
          width: '25rem',
          alignItems: 'center',
          border: '0.5px solid #999999',
          borderRadius: '9px',
          padding: '5px',
          boxSizing: 'border-box',
        }}
      >
        <Col
          style={{
            display: 'flex',
            height: '9vh',
            textAlign: 'center',
            alignItems: 'center',
            background: '#FAFAFA',
            borderRadius: '9px',
            padding: '5px',
            width: '65%',
            justifyContent: 'space-around',
          }}
        >
          <Col
            style={{
              textAlign: 'center',
              alignItems: 'center',
              background: '#C8E8FF',
              borderRadius: '9px',
              padding: '12px',
              justifyContent: 'center',
            }}
          >
            {' '}
            {selectedFile ? selectedFile.type.split('/').pop() : 'FILE'}
          </Col>
          {!isFilePicked ? (
            <Typography.Text strong> ADD A FILE </Typography.Text>
          ) : (
            <Typography.Text strong>
              {selectedFile?.name ? selectedFile?.name : 'ADD A FILE'}
            </Typography.Text>
          )}
          <Spacer width={14} />
          <DeleteOutlined
            onClick={() => {
              setIsFilePicked(false)
            }}
          />
        </Col>
        <Spacer width={14} />
        <Col>
          <label class="custom-file-upload">
            <input type="file" name="file" onChange={changeHandler} />
            <PlusOutlined
              size="large"
              style={{ fontSize: '23px', margin: '2px' }}
            />
            <Typography.Paragraph strong style={{ fontSize: '12px' }}>
              ADD A FILE
            </Typography.Paragraph>
          </label>
        </Col>

        {/* {isFilePicked ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Sirftype: {selectedFile.type.split('/').pop()}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                      lastModifiedDate:{' '}
                      {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <p>Accepted file types .doc & .pdf only</p>
                )} */}
        {/* <div>
                  <button onClick={handleSubmission}>Submit</button>
                </div> */}
      </Row>
      <Typography.Paragraph>
        Accepted file types .doc & .pdf only
      </Typography.Paragraph>
    </div>
  )
}

export default FileUpload
