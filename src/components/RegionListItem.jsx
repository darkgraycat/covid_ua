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
        <p>{strings.Active}: <span>{active}<b style={{
          color: (newActive > 0) ? '#f80' : '#8f0'
        }}>{newActive}</b></span></p>
        <p>{strings.Confirmed}: <span>{confirmed}<b>{newConfirmed}</b></span></p>
        <p>{strings.Recovered}: <span>{recovered}<b>{newRecovered}</b></span></p>
        <p>{strings.Deaths}: <span>{deaths}<b>{newDeaths}</b></span></p>
      </div>
    </div>
  )
}

export default RegionListItem