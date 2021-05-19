export default csv => {
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

// O(n*2)
