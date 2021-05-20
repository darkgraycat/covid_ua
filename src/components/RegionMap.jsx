import React, { useEffect, useState } from 'react'
import RegionCard from './RegionCard.jsx'
import fetchCountryData from '../fetchCountryData.js'
import Scale from './Scale.jsx'
import names from '../regionNames'
import { CENTER, SCALEX, SCALEY } from '../mapParams'


const RegionMap = () => {

  const [state, setState] = useState({ data: {}, ready: false })

  const fetchData = () => {
    fetchCountryData('Ukraine')
      .then(result => {
        setState({ data: result, ready: true })
      })
      .catch(e => console.log(e))
  }

  useEffect(() => fetchData(), [])

  return (
    <div className='RegionMap'>
      {state.ready
        ? state.data.map(region => {

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
            active: Active,
            confirmed: Confirmed,
            recovered: Recovered,
            deaths: Deaths
          }

          return (
            <>
              <Scale
                data={data}
                top={top}
                left={left}
              />
              <RegionCard
                name={names[Province_State]}
                data={data}
                top={top}
                left={left}
              />
            </>
          )
        })
        : <div>Loading</div>
      }
    </div>
  )
}

export default RegionMap