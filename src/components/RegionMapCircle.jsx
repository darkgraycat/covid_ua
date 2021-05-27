import React from 'react'

const FACTOR = 0.01

const RegionMapCircle = ({ data, top, left }) => {

  const { active, deaths } = data

  const sizes = [
    active * FACTOR,
    (active + deaths) * FACTOR,
  ]

  const colors = ['#888', '#222']

  return (
    <div className="RegionMapCircle" style={{
      top: top + 'px',
      left: left + 'px'
    }}>
      <div className="RegionMapCircle__item" style={{ width: sizes[1], height: sizes[1], backgroundColor: colors[1] }}></div>
      <div className="RegionMapCircle__item" style={{ width: sizes[0], height: sizes[0], backgroundColor: colors[0] }}></div>
    </div>
  )
}

export default RegionMapCircle