import React from 'react'
import names from '../regionNames.js'

const CENTER = [49.0139, 32.2858]
const SCALEX = 100
const SCALEY = 150
const RegionCard = ({ region }) => {

  const { Province_State, Lat, Long_ } = region

  return (
    <div className='RegionCard' style={{
      top: (CENTER[0] - Lat) * SCALEY,
      left: (Long_ - CENTER[1]) * SCALEX
    }}>

      <div className="RegionCard__title">
        {names[Province_State]}
      </div>
    </div>
  )
}

export default RegionCard