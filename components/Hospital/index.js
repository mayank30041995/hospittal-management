import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react'
import { Button, Row } from 'antd'
import NavbarMenu from './NavbarMenu'
import Services from './Services'
import { LayoutWrapper, ScrollWrap } from './hospital.styled'
import BackLink from '../BackLink'
import { PlusOutlined } from '@ant-design/icons'
import FilterNav from './Filters/FilterNav'
import Doctors from './Doctors'
import Footer from '../Footer'
import Maps from '../Maps'
import Departments from './Departments'
import BannerItems from './BannerItems'
import FilterPanelMobile from './Filters/FilterPanelMobile'
import Spacer from 'react-spacer'
import Review from './Review'
import { getLinks } from './getLinks'
import { useDispatch } from 'react-redux'
import { loadHospitalDoctors, refreshApp } from '@/redux/actions/searchAction'
const _ = require('lodash')

function Hospital({
  loading,
  hospitalDetails,
  user,
  doctorResult,
  loader,
  count,
}) {
  const { id, Name, doctors, Geo, specialities } = hospitalDetails
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [saved, setSaved] = useState('')
  const [filterPayload, setFilterPayload] = useState({})
  const [pageType, setPageType] = useState('doctor')
  const [pageLimit, setPageLimit] = useState(10)
  const [scrollHeightTop, setScrollHeightTop] = useState(0)
  const dispatch = useDispatch()
  const listInnerRef = useRef()
  const links = useMemo(() => {
    return getLinks(Name)
  }, [Name])

  let page = Math.floor(count / 10) + 1
  let limit_search = pageLimit / 10 + 1

  useEffect(() => {
    // console.log('filterPayload', filterPayload, pageType)

    if (!_.isEmpty(filterPayload)) {
      let { experience, rating, price, condition, value } = filterPayload
      let filters = { experience, rating, price }
      let payload = {
        id: filterPayload.id,
        value: value,
        condition: condition || 'speciality',
      }

      if (payload.id && payload.value !== '') {
        setSaved(payload)

        dispatch(loadHospitalDoctors(id, payload, filters, pageLimit))
        if (pageType === 'banner') {
          window.scrollTo(250, 650)
        }
      } else if (payload.value?.length < 1) {
        setSaved('')
        dispatch(loadHospitalDoctors(id, {}, filters, pageLimit))
      } else if (filterPayload) {
        setSaved(payload)
        dispatch(loadHospitalDoctors(id, {}, filters, pageLimit))
      }
    } else if (pageLimit > 10) {
      dispatch(loadHospitalDoctors(id, {}, {}, pageLimit))
    }
  }, [filterPayload, pageLimit])

  const onSubmitFilter = (e, experience, rating, price) => {
    let filters = { experience, rating, price }
    // console.log('experNew', filters, e)
    setFilterPayload((prev) => ({ ...prev, ...filters }))
  }

  const handleSearchResults = _.debounce(function (e, type) {
    let payload = {
      id: e?.key,
      value: e?.value,
      condition: e?.title || 'speciality',
    }

    setPageType(type)
    setFilterPayload((prev) => ({ ...prev, ...payload }))
  }, 1000)

  const globalFilterdDoctors = (event, status = 'filtered') => {
    if (status === 'filtered') {
      const filteredSpeciality = doctors.filter((speciality) => {
        return (
          speciality.Department.toLowerCase().includes(
            event.value.toLowerCase()
          ) ||
          speciality.Designation.toLowerCase().includes(
            event.value.toLowerCase()
          )
        )
      })
      // console.log('globalFilterdDoctors', doctors, filteredSpeciality)
      setFilteredDoctors(filteredSpeciality)
    } else {
      setFilteredDoctors(doctors)
    }
  }

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (Math.ceil(scrollTop + clientHeight + 2) >= scrollHeight) {
        console.log(
          'scrollTop, scrollHeight, clientHeight',
          scrollTop + clientHeight,
          scrollHeight
        )

        setScrollHeightTop(scrollHeight)
        // page >= limit_search || page === 1
        if (scrollHeightTop < scrollHeight) {
          setPageLimit((pageLimit) => pageLimit + 10)
        }
      }
    }
  }

  return (
    <div>
      <BackLink myLinks={links} type="mobile">
        <Button icon={<PlusOutlined />}>Add your review</Button>
      </BackLink>

      <LayoutWrapper>
        <BannerItems
          hospitalDetails={hospitalDetails}
          globalFilterdDoctors={globalFilterdDoctors}
          saved={saved}
          setSaved={setSaved}
          debounce_fun={handleSearchResults}
        />
      </LayoutWrapper>
      <NavbarMenu />

      <ScrollWrap>
        <FilterPanelMobile />
      </ScrollWrap>

      <FilterNav
        onSubmitFilter={onSubmitFilter}
        specialities={specialities}
        globalFilterdDoctors={globalFilterdDoctors}
        filterPayload={{ ...filterPayload }}
      />
      <BackLink myLinks={links} type="desktop">
        {/* <Button icon={<PlusOutlined />}>Add your review</Button> */}
      </BackLink>

      <Doctors
        loading={loader}
        doctorResult={doctorResult}
        hospitalDetails={hospitalDetails}
        hospitalName={Name}
        saved={saved}
        setSaved={setSaved}
        debounce_fun={handleSearchResults}
        onScroll={onScroll}
        listInnerRef={listInnerRef}
      />

      <Services />
      <Departments
        doctors={doctors}
        hospitalName={Name}
        specialities={specialities}
        globalFilterdDoctors={globalFilterdDoctors}
      />
      <Spacer height={35} />
      {!_.isEmpty(Geo) && <Maps geoLocation={Geo} />}
      <Spacer height={35} />
      <Review hospitalDetails={hospitalDetails} user={user} />

      <Footer />
    </div>
  )
}

export default memo(Hospital)
