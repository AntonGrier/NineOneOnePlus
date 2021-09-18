import ReactMapboxGl from 'react-mapbox-gl'
import { RouteComponentProps } from '@reach/router'
import { FunctionComponent, useEffect, useState } from 'react'

export const Map: FunctionComponent<RouteComponentProps> = () => {
  return
  ReactMapboxGl({
    accessToken:
      'sk.eyJ1IjoiYW5uaWVsaXUxMCIsImEiOiJja3RwZGtmMncwa3AwMndwMzl3M2tiNWgwIn0.MCefcrkH4JVM1Pgw9cjETA',
  })
}
