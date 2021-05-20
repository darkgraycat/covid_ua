import React from 'react'
import strings from '../strings'

const RegionCard = ({ name, data, top, left }) => {

  const { active, confirmed, recovered, deaths } = data

  const handleTouch = e => {
    const element = e.target.parentNode
    element.classList.toggle('active')
  }

  return (
    <div className='RegionCard' style={{
      top: top + 'px',
      left: left + 'px'
    }}>
      <div className="RegionCard__title" onTouchStart={handleTouch}>
        {name}
      </div>
      <div className="RegionCard__desc">
        <p>{strings.Active}: <span>{active}</span></p>
        <p>{strings.Confirmed}: <span>{confirmed}</span></p>
        <p>{strings.Recovered}: <span>{recovered}</span></p>
        <p>{strings.Deaths}: <span>{deaths}</span></p>
      </div>

    </div>
  )
}

export default RegionCard