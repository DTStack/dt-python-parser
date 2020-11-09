import Python2 from './python2'

// import Python3 from './python3'

// export const Python3Parser = new Python3()
export const ParserPython2 = (stringArray) => {
  let resultArray
  const Python2Parser = new Python2()
  if(Array.isArray(stringArray)) {
    resultArray=stringArray.join('')

  }
  else{resultArray=stringArray}
  const result = Python2Parser.validate(resultArray)
  console.log(result)
  // }
  // catch(e){
  //   throw new Error(e)
  // }
  return result[0]
}