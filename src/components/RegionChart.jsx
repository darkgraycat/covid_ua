import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import strings from '../strings.js'

const RegionChart = ({ history }) => {

  const test2 = () => {
    const dayN = new Date().getDay()
    const labels = strings.days.map((day, i, arr) => arr[(i + dayN) % 7]).reverse()

    const result = labels
    console.log('test', result)
  }

  const test = () => {
    console.log('creating chart')
    Chart.register(...registerables)
    new Chart(
      document.getElementById('chart-canvas'),
      {
        type: 'line',
        data: {
          labels: '12345'.split(''),
          datasets: [
            {
              label: 'My first Dataset',
              backgroundColor: 'white',
              borderColor: 'red',
              data: [4, 2, 3, 1, 20]
            }
          ]
        },
        options: {
          maintainAspectRatio: false
        }
      }
    )
  }

  useEffect(() => {
    test()
    test2()
  }, [])

  return (
    <div className="RegionChart">
      <canvas id='chart-canvas'></canvas>
    </div>
  )
}

export default RegionChart