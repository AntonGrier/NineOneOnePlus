import ReactMapboxGl, { MapContext, Layer, Feature } from 'react-mapbox-gl'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { makeStyles } from '@mui/styles'

const Map = ReactMapboxGl({
  accessToken:
    'sk.eyJ1IjoiYW5uaWVsaXUxMCIsImEiOiJja3RwZGtmMncwa3AwMndwMzl3M2tiNWgwIn0.MCefcrkH4JVM1Pgw9cjETA',
})

export const GeoMap = () => {
  return (
    <Map
      style='mapbox://styles/mapbox/streets-v8'
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  )
}
