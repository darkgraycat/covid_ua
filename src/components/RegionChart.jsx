import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import strings from '../strings.js'

const RegionChart = ({ history }) => {

  const getRandomColor = () => {
    return `rgb(${~~(Math.random() * 255)},${~~(Math.random() * 255)},${~~(Math.random() * 255)})`
  }

  const createData = (from, to) => {
    const dayN = new Date().getDay()
    const labels = strings.days.map((day, i, arr) => arr[(i - 1 + dayN) % 7])
    const datasets = []
    history.map((dayData, i) => {
      dayData.map((regionData, j) => {
        if (j >= from && j < to) {
          const index = j - from
          if (!datasets[index]) {
            const color = getRandomColor()
            datasets[index] = {
              label: strings.regions[regionData.Province_State],
              backgroundColor: color,
              borderColor: color,
              data: [],
            }
          }
          datasets[index].data[i] = regionData.Active
        }
      })
    })
    return {
      labels,
      datasets
    }
  }

  const createChart = (data, element) => {
    Chart.register(...registerables)
    new Chart(
      element,
      {
        type: 'line',
        data,
        options: {
          responsive: true
        }
      }
    )
  }

  useEffect(() => {
    createChart(createData(0, 9), document.getElementById('chart-canvas-1'))
    createChart(createData(9, 18), document.getElementById('chart-canvas-2'))
    createChart(createData(18, 27), document.getElementById('chart-canvas-3'))
  }, [])

  return (
    <div className="RegionChart">
      <canvas id='chart-canvas-1'></canvas>
      <canvas id='chart-canvas-2'></canvas>
      <canvas id='chart-canvas-3'></canvas>
    </div>
  )
}

export default RegionChart