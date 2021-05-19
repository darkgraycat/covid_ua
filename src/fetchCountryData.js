export default async country => (await getData()).filter(o => o['Country_Region'] == country)

let data = null

const getData = async () => {
  if (data) return data

  const now = new Date()
  const d = now.getDate() - 1
  const m = now.getMonth() + 1
  const y = now.getFullYear()

  const path = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
  const file = `${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}-${y}.csv`

  data = await fetch(path + file)
    .then(r => r.text())
    .then(t => parse(t))

  return data
}

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