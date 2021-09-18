import ReactMapboxGl, { MapContext, Layer, Feature } from 'react-mapbox-gl'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { makeStyles } from '@mui/styles'
import { Marker } from 'react-mapbox-gl'
import Location from './../userPage/location.png'
import { GeoJSONLayer } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW5uaWVsaXUxMCIsImEiOiJja3RwZGdvNnQwOTgyMm9wdWNvN2xoNXNnIn0.if1fyLcj_7KGo2-AaQSQ7A',
})

export const GeoMap = () => {
  const location = 'I am here!'
  const geojson = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.13235092163085938, 51.518250335096376],
    },
    properties: {
      name: 'London',
    },
  }
  return (
    <Map
      style='mapbox://styles/mapbox/streets-v8'
      containerStyle={{
        height: '100%',
        width: '100%',
      }}
    >
      <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.13235092163085938, 51.518250335096376]} />
      </Layer>
      <GeoJSONLayer
        type='circle'
        id='marker2'
        data={geojson}
        symbolLayout={{
          'icon-image': 'harbor-15',
          'text-field': location,
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        }}
      />
      <Marker
        coordinates={[-0.13235092163085938, 51.518250335096376]}
        anchor='bottom'
      >
        <img src={Location} />
      </Marker>
    </Map>
  )
}
