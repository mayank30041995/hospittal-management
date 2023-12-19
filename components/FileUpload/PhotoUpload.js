import { loadingApp, uploadProfile } from '@/redux/actions/appAction'
import appConfig from '@/utils/appConfig'
import {
  PlusOutlined,
  LoadingOutlined,
  CameraOutlined,
} from '@ant-design/icons'
import { Avatar, Upload, message } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
const getBase64 = (img, callback) => {
  const reader = new FileReader()

  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1048 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
const PhotoUpload = ({ image }) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const dispatch = useDispatch()
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, async (url) => {
        const formData = new FormData()
        let blob = await fetch(url).then((r) => r.blob())
        formData.append('files', blob, info.file.type)
        dispatch(loadingApp(true))

        axios
          .post(`${appConfig.socketURL}/upload`, formData)
          .then((uploads) => {
            if (uploads.data.length) {
              const report_id = uploads.data[0]?._id
              const profile_upload = uploads.data[0]
              dispatch(uploadProfile(profile_upload))
              dispatch(loadingApp(false))
            }
          })
          .catch((err) => {
            console.log(err)
            dispatch(loadingApp(false))
          })

        setLoading(false)
        setImageUrl(url)
      })
      // setLoading(false)
    }
  }

  useEffect(() => {
    if (!_.isEmpty(image)) {
      setImageUrl(image.url)
    }
  }, [image])
  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <CameraOutlined size={{ fontSize: '22px' }} />
      )}
    </div>
  )
  return (
    <>
      <Upload
        name="avatar"
        listType={'picture-circle'}
        className="avatar-uploader"
        showUploadList={false}
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Avatar size={100} src={imageUrl} alt="avatar" />
        ) : (
          uploadButton
        )}
        <div
          style={{
            marginTop: '100%',
            marginRight: '-12px',
          }}
        >
          <PlusOutlined />
        </div>
      </Upload>
    </>
  )
}
export default PhotoUpload
