import Python2 from './python2'
import Python3 from './python3'

export const ParserPython2 = (stringArray) => {
  let resultArray
  const Python2Parser = new Python2()
  if(Array.isArray(stringArray)) {
    resultArray=stringArray.join('')

  }
  else{resultArray=stringArray}
  const result = Python2Parser.validate(resultArray)
  return result[0]
}
export const ParserPython3 = (stringArray) => {
  let resultArray
  const Python3Parser = new Python3()
  if(Array.isArray(stringArray)) {
    resultArray=stringArray.join('')
  }
  else{resultArray=stringArray}
  const result = Python3Parser.validate(resultArray)
  return result[0]
}