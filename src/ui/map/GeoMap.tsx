import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker } from 'react-mapbox-gl'
import Location from './location.png'
import { GeoJSONLayer } from 'react-mapbox-gl'
import { FunctionComponent, memo, useState } from 'react'
import DirectionsCarSharpIcon from '@mui/icons-material/DirectionsCarSharp'
import mapboxgl from 'mapbox-gl'

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, @typescript-eslint/no-var-requires */
import { createPulsingDot } from './dot'
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
  const [clicked, setClicked] = useState(false)
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
      style='mapbox://styles/mapbox/streets-v11'
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

        map.addImage('pulsing-dot', createPulsingDot(map), { pixelRatio: 2 })

        map.addSource('dot-point', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: locationCoordinates, // icon position [lng, lat]
                },
              } as any,
            ],
          },
        })
        map.addLayer({
          id: 'layer-with-pulsing-dot',
          type: 'symbol',
          source: 'dot-point',
          layout: {
            'icon-image': 'pulsing-dot',
          },
        })

        map.on('click', 'layer-with-pulsing-dot', (e) => {
          map.flyTo({
            center: locationCoordinates,
            zoom: 15.5,
            speed: 0.6,
            bearing: 90,
            pitch: 50,
          })

          // start rotating
          if (!clicked) {
            setTimeout(() => rotateCamera(90 * 6), 3800)
            setClicked(true)
          }
        })

        // rotate around a point
        function rotateCamera(timestamp: number) {
          console.log(timestamp)
          // clamp the rotation between 0 -360 degrees
          // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
          map.rotateTo((timestamp / 6) % 360, { duration: 0 })
          // Request the next frame of the animation.
          setTimeout(() => rotateCamera(timestamp + 1), 10)
        }
      }}
    >
      {/* <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={locationCoordinates} />
      </Layer> */}
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
      {/* <Marker coordinates={locationCoordinates} anchor='bottom'>
        {user ? (
          <DirectionsCarSharpIcon fontSize='large' />
        ) : (
          <img src={Location} />
        )}
      </Marker> */}
    </Map>
  )
}

export const GeoMap = memo(GeoMapBase)
