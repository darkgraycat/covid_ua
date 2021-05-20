import React from 'react'

const FACTOR = 0.01

const Scale = ({ data, top, left }) => {

  const { active, deaths } = data

  const sizes = [
    active * FACTOR,
    (active + deaths) * FACTOR,
  ]

  const colors = ['#888', '#222']

  return (
    <div className="Scale" style={{
      top: top + 'px',
      left: left + 'px'
    }}>
      <div className="Scale__item" style={{ width: sizes[1], height: sizes[1], backgroundColor: colors[1] }}></div>
      <div className="Scale__item" style={{ width: sizes[0], height: sizes[0], backgroundColor: colors[0] }}></div>
    </div>
  )
}

export default Scale