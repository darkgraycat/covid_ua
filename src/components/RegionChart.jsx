import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import strings from '../strings.js'

const RegionChart = ({ history }) => {

  const getRandomColor = () => {
    return `rgb(${~~(Math.random() * 255)},${~~(Math.random() * 255)},${~~(Math.random() * 255)})`
  }

  const createData = () => {
    const dayN = new Date().getDay()
    const labels = strings.days.map((day, i, arr) => arr[(i - 1 + dayN) % 7])
    const datasets = []
    history.map((dayData, i) => {
      dayData.map((regionData, j) => {
        if (!datasets[j]) {
          const color = getRandomColor()
          datasets[j] = {
            label: strings.regions[regionData.Province_State],
            backgroundColor: color,
            borderColor: color,
            data: [],
          }
        }
        datasets[j].data[i] = regionData.Active
      })
    })
    console.log(labels)
    return {
      labels,
      datasets
    }
  }

  const createChart = (data) => {
    console.log('creating chart')
    Chart.register(...registerables)
    new Chart(
      document.getElementById('chart-canvas'),
      {
        type: 'line',
        data,
        options: {
          maintainAspectRatio: false,
          responsive: true
        }
      }
    )
  }

  useEffect(() => {
    createChart(createData())
    console.log('color', getRandomColor())
    console.log('color', getRandomColor())
    console.log('color', getRandomColor())
    console.log('color', getRandomColor())
    console.log('color', getRandomColor())
  }, [])

  return (
    <div className="RegionChart">
      <canvas id='chart-canvas'></canvas>
    </div>
  )
}

export default RegionChart