import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavLayout from '../components/NavLayout'
import Search from '../components/Search'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { useRouter } from 'next/router'
import withAuth from './withAuth'
import { AlignCenterOutlined } from '@ant-design/icons'
import { Modal, Row } from 'antd'
import { drawerFilter, loadDefaultOptions } from '@/redux/actions/appAction'
import MobileDrawerFilters from '../components/MobileDrawerFilters'
import { refreshApp } from '@/redux/actions/searchAction'
import { searches } from '../components/Search/cities'
import { fetchSearchJSON } from '@/utils/apiCalls'
import appConfig from '@/utils/appConfig'

const FilterDrawer = styledComponents(Modal)`
    min-width: 100%;
    position: fixed;
    top: 24rem;

  .ant-modal-content {
      padding: 11px;
      position: fixed;
      bottom: 0;
      width: 100%;
  }
`

function SpecialityPage() {
  const [filters, setFilters] = useState([])
  const [search, setSearch] = useState([
    {
      key: '',
      value: '',
      title: 'hospital',
    },
    {
      key: '',
      value: '',
      title: 'city',
    },
    { key: '', value: '', title: 'sort', name: 'Name' },
    { key: '', value: '0', title: 'Rating', name: 'Rating' },
    { key: '', value: 0, title: 'Beds', name: 'Beds' },
    { key: '', value: [], title: 'Experience', name: 'Experience' },
    { key: '', value: [], title: 'Price', name: 'Price' },
    { key: '', value: '', title: '', name: 'OnPhone' },
    { key: '', value: '', title: '', name: 'OnVideo' },
  ])

  const dispatch = useDispatch()
  const {
    searchResult,
    searchDoctorResult,
    loading,
    error,
    count,
    pagination,
  } = useSelector((state) => state.search)
  const defaultSearchOptions = useSelector(
    (state) => state.app?.defaultSearchOptions
  )
  const { drawer, filterType } = useSelector((state) => state.app)
  const { jwt, user: auth, _id } = useSelector((state) => state.auth)

  const router = useRouter()
  const { id, value } = router.query

  const isDuplicate = (filters) => {
    var valueArr = filters.map(function (item) {
      return item.key
    })
    var isDuplicate = valueArr.some(function (item, idx) {
      return valueArr.indexOf(item) != idx
    })
    return isDuplicate
  }

  async function fetchData() {
    if (value) {
      dispatch(refreshApp())
      const response = await fetchSearchJSON(
        `${
          appConfig.socketURL
        }/home/search?q=${value.toLowerCase()}&cat=speciality&limit=-1`
      )
        .then((body) => {
          if (body.length > 0) {
            setFilters([{ key: body[0].id }])
          } else {
            setFilters([{ key: value }])
          }
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(refreshApp())
      setSearch(searches)
      dispatch(loadDefaultOptions())
      if (!isDuplicate(filters)) {
        setFilters((filters) => [{ key: id }])
      }
    }
  }, [id])

  useEffect(() => {
    if (id?.length === 0) {
      fetchData()
    }
  }, [value])

  return (
    <div className={styles.main} key={id}>
      <Head>
        <title>HOSPLAN</title>
        <meta
          name="description"
          content="Search amongst finest specialist Doctors and get opinion, tele consultations, and schedule appointments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLayout dispatch={dispatch} useSelector={useSelector} />
      <Search
        search={search}
        setSearch={setSearch}
        dispatch={dispatch}
        searchResult={searchResult}
        searchDoctorResult={searchDoctorResult}
        loading={loading}
        type={router.query}
        loader={loading}
        error={error}
        count={count}
        pagination={pagination}
        qid={filters[0]?.key}
        filters={filters}
        setFilters={setFilters}
        defaultSearchOptions={defaultSearchOptions}
        auth={auth}
      />
      <Footer />

      <FilterDrawer open={drawer} closable={false} footer={null}>
        <Row justify="center">
          <AlignCenterOutlined
            style={{ fontSize: '15px', margin: '14px' }}
            onClick={() =>
              dispatch(drawerFilter({ drawer: false, filterType: '' }))
            }
          />
        </Row>
        <MobileDrawerFilters
          search={search}
          setSearch={setSearch}
          dispatch={dispatch}
          searchResult={searchResult}
          type={filterType}
          pageType="specialities"
          qid={id}
          pagination={pagination}
          filters={filters}
          activeUrl={router.query}
          resultType={router.query.type}
        />
      </FilterDrawer>
    </div>
  )
}

export default SpecialityPage
// export default withAuth(speciality)
