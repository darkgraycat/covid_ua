import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import RegionList from './components/RegionList.jsx'
import RegionMap from './components/RegionMap.jsx'
import RegionChart from './components/RegionChart.jsx'
import fetchHistoryData from './fetchHistoryData.js'
import strings from './strings'

const App = () => {

  const [state, setState] = useState({ data: [], ready: false })

  useEffect(() => {
    fetchHistoryData()
      .then(result => setState({ data: result, ready: true }))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <div className="header">
          <h1>{strings.header}</h1>
          <nav>
            <ul>
              <li><Link to='/'>{strings.nav_map}</Link></li>
              <li><Link to='/cards'>{strings.nav_card}</Link></li>
              <li><Link to='/chart'>{strings.nav_chart}</Link></li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path='/cards'>
            <div className="container">
              {state.ready
                ? <RegionList history={state.data} />
                : <div className="loading"></div>
              }
            </div>
          </Route>
          <Route path='/chart'>
            <div className="chart-container">
              {state.ready
                ? <RegionChart history={state.data} />
                : <div className="loading"></div>
              }
            </div>
          </Route>
          <Route path='/'>
            <div className="map-container">
              {state.ready
                ? <RegionMap regions={state.data[0]} />
                : <div className="loading"></div>
              }
            </div>
          </Route>
        </Switch>

        <div className="legend">
          <h2>{strings.legend}</h2>
          <p>{strings.Active}</p>
          <p>{strings.Deaths}</p>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App