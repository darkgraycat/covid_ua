import React from 'react'

const FACTOR = 0.002

const Scale = ({ active, confirmed, recovered, deaths }) => {
  const sizes = [
    (confirmed * FACTOR) + 'px',
    (recovered * FACTOR) + 'px',
    (active * FACTOR) + 'px',
    (deaths * FACTOR) + 'px'
  ]
  const colors = ['#8882', '#8f82', '#f888', '#000f']

  return (
    <div className="Scale">
      <div className="Scale__item" style={{ width: sizes[0], height: sizes[0], backgroundColor: colors[0] }}></div>
      <div className="Scale__item" style={{ width: sizes[1], height: sizes[1], backgroundColor: colors[1] }}></div>
      <div className="Scale__item" style={{ width: sizes[2], height: sizes[2], backgroundColor: colors[2] }}></div>
      <div className="Scale__item" style={{ width: sizes[3], height: sizes[3], backgroundColor: colors[3] }}></div>
    </div>
  )
}

export default Scale