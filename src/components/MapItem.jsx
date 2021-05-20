import React from 'react'

const MapItem = ({ x, y, children }) => {
  return (
    <div style={{
      position: 'absolute',
      top: x + 'px',
      left: y + 'px'
    }}></div>
  )
}

export default MapItem