import React, { useEffect } from 'react'
import RegionMap from './components/RegionMap.jsx'
import makeScrollable from './makeScrollable.js'
import strings from './strings'


const App = () => {

  useEffect(() => {
    makeScrollable(document.querySelector('.RegionMap'))
  }, [])

  return (
    <div className='App'>
      <div className="header">
        <h1>{strings.header}</h1>
      </div>
      <div className="container">
        <RegionMap />
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