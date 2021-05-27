import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import RegionList from './components/RegionList.jsx'
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
      <Router>
        <div className="header">
          <h1>{strings.header}</h1>
          <nav>
            <ul>
              {/* mb add some homepage with aboutme */}
              <li><Link to='/'>{strings.nav_map}</Link></li>
              <li><Link to='/cards'>{strings.nav_card}</Link></li>
              <li><Link to='/chart'>{strings.nav_chart}</Link></li>
            </ul>
          </nav>
        </div>

        <div className="container">
          <Route path='/chart' exact>
            {state.ready
              ? <div className="loading">NOT IMPLEMENTED</div>
              : <div className="loading"></div>
            }
          </Route>
          <Route path='/cards' exact>
            {state.ready
              ? <RegionList history={state.data} />
              : <div className="loading"></div>
            }
          </Route>
          <Route path='/' exact>
            {state.ready
              ? <RegionMap regions={state.data[0]} />
              : <div className="loading"></div>
            }
          </Route>
        </div>

        <div className="legend">
          <h2>{strings.legend}</h2>
          <p>{strings.Active}</p>
          <p>{strings.Deaths}</p>
        </div>
      </Router>
    </div>
  )
}

export default App