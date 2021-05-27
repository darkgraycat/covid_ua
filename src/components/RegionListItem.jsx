import React from 'react'

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
    <div className="RegionListItem"></div>
  )
}

export default RegionListItem