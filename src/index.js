import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './styles/index.scss'

/*
Lat Long
0 49 31
L 49 23
R 49 38
U 51 31
D 47 31

{
  "FIPS": "",
  "Admin2": "",
  "Province_State": "Cherkasy Oblast",
  "Country_Region": "Ukraine",
  "Last_Update": "2021-05-19 04:20:42",
  "Lat": "49.4444",
  "Long_": "32.0598",
  "Confirmed": "79218",
  "Deaths": "1166",
  "Recovered": "68437",
  "Active": "9615",
  "Combined_Key": "\"Cherkasy Oblast",
  "Incident_Rate": " Ukraine\"",
  "Case_Fatality_Ratio": "6566.7454994441905"
}
*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
)