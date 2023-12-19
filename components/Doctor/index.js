import React, { useMemo, useEffect } from 'react'
import Banner from './Banner'
import NavbarMenu from './NevbarMenu'
import AboutUs from './AboutUs'
import Review from './Review'
import BackLink from '../BackLink'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Maps from '../Maps'
import Spacer from 'react-spacer'
import { getLinks } from './getLinks'
import Testimonials from './Testimonials'
const _ = require('lodash')
import { useDispatch, useSelector } from 'react-redux'
import { loadComments } from '@/redux/actions/dashboardAction'

function Doctor({ user, doctorId, doctors = [], loading }) {
  // console.log('doctorsdoctors', doctors)
  let { Geo } = doctors.length && doctors[0]
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.dashboard?.comments)
  const links = useMemo(() => {
    return getLinks(doctors)
  }, [doctors])

  useEffect(() => {
    dispatch(loadComments())
  }, [])

  return (
    <div>
      <BackLink myLinks={links} type="mobile" />
      <Banner doctors={doctors} />
      <NavbarMenu />
      <BackLink myLinks={links} type="desktop">
        <Button
          icon={<PlusOutlined />}
          onClick={() => {
            window.scrollTo(1200, 1800)
          }}
        >
          Add your review
        </Button>
      </BackLink>
      <Spacer height={25} />
      <AboutUs doctors={doctors} loading={loading} />
      <Spacer height={30} />
      <Testimonials comments={comments} />
      <Spacer height={25} />
      <Review user={user} doctorId={doctorId} />
      {!_.isEmpty(Geo) && <Maps geoLocation={Geo} />}
    </div>
  )
}

export default Doctor
