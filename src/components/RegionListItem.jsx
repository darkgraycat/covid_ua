import React from 'react'
import strings from '../strings'

const RegionListItem = ({ name, data }) => {

  const {
    active,
    confirmed,
    recovered,
    deaths,

    newActive,
    newConfirmed,
    newRecovered,
    newDeaths
  } = data

  return (
    <div className="RegionListItem">
      <div className="RegionListItem__title">{strings.regions[name]}</div>
      <div className="RegionListItem__desc">
        <p>{strings.Active}: <span>{active}</span><span>+{newActive}</span></p>
        <p>{strings.Confirmed}: <span>{confirmed}</span><span>+{newConfirmed}</span></p>
        <p>{strings.Recovered}: <span>{recovered}</span><span>+{newRecovered}</span></p>
        <p>{strings.Deaths}: <span>{deaths}</span><span>+{newDeaths}</span></p>
      </div>
    </div>
  )
}

export default RegionListItem