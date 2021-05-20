import React from 'react'

const FACTOR = 0.002

const Scale = ({ data, top, left }) => {

  const { active, confirmed, recovered, deaths } = data

  const sizes = [
    (confirmed * FACTOR) + 'px',
    (recovered * FACTOR) + 'px',
    (active * FACTOR) + 'px',
    (deaths * FACTOR) + 'px'
  ]
  const colors = ['#8884', '#8f86', '#f888', '#000f']

  return (
    <div className="Scale" style={{
      top: top + 'px',
      left: left + 'px'
    }}>
      <div className="Scale__item" style={{ width: sizes[0], height: sizes[0], backgroundColor: colors[0] }}></div>
      <div className="Scale__item" style={{ width: sizes[1], height: sizes[1], backgroundColor: colors[1] }}></div>
      <div className="Scale__item" style={{ width: sizes[2], height: sizes[2], backgroundColor: colors[2] }}></div>
      <div className="Scale__item" style={{ width: sizes[3], height: sizes[3], backgroundColor: colors[3] }}></div>
    </div>
  )
}

export default Scale