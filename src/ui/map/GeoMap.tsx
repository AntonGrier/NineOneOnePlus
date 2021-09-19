import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker } from 'react-mapbox-gl'
import Location from './location.png'
import { GeoJSONLayer } from 'react-mapbox-gl'
import { FunctionComponent, memo } from 'react'
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW5uaWVsaXUxMCIsImEiOiJja3RwZGdvNnQwOTgyMm9wdWNvN2xoNXNnIn0.if1fyLcj_7KGo2-AaQSQ7A',
})

interface GeoMapProps {
  user?: boolean
}

const locationCoordinates: any = [-123.11099370476167, 49.288940979437946]

const GeoMapBase: FunctionComponent<GeoMapProps> = ({ user }) => {
  const location = user ? 'Response' : 'User'
  const geojson = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: locationCoordinates,
    },
    properties: {
      name: 'Canada',
    },
  }
  return (
    <Map
      center={locationCoordinates}
      style='mapbox://styles/mapbox/streets-v8'
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={locationCoordinates} />
      </Layer>
      <GeoJSONLayer
        type='circle'
        id='marker2'
        data={geojson}
        symbolLayout={{
          'text-field': location,
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0],
          'text-anchor': 'top',
        }}
      />
      <Marker coordinates={locationCoordinates} anchor='bottom'>
        {user ? (
          <DirectionsCarSharpIcon fontSize='large' />
        ) : (
          <img src={Location} />
        )}
      </Marker>
    </Map>
  )
}

export const GeoMap = memo(GeoMapBase)
