import React, { useEffect } from 'react'
import RegionMapItem from './RegionMapItem.jsx'
import RegionMapCircle from './RegionMapCircle.jsx'
import strings from '../strings'
import { CENTER, SCALEX, SCALEY } from '../mapParams'
import makeScrollable from '../makeScrollable.js'

const RegionMap = ({ regions }) => {

  useEffect(() => {
    console.log('Map use effect')
    makeScrollable(document.querySelector('.RegionMap'))
  }, [])

  return (
    <div className='RegionMap'>
      {
        regions.map(region => {

          const {
            Province_State,
            Lat,
            Long_,
            Active,
            Confirmed,
            Recovered,
            Deaths
          } = region

          const top = (CENTER[0] - Lat) * SCALEY
          const left = (Long_ - CENTER[1]) * SCALEX
          const data = {
            active: Number(Active),
            confirmed: Number(Confirmed),
            recovered: Number(Recovered),
            deaths: Number(Deaths)
          }

          return (
            <>
              <RegionMapCircle
                data={data}
                top={top}
                left={left}
              />
              <RegionMapItem
                name={strings.regions[Province_State]}
                data={data}
                top={top}
                left={left}
              />
            </>
          )
        })
      }
    </div>
  )
}

export default RegionMap