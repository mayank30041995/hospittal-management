import { Button, Col, Row, Typography } from 'antd'
import { RiseOutlined } from '@ant-design/icons'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React, { useReducer } from 'react'
import { Router } from 'next/router'
let { Title } = Typography
export class Maps extends React.Component {
  render() {
    const { Latitude, Longitude } = this.props.geoLocation

    const mapStyles = {
      marginLeft: '5%',
      width: '90%',
      height: '100%',
    }

    console.log('GeoLocation', this.props.geoLocation)
    return (
      <div style={{ marginTop: '34px', height: '110vh' }}>
        <Title
          level={3}
          style={{
            marginLeft: '5%',
            color: '#545454',
            fontFamily: 'Inter',
            fontWeight: 500,
          }}
        >
          Location:{' '}
          <Button icon={<RiseOutlined />}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination_place_id=undefined&destination=undefined"
              target="_blank"
            >
              {' '}
              Get Directions
            </a>
          </Button>
        </Title>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: Latitude, lng: Longitude }}
        >
          <Marker position={{ lat: Latitude, lng: Longitude }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  // apiKey: 'AIzaSyBNAGWae9mr_reJCVsysjfJirkb7wZzL9U',
  apiKey: '',
})(Maps)
