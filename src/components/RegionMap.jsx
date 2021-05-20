import React, { useEffect, useState } from 'react'
import RegionCard from './RegionCard.jsx'
import fetchCountryData from '../fetchCountryData.js'

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
        ? state.data.map(region => <RegionCard region={region} />)
        : <div>Loading</div>
      }
    </div>
  )
}

export default RegionMap