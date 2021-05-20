import React, { useEffect } from 'react'
import RegionMap from './components/RegionMap.jsx'
import makeScrollable from './makeScrollable.js'

const App = () => {

  useEffect(() => {
    makeScrollable(document.querySelector('.RegionMap'))
  }, [])

  return (
    <div className='App'>
      <div className="header">
        <h1>Covid situation at Ukraine</h1>
      </div>
      <div className="container">
        <RegionMap />
      </div>
    </div>
  )
}

export default App