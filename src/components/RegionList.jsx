import React from 'react'
import RegionListItem from './RegionListItem.jsx'

const RegionList = ({ history }) => {
  const [newer, older] = history
  return (
    <ul className="RegionList">
      {newer.map((region, i) => {
        const data = {
          active: Number(newer.Active),
          confirmed: Number(newer.Confirmed),
          recovered: Number(newer.Recovered),
          deaths: Number(newer.Deaths),
          newActive: Number(newer.Active - older.Active),
          newConfirmed: Number(newer.Confirmed - older.Confirmed),
          newRecovered: Number(newer.Recovered - older.Recovered),
          newDeaths: Number(newer.Deaths - older.Deaths)
        }
        return <li key={i}>
          <RegionListItem name={region['Province_State']} data={data} />
        </li>
      })}
    </ul>
  )
}

export default RegionList