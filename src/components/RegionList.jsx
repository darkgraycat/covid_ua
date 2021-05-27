import React from 'react'
import RegionListItem from './RegionListItem.jsx'

const RegionList = ({ history }) => {
  const [newer, older] = history
  return (
    <ul className="RegionList">
      {newer.map((region, i) => {
        const n = newer[i]
        const o = older[i]
        const data = {
          active: Number(n.Active),
          confirmed: Number(n.Confirmed),
          recovered: Number(n.Recovered),
          deaths: Number(n.Deaths),
          newActive: Number(n.Active - o.Active),
          newConfirmed: Number(n.Confirmed - o.Confirmed),
          newRecovered: Number(n.Recovered - o.Recovered),
          newDeaths: Number(n.Deaths - o.Deaths)
        }
        return <li key={i}>
          <RegionListItem name={region['Province_State']} data={data} />
        </li>
      })}
    </ul>
  )
}

export default RegionList