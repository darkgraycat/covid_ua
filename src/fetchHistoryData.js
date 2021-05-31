const HISTORY_DAYS = 7

export default async () => {
  const history = []
  for (let i = 0; i < HISTORY_DAYS; i++) {
    history.push(
      (await fetchData(generateURL(i + 1)))
        .filter(data => data['Country_Region'] === 'Ukraine')
    )
  }
  return history
}

const generateURL = day => {
  const path = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
  const now = new Date()
  const d = now.getDate() - day
  const m = now.getMonth() + 1
  const y = now.getFullYear()
  return `${path}${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}-${y}.csv`
}

const fetchData = async URL => fetch(URL)
  .then(r => r.text())
  .then(t => parse(t))


const parse = csv => {
  let result = []

  const lines = csv.split('\n')
  const headers = lines[0].split(',')

  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i].split(',')
    const obj = {}
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = line[j]
    }
    result.push(obj)
  }
  return result
}