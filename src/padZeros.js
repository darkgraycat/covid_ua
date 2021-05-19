export default (str, length) => {
  if (str.length >= length) return str
  const zeros = length - str.length
  return new Array(zeros).fill(0).join('').concat(str)
}