export default async () => {
  const path = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'

  const now = new Date()
  const d = now.getDate()
  const m = now.getMonth() + 1
  const y = now.getFullYear()

  try {
    let response = await fetch(path + getFilename(m, d, y))
    if (!response.ok) {
      response = await fetch(path + getFilename(m, d - 1, y))
      if (!response.ok) throw new Error('=(')
    }
    return getCountryData('Ukraine', parse(await response.text()))
  } catch (err) {
    console.error(err)
  }

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

const getFilename = (m, d, y) => `${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}-${y}.csv`

const getCountryData = (country, data) => {
  return data.filter(o => o['Country_Region'] == country)
}