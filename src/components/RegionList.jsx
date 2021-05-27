import React from 'react'

const RegionList = ({ history }) => {
  const [newer, older] = history
  return (
    <ul className="RegionList">
      {newer.map(region => {
        return <h2>region.Active</h2>
      })}
    </ul>
  )
}

export default RegionList