import React, { useEffect, useState } from 'react'
import RegionMap from './components/RegionMap.jsx'
import fetchHistoryData from './fetchHistoryData.js'
import strings from './strings'

const App = () => {

  const [state, setState] = useState({ data: [], ready: false })

  useEffect(() => {
    console.log('App use effect')

    fetchHistoryData()
      .then(result => setState({ data: result, ready: true }))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='App'>
      <div className="header">
        <h1>{strings.header}</h1>
        <nav>
          <ul>
            <li><a href="/">{strings.nav_map}</a></li>
            <li><a href="/">{strings.nav_card}</a></li>
            <li><a href="/">{strings.nav_chart}</a></li>
          </ul>
        </nav>
      </div>
      <div className="container">
        {state.ready
          ? <RegionMap regions={state.data[0]} />
          : <div className="loading"></div>
        }
      </div>
      <div className="legend">
        <h2>{strings.legend}</h2>
        <p>{strings.Active}</p>
        <p>{strings.Deaths}</p>
      </div>
    </div>
  )
}

export default App