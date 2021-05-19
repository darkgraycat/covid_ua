import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import fetchData from './fetchData.js'
import padZeros from './padZeros.js'
import parseCsv from './parseCsv.js'




const date = new Date()
const dd = date.getDate() - 1 // yesterday data
const mm = date.getMonth() + 1  // january is 0
const yy = date.getFullYear()
const csvName = `${padZeros(String(mm), 2)}-${padZeros(String(dd), 2)}-${yy}.csv`
const URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + csvName

// const data = fetch(URL)
//   .then(response => response.text())
//   .then(text => {



//     // console.log(text)
//     const result = parseCsv(text)
//     const ukraine = getCountryData('Ukraine', result)
//     console.log(ukraine)

//     return result
//   })
//   .then(res => {
//     console.log('Ukraine', getCountryData('Ukraine', res))
//   })

// const getCountryData = (country, data) => {
//   return data.filter(o => o['Country_Region'] == country)
// }


const dddd = fetchData()
  .then(resp => {
    console.log(resp)
    return resp
  })




ReactDOM.render(
  <App />,
  document.getElementById('root')
)