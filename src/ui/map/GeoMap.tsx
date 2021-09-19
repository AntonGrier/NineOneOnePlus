import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker } from 'react-mapbox-gl'
import Location from './location.png'
import { GeoJSONLayer } from 'react-mapbox-gl'
import { FunctionComponent, memo } from 'react'
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp'
import mapboxgl from 'mapbox-gl'

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, @typescript-eslint/no-var-requires */
;(mapboxgl as any).workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved, @typescript-eslint/no-var-requires*/

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
        height: '100%',
        width: '100%',
      }}
      onStyleLoad={(map) => {
        const layers = map.getStyle().layers
        const labelLayerId = layers
          ? layers.find(
              (layer: any) =>
                layer.type === 'symbol' && layer.layout['text-field'],
            )?.id
          : undefined
        // add fill extrusion layers
        map.addLayer(
          {
            id: 'add-3d-buildings',
            source: 'composite',
            'source-layer': 'building',
            filter: ['==', 'extrude', 'true'],
            type: 'fill-extrusion',
            minzoom: 15,
            paint: {
              'fill-extrusion-color': '#aaa',

              // Use an 'interpolate' expression to
              // add a smooth transition effect to
              // the buildings as the user zooms in.
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height'],
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height'],
              ],
              'fill-extrusion-opacity': 0.6,
            },
          },
          labelLayerId,
        )
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
