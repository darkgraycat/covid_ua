import React from 'react'
import names from '../regionNames.js'
import Scale from './Scale.jsx'

const CENTER = [49.0139, 32.2858]
const SCALEX = 100
const SCALEY = 150

const STRINGS = {
  'Active': 'Активно',
  'Confirmed': 'Підтверджено',
  'Recovered': 'Виліковано',
  'Deaths': 'Померло'
}

const RegionCard = ({ region }) => {

  const { Province_State, Lat, Long_ } = region
  const { Active, Confirmed, Recovered, Deaths } = region

  return (
    <div className='RegionCard' style={{
      top: (CENTER[0] - Lat) * SCALEY,
      left: (Long_ - CENTER[1]) * SCALEX
    }}>

      <div className="RegionCard__title">
        {names[Province_State]}
      </div>
      <div className="RegionCard__desc">
        <p>{STRINGS.Active}: <span>{Active}</span></p>
        <p>{STRINGS.Confirmed}: <span>{Confirmed}</span></p>
        <p>{STRINGS.Recovered}: <span>{Recovered}</span></p>
        <p>{STRINGS.Deaths}: <span>{Deaths}</span></p>
      </div>

      <Scale
        active={Active}
        confirmed={Confirmed}
        recovered={Recovered}
        deaths={Deaths}
      />
    </div>
  )
}

export default RegionCard